import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Location, LocationService, LoaderComponent, AlertComponent, GridComponent, Column } from './../shared';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Locations</md-card>
  `,
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent]
})
export class ManageLocations {

  locations: Array<Location>;
  editedLocations: Array<Location>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;

  constructor(public LocationService: LocationService) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.LocationService.getLocations().subscribe(
      locations=> {
        this.locations = locations;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
    this.columns = this.getColumns();
  }

  saveObject(location){
    this.LocationService.updateLocation(location).subscribe(
      location => {
        this.editedLocations.push(location);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }  
  
   getColumns(): Array<Column> {
    return [
      new Column('name','Name'),
      new Column('notes','Notes'),
      new Column('store','Store'),
      new Column('created','Created'),
      new Column('updated', 'Updated'),
      new Column('isActive', 'Active')
    ];
  }
  

}
