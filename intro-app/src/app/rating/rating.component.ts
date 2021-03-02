import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() rating: number = 0;
  @Output() onChange: EventEmitter<number> = new EventEmitter<number>();
  constructor() {
    
   }

  ngOnInit(): void {
  }

  updateRating(newValue: number) {
    console.log("update rating", newValue);
    this.rating = newValue
    this.onChange.emit(this.rating)
  }

}
