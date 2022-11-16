import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  Heroes: string[] = ['Spiderman', 'Hulk', 'Thor', 'Capitan America', 'Ironman']
  heroeBorrado: string = ''
  
  borrarHeroe(){
    this.heroeBorrado = this.Heroes.shift() || ''
  }
}
