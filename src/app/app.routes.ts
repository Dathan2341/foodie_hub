import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Aboutus } from './aboutus/aboutus';
import { Recipes } from './pages/recipes/recipes';

export const routes: Routes = [
  { path: '', component: Home },

  {
    path:'about',component:Aboutus
  },

  {
    path:'recipe/:id',component:Recipes
  }

];
