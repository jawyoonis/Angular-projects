import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/shared/events.service';
import { ISession } from 'src/app/shared/model';
import { AuthService } from 'src/app/user/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent{
  searchTerm:string="";
  foundSessions: ISession[] = [];

  constructor(public auth:AuthService, private eventService:EventsService) { }

  searchSessions(searchTerm:string){
    this.eventService.searchSessions(searchTerm).subscribe(session =>{
      this.foundSessions = session;
      console.log(this.foundSessions);
    })


    
  }
}
