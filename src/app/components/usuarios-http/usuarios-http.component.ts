import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios-http',
  imports: [],
  templateUrl: './usuarios-http.component.html',
  styleUrl: './usuarios-http.component.css'
})
export class UsuariosHTTPComponent {

  public listadoUsuarios: any;

  constructor(
    private _usuarioService: UsuarioService
  ){
    console.log("Componente de usuarios cargados!!");
  }

  ngOnInit(){
    // this.listadoUsuarios = this._usuarioService.getUsers();
    this._usuarioService.getUsers().subscribe(
      data =>{
        this.listadoUsuarios = data;

        console.log(this.listadoUsuarios.data);
      }
    );

    
  }

}
