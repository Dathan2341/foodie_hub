import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from '../../app-service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards implements OnInit{

  recipes: any[] = [];

  constructor(private recipe:AppService,
    private cdr:ChangeDetectorRef,
    private router:Router
  ){}

  ngOnInit(): void {
    this.recipe.getRecipes().subscribe((res:any)=>{

      this.recipes = res.recipes; 
      this.cdr.detectChanges();
      console.log(this.recipes);

    });
  }

  viewRecipe(recipe : any){
    this.router.navigate(['/recipe',recipe.id],{state:{recipe}})
  }
}

