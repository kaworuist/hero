import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[]|undefined;
  selectedHero: Hero|undefined;
  getHeroes(): void {
    this.heroService.getHeros()
      .subscribe(data => this.heroes = data);
  }
  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
