import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Brand, BrandService, LoaderComponent, AlertComponent, GridComponent, Column } from './../shared';


@Component({
  selector: 'index',
  styles: [`
    :host md-card{
      margin: 25px;
    }
  `],
  template: `
    <md-card>Hello from Manage Brands</md-card>
  `,
  directives: [ROUTER_DIRECTIVES, LoaderComponent, AlertComponent, GridComponent]
})
export class ManageBrands {

  brands: Array<Brand>;
  editedBrands: Array<Brand>;
  columns: Array<Column>;
  isLoading: boolean;
  errorMessage: string;

  constructor(public BrandService: BrandService) {

  }

  ngOnInit() {
    this.BrandService.getBrands().subscribe(
        brands=> {
          this.brands = brands;
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
      new Column('created','Created'),
      new Column('updated', 'Updated'),
      new Column('isActive', 'Active')
    ];
  }
   
  saveObject(brand){
    this.BrandService.updateBrand(brand).subscribe(
      brand => {
        this.editedBrands.push(brand);
      },
      error => {
        this.errorMessage = <any>error
      }
    );
  }   
   


  

}
