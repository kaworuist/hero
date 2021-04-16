import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = heroes;
  selectedHero: Hero|undefined;

  constructor() { }

  ngOnInit(): void{
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
