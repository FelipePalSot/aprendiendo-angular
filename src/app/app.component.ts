import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { config } from './models/config';
import { CineComponent } from './components/cine/cine.component';
import { CarritoComponent } from './components/carrito/carrito.component';


@Component({
  selector: 'app-root',
  
  imports: [CarritoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi primer proyecto en angular';

  titulo = config.title;
  descripcion = config.descripcion;
}
