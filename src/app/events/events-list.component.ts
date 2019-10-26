import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html' 
})

export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '26/9/2035',
        time: '10:00am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '123 ABC St',
            city: 'Melbourne',
            country: 'Australia'
        }
    }
}
