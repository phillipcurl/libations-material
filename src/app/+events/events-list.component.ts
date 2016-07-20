import { Component, OnInit } from '@angular/core';
import { Event, EventService } from './../shared';
import { EventCardComponent } from './event-card.component';

@Component({
  selector: 'index',
  directives: [EventCardComponent],
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Events Index</md-card>
    <div class="col" *ngFor="let event of currEvents">
      <event-card [event]="event" [isDetail]=false></event-card>      
    </div>
  `
})
export class EventsList implements OnInit {

  events: Event[];
  currEvents: Event[];
  isLoading: boolean;
  errorMessage: string;
  activeFilter: string;

  constructor(public EventService:EventService) {}

  ngOnInit() {
    this.isLoading = true;
    this.EventService.getEvents().subscribe(
      events => {
        this.events = events;
        this.currEvents = events;
        this.activeFilter = 'current';
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
  }
}
