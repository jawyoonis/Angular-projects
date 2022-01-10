import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-thumnails',
  templateUrl: './event-thumnails.component.html',
  styleUrls: ['./event-thumnails.component.css']
})
export class EventThumnailsComponent implements OnInit {
  @Input() event: any

  constructor() { }

  ngOnInit(): void {
  }
 

  getStartTimeClass(){
  if (this.event && this.event.time === "8:00 am")
    return ['green', 'bold']
  return []
  
    
  }

  

}
