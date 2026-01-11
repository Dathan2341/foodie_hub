import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [CommonModule],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes implements OnInit{

 recipe:any;

 constructor(private route:ActivatedRoute){}

 ngOnInit(): void {
   this.route.queryParams.subscribe((params)=>
   {
    if(history.state&&history.state.recipe){
      this.recipe=history.state.recipe
    }
   }
  )
 }



}
