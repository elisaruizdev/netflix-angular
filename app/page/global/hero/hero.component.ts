import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/netflix-model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
@Input() public hero!: Hero;

private _selectedHero!: Hero;
  public get selectedHero(): Hero {
    return this._selectedHero;
  }
  public set selectedHero(value: Hero) {
    this._selectedHero = value;
  }
onSelect(hero:Hero): void{
  this.selectedHero = hero;
}

  constructor() { }

  ngOnInit(): void {
  }

}


