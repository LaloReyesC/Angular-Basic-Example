import { Component, OnInit } from '@angular/core';

interface IPersonaje {
  nombre: string;
  recompensa: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  personajes: IPersonaje[] = [
    {
      nombre: 'Luffy',
      recompensa: 3000000000
    },
    {
      nombre: 'Zoro',
      recompensa: 1111000000
    },
    {
      nombre: 'Sanji',
      recompensa: 1035000000
    }
  ]

  nuevoPersonaje: IPersonaje = {
    nombre: '',
    recompensa: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  agregar = () => {

    if (!!!this.nuevoPersonaje.nombre || this.nuevoPersonaje.recompensa <= 0) {
      return;
    }

    this.personajes = [... this.personajes, this.nuevoPersonaje];
    this.nuevoPersonaje = { nombre: '', recompensa: 0 };
  }
}