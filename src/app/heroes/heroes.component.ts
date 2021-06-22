import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {

  public heroes:any
  constructor(private http:HttpClient) {

   }

  ngOnInit(): void { 
    this.http.get("https://akabab.github.io/superhero-api/api/all.json")
    .subscribe( _heroes => {
      console.log(_heroes)
      this.heroes = _heroes
    })
  }

}
