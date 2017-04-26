import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {

  private ruta:string = 'http://127.0.0.1:8080/heroes/getHeroes';

  constructor(private http:Http){}

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
    }

  getHeroesHttp():Promise<Hero[]>{
    return this.http.get(this.ruta)
          .toPromise()
          .then(
              (response) => {
                let respuesta:any = response;
                let heroes: Hero[] = JSON.parse(respuesta._body);
                return heroes;
              }
          ).catch()
  }
}