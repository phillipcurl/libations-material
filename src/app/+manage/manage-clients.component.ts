import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Client, ClientService, LoaderComponent, AlertComponent, GridComponent, Column } from './../shared';

@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Clients</md-card>
  `,
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent]
})
export class ManageClients {

  clients: Array<Client>;
  editedClients: Array<Client>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;

  constructor(public ClientService: ClientService) {

  }

  ngOnInit() {
    this.isLoading = true;
    this.ClientService.getClients().subscribe(
      clients=> {
        this.clients = clients;
        this.isLoading = false;
      },
      error => {
        this.isLoading = false;
        this.errorMessage = <any>error
      }
    );
    this.columns = this.getColumns();
  }

  saveObject(client){
    this.ClientService.updateClient(client).subscribe(
      client => {
        this.editedClients.push(client);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }  
  
   getColumns(): Array<Column> {
    return [
      new Column('name','Name')
    ];
  }
}
