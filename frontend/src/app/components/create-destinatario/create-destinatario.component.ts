import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Destinatario } from 'src/app/models/destinatario';
import { DestinatariosService } from 'src/app/services/destinatarios.service'; 
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-create-destinatario',
  templateUrl: './create-destinatario.component.html',
  styleUrls: ['./create-destinatario.component.scss'],
  providers: [DestinatariosService]
})
export class CreateDestinatarioComponent implements OnInit {
  items : any;
  banks: any;

  
  
  constructor(private router: Router,private http:HttpClient, public destinatariosService: DestinatariosService) { 
   //Enviar Json de URL al select del componente
    http.get('https://bast.dev/api/banks.php')
    ?.subscribe(data => {   // data is already a JSON object
      this.items = data as string[];

    });
  }

  ngOnInit() {
    this.getDestinatarios();
  }

  // onSubmit() {
  //   this.router.navigateByUrl('/home');
  // }

  //El destinatario se almacena en la BD
  addDestinatarios(form: NgForm){
   
    var band = 0;

      this.destinatariosService.destinatarios.forEach(element => {
        if(element.rut == form.value.rut){
          band = 1;
          M.toast({html:'Ya se encuentra registrado este contacto'})
        }
      });
      
    
      if(band == 0){
        this.destinatariosService.postDestinatarios(form.value)
        .subscribe(res => {
          console.log("Se ha guardado satisfactoriamente",res);
          M.toast({html:'Se ha guardado satisfactoriamente'})
          this.resetForm(form);
          this.getDestinatarios();
        });
      }
  }

  getDestinatarios(){
    this.destinatariosService.getDestinatarios()
    .subscribe(res=>{
      this.destinatariosService.destinatarios = res as Destinatario[];
    })
  }

  //Limpiar Formulario
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.destinatariosService.selectedDestinatarios = new Destinatario();
    }
  }


}
