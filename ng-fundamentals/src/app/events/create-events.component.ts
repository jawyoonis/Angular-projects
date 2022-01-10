import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../shared/events.service';

@Component({
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css']
})
export class CreateEventsComponent implements OnInit {
  isDirty: boolean=false;
  newEvent: any

  constructor(private router: Router, private eventService: EventsService ) { }

  ngOnInit(): void {
  }

  saveEvent(formValues:any){
    this.eventService.saveEvent(formValues)
    this.isDirty=false;
    this.router.navigate(["/events"])
    
  }
  cancel(){
    this.router.navigate(['/events'])
  }

}
