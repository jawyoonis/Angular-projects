
import { Routes } from "@angular/router";
import { Error404Component } from "./errors/error404/error404.component";
import { CreateEventsComponent } from "./events/create-events.component";
import { CreateSessionCoponent } from "./events/event-details/create-session.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.component";
import { EventdetailsComponent } from "./events/event-details/eventdetails.component";
import { EventListResolver } from "./events/event-list-resolver.service";
import { EventListComponent } from "./events/event-list/event-list.component";

export const componentsRoutes:Routes= [
    {path: "events/new", component:CreateEventsComponent, 
    canDeactivate: ['canDeactivateEventCreate()']},
    {path: "events", component: EventListComponent, 
    resolve: {events:EventListResolver} },
    {path: "events/:id", component:EventdetailsComponent, 
    canActivate: [EventRouteActivator]},
    {path:"events/session/new", component:CreateSessionCoponent},
    {path: "404", component: Error404Component},
    {path:"", redirectTo: "/events",pathMatch:"full"},
    {path: "user", loadChildren:()=> import("./user/user.module")
    .then(m => m.UserModule)}

]