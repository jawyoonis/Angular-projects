import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-model.component.html',
    styleUrls: ['simple-model.component.css']


})

export class SimpleModelComponent implements OnInit {
    @Input()
    title!: string;
    @Input()
    elementId!: string;
    @ViewChild('modalcontainer') elementRef!: ElementRef;
    @Input() closeOnBodyClick!: string;
    constructor(@Inject(JQ_TOKEN) private $:any){}

    closeModal(){
        if(this.closeOnBodyClick.toLocaleLowerCase()==="true"){
        this.$(this.elementRef.nativeElement).modal('hide');
    }

    }
    ngOnInit () {
    }
}