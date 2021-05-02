import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Posts } from '../_models/posts';
import { PostsService } from '../_services/posts.service';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class CharteComponent implements OnInit  {
@Input()
dateTable!:string;
constructor(private postservice: PostsService ) { }
posts!: Posts[];
postevote20!:Posts[];
postvote50!:Posts[];
postvote100!:Posts[];
  ngOnInit(): void {
    this.chartOptions = this.getChartOptions();
    console.log(this.chartOptions);
    this.showPosts();
    console.log(this.postvote100);
    
  }

  showPosts() {
    console.log(this.dateTable);
    
    this.postservice.getPostByday(this.dateTable).subscribe(x => {
      this.posts=x;
      console.log(x);
      
      this.posts.forEach(e => {
      if(e.votes_count<20){
        this.postevote20.push(e)
      console.log(e);
      }
       if(e.votes_count>20&&e.votes_count<=50)
        this.postvote50.push(e);
      else if(e.votes_count>=100)
        this.postvote100.push(e);
    });
    
    })
      
  }
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['dateTable']) {
      this.showPosts();
      console.log(this.postvote100);

    }
  }

  public chartOptions :any = {};
  getChartOptions() {
    return {
    
        series: [44, 55, 13, 43, 22],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      };
    }
  }
  

