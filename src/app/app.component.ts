import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
     {id:1,description:'Dont drink milk after 5', author: 'Shen Tzu'},
     {id:2,description:'Buy Cookies  for every not just yourself', author: 'Shen Tzu'},
     {id:3,description:'Get lit only on weekends', author: 'Abuga'},
     {id:4,description:'The way forward is always the way', author: 'John'},
     {id:5,description:'Though life is tough, it can always be tougher', author: 'Liz Tzu'},
     {id:6,description:'No smoke, no fires', author: 'Liam Tzu'},
   ];

}
