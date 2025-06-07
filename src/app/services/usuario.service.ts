import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public apiUrl: string;

  constructor(private http: HttpClient){
    this.apiUrl = "https://reqres.in/";
  }

  getUsers(){
    console.log("Ejecutando peticion http!!");

    const headers = new HttpHeaders({
      'x-api-key': 'reqres-free-v1'
    });

    return this.http.get(this.apiUrl+"api/users?page=2", { headers: headers });
  }

}
