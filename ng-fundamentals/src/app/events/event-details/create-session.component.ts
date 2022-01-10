import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ISession } from "src/app/shared/model";



@Component({
    selector:"create-session",
    templateUrl: "./create-session.component.html",
    styleUrls: ["./create-session.component.css"]

})

export class CreateSessionCoponent implements OnInit{
    @Output() saveNewSession=  new EventEmitter()
    @Output() cancelNewSession=  new EventEmitter()

    newSessionForm!: FormGroup;
    name!: FormControl;
    presenter!: FormControl;
    duration!: FormControl;
    level!: FormControl;
    abstract!: FormControl;
    voters!: FormControl;
    constructor(private router: Router){}

    ngOnInit (){
    
        this.name= new FormControl("", Validators.required)
        this.presenter= new FormControl("", Validators.required)
        this.duration= new FormControl("", Validators.required)
        this.level= new FormControl("", Validators.required)
        this.abstract= new FormControl("", [Validators.required, Validators.maxLength(400)])
        this.voters= new FormControl("", Validators.required)

        this.newSessionForm=  new FormGroup({
           name: this.name,
           presenter: this.presenter,
           duration: this.duration,
           level: this.level,
           abstract: this.abstract,
           voters: this.voters

        })
    }

    saveSession(formValues:any ){
        let session: ISession= {
            id: formValues.id,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []

        }
       this.saveNewSession.emit(session);

    
    }

    cancel(){
        this.cancelNewSession.emit()
    }

}