import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Destinatario } from 'src/app/models/destinatario';
import { DestinatariosService } from 'src/app/services/destinatarios.service';
@Component({
  selector: 'app-history-transfer',
  templateUrl: './history-transfer.component.html',
  styleUrls: ['./history-transfer.component.scss']
})
export class HistoryTransferComponent implements OnInit {
  // atributos a obtener de la BD 
  displayedColumns: string[] = ['rut', 'name','bank' ,'typeAccount', 'monto'];
  MyDataSource: any;  


 
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(public destinatariosService : DestinatariosService) { }

  
  ngOnInit() {  
    this.RenderDataTable();
    this.paginator._intl.itemsPerPageLabel="item por página";  
  }

  // obtener datos de la BD de todos los clientes
  getDestinatarios(){
    this.destinatariosService.getDestinatarios()
    .subscribe(res=>{
      this.destinatariosService.destinatarios = res as Destinatario[];
    })
  }
  // obtener los datos del servicio y completar la tabla de datos usando la propiedad DataSource.
  RenderDataTable() {  
    this.destinatariosService.getDestinatarios()
    .subscribe(
      res => {  
        this.destinatariosService.destinatarios = res as Destinatario[];
        const c =  this.destinatariosService.destinatarios;
        this.MyDataSource = new MatTableDataSource();  
        this.MyDataSource.data = c;  
        this.MyDataSource.paginator = this.paginator;  
    });
  }

}




export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];



