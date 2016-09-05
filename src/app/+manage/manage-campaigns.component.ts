import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Campaign, CampaignService, LoaderComponent, AlertComponent, GridComponent, Column } from './../shared';



@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Campaigns</md-card>
  `,
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent]
})
export class ManageCampaigns {

  campaigns: Array<Campaign>;
  editedCampaigns: Array<Campaign>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;

  constructor(public CampaignService: CampaignService) {

  }

  ngOnInit() {
     this.CampaignService.getCampaigns().subscribe(
      campaigns=> {
        this.campaigns = campaigns;
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
      new Column('notes','Notes'),
      new Column('startDate','Start Date'),
      new Column('endDate', 'End Date'),
      new Column('created','Created'),
      new Column('updated', 'Updated'),
      new Column('isActive', 'Active')
    ];
  }

  saveObject(campaign){
    this.CampaignService.updateCampaign(campaign).subscribe(
      campaign => {
        this.editedCampaigns.push(campaign);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }   
   
}
