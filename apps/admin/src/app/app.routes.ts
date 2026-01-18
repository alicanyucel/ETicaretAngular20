import { Route } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { LoginComponent } from '../page/login/login.component';
import { LayoutsComponent } from '../page/layouts/layouts.component';


export const appRoutes: Route[] = [
  {
    path: 'login',
   loadComponent:()=>import('../page/login/login.component').then(m=>m.LoginComponent),
  },
  {
    path: '',
    loadComponent:()=>import('../page/layouts/layouts.component').then(m=>m.LayoutsComponent),
    children: [
      {
        path: '',
        loadComponent:()=>import('../page/home/home.component').then(m=>m.HomeComponent),
      }
    ]
  }
];

