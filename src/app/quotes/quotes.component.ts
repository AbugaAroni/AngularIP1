import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
     {id:1,name: 'Motivation', description:'Dont drink milk after 5', author: 'Shen Tzu', submitter:'Abuga', upvote:0, downvote:0},
     {id:2,name: 'Power', description:'Buy Cookies  for every not just yourself', author: 'Shen Tzu', submitter:'Abuga', upvote:0, downvote:0},
     {id:3,name: 'Wisdom', description:'Get lit only on weekends', author: 'Abuga', submitter:'Abuga', upvote:0, downvote:0},
     {id:4,name: 'Strength', description:'The way forward is always the way', author: 'John', submitter:'Abuga', upvote:0, downvote:0},
     {id:5,name: 'Humility', description:'Though life is tough, it can always be tougher', author: 'Liz Tzu', submitter:'Abuga', upvote:0, downvote:0},
     {id:6,name: 'Wealth', description:'No smoke, no fires', author: 'Liam Tzu', submitter:'Abuga', upvote:0, downvote:0},
   ];

  constructor() { }

  ngOnInit() {
  }

}
