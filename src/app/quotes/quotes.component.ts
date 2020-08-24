import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
     new Quotes(1, 'Motivation', 'Dont drink milk after 5', 'Shen Tzu','Abuga', new Date(2017,0,17)),
     new Quotes(2, 'Power', 'Buy Cookies  for every not just yourself', 'Shen Tzu', 'Abuga', new Date(2018,3,18)),
     new Quotes(3, 'Wisdom', 'have fun only on weekends', 'Abuga','Abuga', new Date(2020,7,20)),
   ];

   addNewQuote(Quote){
    let QuoteLength = this.quotes.length;
    Quote.id = QuoteLength+1;
    Quote.completeDate = new Date();
    this.quotes.push(Quote)
  }

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }

  upvoteQuote(isUpvote, index){
    if (isUpvote) {
      this.quotes[index].upvote ++;
    }
  }

  downvoteQuote(isDownvote, index){
    if (isDownvote) {
      this.quotes[index].downvote ++;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
