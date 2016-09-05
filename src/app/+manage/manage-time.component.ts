import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TimeEntry, TimeService, LoaderComponent, AlertComponent, GridComponent, Column } from './../shared';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Time</md-card>
  `,
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent]

})
export class ManageTime {

  time: Array<TimeEntry>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;

  constructor(public TimeService: TimeService) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.TimeService.getTime().subscribe(
      time => {
        this.time = time;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
    this.columns = this.getColumns();
  }

 getColumns(): Array<Column> {
    return [
      new Column('name','Name'),
      new Column('lastName','Last Name'),
      new Column('email','Email Address'),
      new Column('phoneNumber', 'Phone Number')
    ];
  }


}
