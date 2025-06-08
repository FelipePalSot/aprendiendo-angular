import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios-http',
  imports: [FormsModule],
  templateUrl: './usuarios-http.component.html',
  styleUrl: './usuarios-http.component.css'
})
export class UsuariosHTTPComponent {

  public listadoUsuarios: any;
  public usuarioIndividual: any;
  public userId: number = 7;

  constructor(
    private _usuarioService: UsuarioService
  ){
    console.log("Componente de usuarios cargados!!");
  }

  ngOnInit(){
    this.buscarUsuario();
    // this.listadoUsuarios = this._usuarioService.getUsers();
    this._usuarioService.getUsers().subscribe({
      next: (resultado) => {
        this.listadoUsuarios = resultado;

        console.log(this.listadoUsuarios.data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () =>{
        console.log("Peteci'on del listado de usuarios completada");
      }
    });
  }

  buscarUsuario(){
    this._usuarioService.getUser(this.userId).subscribe({
      next: (resultado:any) =>{
        this.usuarioIndividual = resultado.data;
      },
      error: (error) => console.log(error),
      complete: () => console.log("Peticion de usuario individual completa"),
    });
  }

  guardarUsuario(){
    let nuevoUsuario = {
      name: "Felipe",
      job: "Desarrollador web"
    };

    this._usuarioService.createUser(nuevoUsuario).subscribe(respuesta =>{
      console.log("Usuario creado correctamente", respuesta);
    });
  }

}
