import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { heroes } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(heroes);
  }
  getHero(id: number): Observable<Hero|undefined> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(heroes.find(hero => hero.id === id));
  }
  constructor(public messageService: MessageService) { }

}
