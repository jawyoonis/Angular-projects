import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'upvote', 
    templateUrl: 'upvote.component.html',
    styleUrls: ['upvote.component.css']

})

export class UpvoteComponent {
    @Input() set voted(val:boolean) {
        this.iconColor= val? "red": "white";
}
    @Input() count!: number;
    @Output()  vote=  new EventEmitter();
    iconColor!: string;

    onClick(){
        this.vote.emit({});
    }

}