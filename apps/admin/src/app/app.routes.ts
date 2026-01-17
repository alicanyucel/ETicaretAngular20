import { Route } from '@angular/router';
import { HomeComponent } from '../page/home/home.component';
import { LoginComponent } from '../page/login/login.component';
import { LayoutsComponent } from '../page/layouts/layouts.component';


export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
