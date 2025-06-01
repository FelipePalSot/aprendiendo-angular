import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula'
import { FormsModule } from '@angular/forms';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-cine',
  imports: [FormsModule, NgStyle],
  templateUrl: './cine.component.html',
  styleUrl: './cine.component.css'
})
export class CineComponent {
  public titulo: string;
  public peliculas: Array<Pelicula>;

  //Para trabajar con formularios y binding bidereccional
  public mi_pelicula: string = "";
  public pelisSinDatos: string[] = [];

  public color: string = "#FFFFFF"

  constructor(){
    this.titulo = "Modelos";
    this.peliculas = [
      new Pelicula(1,"El padrino", "Mafia", "Copola", 1976, "prime", false),
      new Pelicula(2,"The Shawshank Redemption", "Drama", "Frank Darabont", 1994, "netflix", false),
      new Pelicula(3,"The Dark Knight", "Action", "Christopher Nolan", 2008, "hbo", false),
      new Pelicula(4,"Pulp Fiction", "Crime", "Quentin Tarantino", 1994, "netflix", false),
      new Pelicula(5,"Forrest Gump", "Drama", "Robert Zemeckis", 1994, "prime", false),
      new Pelicula(6,"Inception", "Sci-Fi", "Christopher Nolan", 2010, "netflix", false),
      new Pelicula(7,"The Matrix", "Sci-Fi", "Wachowskis", 1999, "hbo", false),
      new Pelicula(8,"Spirited Away", "Animation", "Hayao Miyazaki", 2001, "netflix", false),
      new Pelicula(9,"Parasite", "Thriller", "Bong Joon Ho", 2019, "hulu", false), 
      new Pelicula(10,"Gladiator", "Action", "Ridley Scott", 2000, "prime", false),
      new Pelicula(11,"Interstellar", "Sci-Fi", "Christopher Nolan", 2014, "prime", false)
    ];
  }

  ngOnInit(){
    console.log(this.peliculas);
    this.peliculas[1].titulo = "ET el MARCIANO"
  }

  ngDoCheck(){
    console.log(this.mi_pelicula);
  }

  showPelicula(){
    alert(this.mi_pelicula)
  }

  addPelicula(){
    //this.peliculas.push(this.mi_pelicula);

    // let peliculasAlReves = this.peliculas.reverse();
    let identificador = (this.peliculas[this.peliculas.length - 1].id + 1);
    let nuevaPelicula = new Pelicula(identificador, this.mi_pelicula);

   this.peliculas.push(nuevaPelicula);
  }

  borrarPeli(indice:number){
    this.peliculas.splice(indice, 1)
  }

  haciendoFoco(){
    console.warn("Estas dentro del input de peliculas");
  }

  saliendoDelFoco(){
    console.warn("Estas fuera del input de peliculas");
  }

  pulsandoTeclas(event: KeyboardEvent){
    console.warn("Estas pulsando la tecla: "+event.key);
  }
}
