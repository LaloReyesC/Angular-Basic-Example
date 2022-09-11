import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Luffy', 'Zoro', 'Sanji', 'Franky', 'Shanks'];
  heroeBorrado: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete() {

    this.heroeBorrado = this.heroes.pop();

  }
}
