import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';

import { EventsAppComponent } from './events-app.component';
import { EventdetailsComponent } from './events/event-details/eventdetails.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumnailsComponent } from './events/event-thumnails/event-thumnails.component';
import { NavComponent } from './events/nav/nav.component';
import { componentsRoutes } from './routes';
import { EventsService } from './shared/events.service';
import { CreateEventsComponent } from './events/create-events.component';
import { Error404Component } from './errors/error404/error404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.component';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionCoponent } from './events/event-details/create-session.component';
import { SessionListComponent } from './events/event-details/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './shared/durations.pipe';
import { JQ_TOKEN } from './common/jQuery.service';
import { SimpleModelComponent } from './common/simpleModel.component';
import { ModelTriggerDirective } from './common/modelTrigger.directive';
import { UpvoteComponent } from './events/event-details/upvote.component';
import { VoterService } from './events/event-details/voter.service';
import { AppLocationValidator } from './events/location-validator.directive';
import {HttpClientModule} from "@angular/common/http";
declare let toastr: Toastr;
declare let  jQuery: any;




@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(componentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumnailsComponent,
    NavComponent,
    EventdetailsComponent,
    CreateEventsComponent,
    Error404Component,
    CreateSessionCoponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModelComponent,
    ModelTriggerDirective,
    UpvoteComponent,
    AppLocationValidator,

   
  ],
  providers: [EventsService, 
    {provide:TOASTR_TOKEN, useValue: toastr},
    {provide:JQ_TOKEN, useValue:jQuery},
    EventRouteActivator,
    EventListResolver,
    AuthService,
    VoterService,
    {provide: 'canDeactivateEventCreate()', useValue: checkDirtyState}],
    bootstrap: [EventsAppComponent]
  })
export class AppModule { }
function checkDirtyState(componet:CreateEventsComponent): any {
  if(componet.isDirty){
    return window.confirm("you sure want to cancel this event")
  }
  
  return true
}

