import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MenuComponent} from '../menu/menu.component';

@NgModule({
  imports:[
    BrowserModule,
    RouterModule.forRoot([
      {path : 'sample1', component: MenuComponent}
    ])
  ]
})
export class MenuRouterModule {
}
