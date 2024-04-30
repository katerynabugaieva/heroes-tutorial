import { RouterLink } from "@angular/router";
import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
    console.log("here is a change");
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}
