import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AppService {
  private url="https://dummyjson.com/recipes"
  constructor(private h:HttpClient){}

  public getRecipes(){
    return this.h.get(this.url)
  }

}
