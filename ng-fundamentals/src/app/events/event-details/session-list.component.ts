import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from "src/app/shared/model";
import { AuthService } from "src/app/user/auth.service";
import { VoterService } from "./voter.service";

@Component({
    selector: "session-list",
    templateUrl: "./session-list.component.html"
})
export class SessionListComponent implements OnChanges {
    @Input() sessions: ISession[] | undefined; 

    @Input()
    filterBy!: string;
    @Input() vissibleSessions: ISession[] | undefined;
    @Input()
    sortedBy!: string;

    constructor(public auth: AuthService, private voterservice:VoterService){}

    ngOnChanges(){
        if(this.sessions){
            this.filterSessions(this.filterBy);
           this.sortedBy==='name'? this.vissibleSessions?.sort
           (sortByNameAsc):this.vissibleSessions?.sort(sortByVotesAsc);
        }

    }

    
    toggleVote(session: ISession){
        if(this.userHasVoted(session)){
            this.voterservice.deleteVoter(session, this.auth.currentUser.userName)
        }
        else {
            this.voterservice.addVoter(session, this.auth.currentUser.userName);
        }
        if(this.sortedBy=="votes"){
            this.vissibleSessions?.sort(sortByVotesAsc);
        }
    }

    userHasVoted(session: ISession){
        return this.voterservice.userHasVoted(session, this.auth.currentUser.userName);
    }

    filterSessions(filter: string){
        if(filter=="all"){
            this.vissibleSessions= this.sessions?.slice(0);
        }
        else{
            this.vissibleSessions= this.sessions?.filter(session=> {
                return session.level.toLowerCase()===filter })

        }

    }

}


function sortByNameAsc(s1:ISession, s2:ISession){
    if (s1.name > s2.name) return 1
    else if(s1.name===s2.name) return 0
    else return -1

}

function sortByVotesAsc(s1:ISession, s2:ISession){
    return s2.voters.length - s1.voters.length
}
