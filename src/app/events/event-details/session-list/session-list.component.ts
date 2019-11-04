import { Component, Input, OnChanges } from "@angular/core";
import { ISession } from '../../shared';

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html',
    styleUrls: ['./session-list.component.css']
})

export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[]
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges() {
        if(this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    filterSessions(filter) {
        if(filter == 'all') {
            // Create a clone  of the sessions variable. 
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => {
                return session.level.toLocaleLowerCase() === filter; 
            })
        }
    }
}


function sortByNameAsc(s1: ISession, s2: ISession) {
    // If Alpha of s1 > s2 return 1
    if(s1.name > s2.name) return 1
    // If Alpha is the same return 0
    else if(s1.name === s2.name) return 0
    // If Alpha of s1 < s2 return -1
    else return -1
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}