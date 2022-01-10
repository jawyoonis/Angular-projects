import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EventsService } from 'src/app/shared/events.service';
import { IEvents, ISession } from 'src/app/shared/model';

@Component({

  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.css']
})
export class EventdetailsComponent implements OnInit {
  event: IEvents | undefined;
  addMode: boolean | undefined;
  filterBy: string="all"
  sortedBy: string="votes";

  constructor(private eventService: EventsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) =>
     {
       this.event= this.eventService.getEvent(+params['id'])
      });
      this.addMode=false
   
  }
  addSession(){
    this.addMode=true;
  }

  saveNewSession(session:ISession  ){
    const nextId= Math.max.apply(this.event?.sessions?.map(s => s.id));
    session.id= nextId
    this.event?.sessions?.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode=false;
  }

  cancelNewSession(){
    this.addMode=false
  }
  

}
