import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Posts } from '../_models/posts';
import { PostsService } from '../_services/posts.service';
@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})


export class CharteComponent implements OnInit,OnChanges{
    @Input()
    dateTable!: string;
    sometable!: number;
    public chartOptions: any = {};
    posts!: Posts[];
    postevote20!: number;
    postvote50 !: number;
    postvote80 !: number;
    postvote100 !: number;
    postvote120 !: number;
    numberVote!: number[];
    isValid = true;
    constructor(private postservice: PostsService) { }

    ngOnInit(): void {

        console.log(this.chartOptions);
        this.numberVote = [];
        this.showPosts();
        console.log(this.postvote100);

    }
    ngOnChanges(changes: SimpleChanges): void{
        // only run when property "data" changed
        if (changes.dateTable) {
            this.showPosts();
        }
    }

    showPosts(): void {
        this.postservice.getPostByday(this.dateTable).subscribe(x => {
            this.numberVote = [];
            this.postevote20 = 0;
            this.postvote50 = 0;
            this.postvote80 = 0;
            this.postvote100 = 0;
            this.postvote120 = 0;
            this.posts = x;
            x.forEach(e => {
                if (e.votes_count <= 20)
                {this.postevote20++;}
                else if (e.votes_count > 20 && e.votes_count <= 50)
                {this.postvote50++;}
                else if (e.votes_count > 50 && e.votes_count <= 80)
                {this.postvote50++;}
                else if (e.votes_count > 80 && e.votes_count <= 100)
                {this.postvote100++;}
                else if (e.votes_count >= 100)
                {this.postvote120++;}
            });
            this.numberVote.push(this.postevote20, this.postvote50, this.postvote80, this.postvote100, this.postvote120);
            this.chartOptions = this.getChartOptions(this.numberVote);
            this.sometable = this.numberVote.reduce((a, b) => a + b, 0);
            if (this.sometable > 0)
            {this.isValid = true;}
            else
            {this.isValid = false;}

        });

    }


    getChartOptions(data: number[]): any {
        return {

            series: data,
            chart: {
                width: 380,
                type: 'pie'
            },
            labels: [' nbr vote <=20', '20>nbr vote >50',
                '50>nbr vote =>80', '80>nbr vote =>100 ', '100>nbr vote =>120'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }
            ],
            title: {
                text: 'Pourcentage des produits tirer par nombre de votes',
                align: 'left',
                margin: 10,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize: '14px',
                    fontWeight: 'strong',
                    fontFamily: 'font-weight',
                    color: '#263238'
                },
            }

        };
    }
}


