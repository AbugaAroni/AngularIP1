import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
     new Quotes(1, 'Motivation', 'Dont drink milk after 5', 'Shen Tzu','Abuga', new Date(2017,2,17)),
     new Quotes(2, 'Power', 'Buy Cookies  for every not just yourself', 'Shen Tzu', 'Abuga', new Date(2018,3,18)),
     new Quotes(3, 'Wisdom', 'Get lit only on weekends', 'Abuga','Abuga', new Date(2019,3,18)),
     new Quotes(4, 'Strength', 'The way forward is always the way', 'John', 'Abuga', new Date(2020,5,5)),
     new Quotes(5, 'Humility', 'Though life is tough, it can always be tougher', 'Liz Tzu', 'Abuga', new Date(2020,4,4)),
     new Quotes(6, 'Wealth', 'No smoke, no fires', 'Liam Tzu', 'Abuga', new Date(2020,4,4)),
   ];

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isDelete, index){
    if (isDelete) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
