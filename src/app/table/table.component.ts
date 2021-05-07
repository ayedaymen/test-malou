import { AfterViewInit, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Posts } from '../_models/posts';
import { PostsService } from '../_services/posts.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input()
  dateResive!: string;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  posts!: Posts[];
  isValid = true;
  isLoading = true;
  constructor(private postservice: PostsService) { }

  displayedColumns: string[] = ['id', 'name', 'votes_count', 'day'];
  dataSource = new MatTableDataSource<Posts>(this.posts);

  ngOnInit() {
    this.showPosts();
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes.dateResive) {
      this.showPosts();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // this method to put post in a table
  showPosts() {
    this.postservice.getPostByday(this.dateResive).subscribe(x => {
      this.posts = x;
      this.dataSource = new MatTableDataSource(this.posts.filter(e => e.day == this.dateResive));
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
      if (this.posts.length > 0) {
        this.isValid = true;
      }
      else {
        this.isValid = false;
      }

    }, error => this.isLoading = false);

  }
}

