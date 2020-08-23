import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[] = [
     new Quotes(1, 'Motivation', 'Dont drink milk after 5', 'Shen Tzu','Abuga'),
     new Quotes(2, 'Power', 'Buy Cookies  for every not just yourself', 'Shen Tzu', 'Abuga'),
     new Quotes(3, 'Wisdom', 'Get lit only on weekends', 'Abuga','Abuga'),
     new Quotes(4, 'Strength', 'The way forward is always the way', 'John', 'Abuga'),
     new Quotes(5, 'Humility', 'Though life is tough, it can always be tougher', 'Liz Tzu', 'Abuga'),
     new Quotes(6, 'Wealth', 'No smoke, no fires', 'Liam Tzu', 'Abuga'),
   ];

   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
