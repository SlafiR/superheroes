import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

const URL_HEROES = "https://akabab.github.io/superhero-api/api"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  public heroes: any[] = []

  public heroesLoad: boolean= true

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`${URL_HEROES}/all.json`)
      .subscribe((_heroes: any) => {
        this.heroes = this.random(_heroes)
        this.heroesLoad = false
      })
  }
  random(_heroes: any[]) : any[]{
    return _heroes.sort(() => Math.random() -0.5) 
  }
}
