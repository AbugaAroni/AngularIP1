import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input() quotes: Quotes;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() isUpvote = new EventEmitter<number>();
  @Output() isDownvote = new EventEmitter<number>();

  quotesDelete(deletes:boolean){
    this.isDelete.emit(deletes);
  }

  upvote(adds: number){
    this.isUpvote.emit(adds);
  }

  downvote(minus: number){
    this.isDownvote.emit(minus);
  }

  constructor() { }

  ngOnInit() {
  }

}
