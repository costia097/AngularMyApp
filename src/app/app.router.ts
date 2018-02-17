import {RouterModule, Routes} from '@angular/router';
import {MenuOneComponent} from './menu-one/menu-one.component';
import {ModuleWithProviders} from '@angular/core';
import {ServerComponent} from './server/server.component';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ServerComponent
  },
  {
    path: 'active',
    component: MenuOneComponent
  }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
