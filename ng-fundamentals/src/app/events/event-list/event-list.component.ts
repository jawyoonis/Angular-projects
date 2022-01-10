import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/shared/events.service';
import { IEvents } from 'src/app/shared/model';
declare let toastr: { success: (arg0: any) => void; }
@Component({

  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:IEvents[] | undefined
  constructor(private eventService: EventsService, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events= this.route.snapshot.data['events']
    
  }

 
}
