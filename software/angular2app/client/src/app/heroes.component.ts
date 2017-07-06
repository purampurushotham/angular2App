import { Component,Input } from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit{
  ngOnInit(): void{
  this.getHeroes()
  }
constructor (private heroService : HeroService){
}

  selectedHero : Hero={
    id:1,
    name: 'puram purushotham'
  }
  heroes: Hero[];
  title = 'Tour of Heroes';
onSelect(hero){
  this.selectedHero=hero
}
getHeroes() : void{
    this.heroService.getHeroes().then(heroes => this.heroes=heroes)
}

}
