import {Component, OnInit} from '@angular/core';
import { Destinatario } from 'src/app/models/destinatario';
import { DestinatariosService } from 'src/app/services/destinatarios.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { observable, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

declare var M:any;

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  providers: [DestinatariosService]
})
export class TransferComponent implements OnInit {
  myControl = new FormControl();

  filteredOptions:Observable<string[]> = new Observable<string[]>();




  constructor(public destinatariosService : DestinatariosService) {
   
  }



  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }
 

  
  // Filtrar y retornar valores a input
  private _filter(value: string): string[] {
    const a = this.destinatariosService.getDestinatarios()
    .subscribe(res=>{
      this.destinatariosService.destinatarios = res as Destinatario[];
    })
    
    const b = this.destinatariosService.destinatarios.filter(x => x.name)
    const c = b.map(function(item) {
     return item['name'];
    });

    const filterValue = value.toLowerCase();
   
    return c.filter((option:any) => option.toLowerCase().includes(filterValue));
  }

  //Obtener rut y mostrar los datos pertenecientes al usuario
  onSelFunc(option: any){
    const a = this.destinatariosService.destinatarios.filter(x => x.name == option);
    console.log(a);
    this.ObtenerCliente(a[0]);
   
  }

  //Obtener datos del destinatario si se encuentra en BD
  ObtenerCliente(destinatario :Destinatario){
   this.destinatariosService.selectedDestinatarios = destinatario;
  }

  getDestinatarios(){
    this.destinatariosService.getDestinatarios()
    .subscribe(res=>{
      this.destinatariosService.destinatarios = res as Destinatario[];
      console.log(res);
    })
  }

    //El Cliente se actualiza con el monto en la BD
    UpdateCliente(form: NgForm){
      console.log("Actualizando", form.value);
    
      if(form.value._id){

        console.log("Actualizando", form);
     
          this.destinatariosService.putDestinatarios(form.value)
          .subscribe(res => {
            console.log("Actualizado",res);
            M.toast({html:'Registro Actualizado'});
            this.resetForm(form);
          });
      }
      
    }

    
  //Limpiar Formulario
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.destinatariosService.selectedDestinatarios = new Destinatario();
    }
  }


}
