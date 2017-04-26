import { Component } from '@angular/core';
import {Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Tour of Heroes';
  public abierto: boolean = false;

  abrir(){
    this.abierto = true;
  }

  aceptar(nombre:string):void {
    let heroe:Hero = new Hero();
    heroe.name = nombre;
  }
}
