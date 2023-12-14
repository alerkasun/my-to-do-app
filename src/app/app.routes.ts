import { Routes } from '@angular/router';
import { Route1Component } from './route1/route1.component';

export const routes: Routes = [
    {path: 'route-1', component: Route1Component},
    {path: 'route-2', loadChildren: () => import('./route2/route2.module').then(m => m.Route2Module)},
  ]
