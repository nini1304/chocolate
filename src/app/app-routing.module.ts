import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartComponent} from "./components/start/start.component";
import {InventoryComponent} from "./components/inventory/inventory.component";
import { UpdateinvComponent } from './components/updateinv/updateinv.component';
import {CreateinvComponent} from "./components/createinv/createinv.component";
import {ProductsComponent} from "./components/products/products.component";
import {CreatereviewComponent} from "./components/createreview/createreview.component";
import {AuthGuard} from "./guard/auth.guard";
import {ClientproductsComponent} from "./components/clientproducts/clientproducts.component";




const routes: Routes = [
  { path: '', component: StartComponent},
  { path: 'inventory', component: InventoryComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]},
  { path: 'updateinv/:id', component: UpdateinvComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]},
  { path: 'createinv', component: CreateinvComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]},
  { path: 'products', component: ProductsComponent, data: {roles: ['USER']}, canActivate: [AuthGuard]},
  { path: 'createreview/:id', component: CreatereviewComponent, data: {roles: ['USER']}, canActivate: [AuthGuard]},
  { path: 'clientproducts', component: ClientproductsComponent, data: {roles: ['USER']}, canActivate: [AuthGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
