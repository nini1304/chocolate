import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./components/start/start.component";
import {InventoryComponent} from "./components/inventory/inventory.component";
import { UpdateinvComponent } from './components/updateinv/updateinv.component';
import {CreateinvComponent} from "./components/createinv/createinv.component";




const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'inventory', component: InventoryComponent},
  { path: 'updateinv/:id', component: UpdateinvComponent},
  { path: 'createinv', component: CreateinvComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
