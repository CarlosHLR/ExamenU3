import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { NewUserFormComponent } from './Componentes/new-user-form/new-user-form.component';
import { ListaComponent } from './Componentes/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewUserFormComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
