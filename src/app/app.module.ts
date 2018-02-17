import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import {routes} from './app.router';
import { MenuOneComponent } from './menu-one/menu-one.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MenuOneComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
