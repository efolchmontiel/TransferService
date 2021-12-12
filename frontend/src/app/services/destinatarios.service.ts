import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destinatario } from '../models/destinatario';

@Injectable({
  providedIn: 'root'
})
export class DestinatariosService {
 selectedDestinatarios: Destinatario;
 destinatarios: Destinatario[] =  [];

readonly URL_API = 'http://localhost:3000'
  constructor(private http:HttpClient) { 
    this.selectedDestinatarios = new Destinatario();
  }

  getDestinatarios(){
    return this.http.get(this.URL_API);
  }
  
  postDestinatarios(Destinos: Destinatario){
    return this.http.post(this.URL_API, Destinos);
  }

  putDestinatarios(destinos: Destinatario){
    return this.http.put(this.URL_API +  `/${destinos._id}`, destinos);
  }

  deleteDestinatarios(_id:string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
