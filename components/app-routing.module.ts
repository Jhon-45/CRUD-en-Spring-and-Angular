import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//colocar las librerias de la otra clase que se crean 
import { ListaClienteComponent } from './cliente/lista-cliente.component';
import { DetalleClienteComponent } from './cliente/detalle-cliente.component';
import { NuevoClienteComponent } from './cliente/nuevo-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente.component';


const routes: Routes = [
  {path: '', component: ListaClienteComponent},
  {path: 'detalle/:id', component: DetalleClienteComponent},
  {path: 'nuevo', component: NuevoClienteComponent},
  {path: 'editar/:id', component: EditarClienteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
