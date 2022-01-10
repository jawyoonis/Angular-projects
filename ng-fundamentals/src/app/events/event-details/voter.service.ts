import { Injectable } from "@angular/core";
import { ISession } from "src/app/shared/model";

@Injectable()
export class VoterService{
    deleteVoter(session: ISession, voterName: string){
        session.voters= session.voters.filter(voter => voter!==voterName);
    }

    addVoter(session: ISession, voterName: string){
        session.voters.push(voterName);
    }

    userHasVoted(session: ISession, userName: string){
        return session.voters.some(voter =>voter==userName);
    }
}