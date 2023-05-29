import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";

import { MatIconModule } from '@angular/material/icon';
import { StartComponent } from './components/start/start.component';
import {InventoryComponent} from "./components/inventory/inventory.component";
import { UpdateinvComponent } from './components/updateinv/updateinv.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { CreateinvComponent } from './components/createinv/createinv.component';
import { ReviewsComponent } from './components/reviews/reviews.component';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    InventoryComponent,
    UpdateinvComponent,
    CreateinvComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
