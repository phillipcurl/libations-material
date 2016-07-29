import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Event, EventService, LoaderComponent, AlertComponent, GridComponent, Column } from './../shared';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Events</md-card>
  `,
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent]
})
export class ManageEvents {

  events: Array<Event>;
  editedEvents: Array<Event>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;

  constructor(public EventService: EventService) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.EventService.getEvents().subscribe(
      events=> {
        this.events = events;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
    this.columns = this.getColumns();
  }
  saveObject(event){
    this.EventService.updateEvent(event).subscribe(
      event => {
        this.editedEvents.push(event);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }  
  
   getColumns(): Array<Column> {
    return [
      new Column('date','Date'),
      new Column('name','Name'),
      new Column('notes','Notes'),
      new Column('compensationRate','Compensation'),
      new Column('created','Created'),
      new Column('updated', 'Updated'),
      new Column('isActive', 'Active'),
      new Column('isLocked', 'Locked')
    ];
  }

}
