import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    children:[
      {path:'',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    },
    { path: ':fruitId',
    loadChildren: () => import('./fruit-details/fruit-details.module').then( m => m.FruitDetailsPageModule)}

    ]

  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
