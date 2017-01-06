import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";
import {Auth} from "./auth.service";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  providers: [],
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router, private auth: Auth) {  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  deleteHero(hero: Hero): void {
    this.heroService
      .deleteHero(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

}
