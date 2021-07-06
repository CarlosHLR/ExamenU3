import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './Componentes/lista/lista.component';
import { NewUserFormComponent } from './Componentes/new-user-form/new-user-form.component';

const routes: Routes = [
  {path: 'Añadir Contacto', component: NewUserFormComponent},
  {path: 'Lista de Contactos', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
