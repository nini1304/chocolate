import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InventoryService} from "../../service/inventory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-createinv',
  templateUrl: './createinv.component.html',
  styleUrls: ['./createinv.component.css']
})
export class CreateinvComponent {
  createinvForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service:InventoryService, private router: Router) {
    this.createinvForm = this.formBuilder.group({
      productName: [''], // Valor inicial vacío
      description: [''], // Valor inicial vacío
      price: [''], // Valor inicial vacío
      image: [''] // Valor inicial vacío
    });
  }

  createItem(){
    console.log(this.createinvForm.value);
    this.service
      .createProduct(
        this.createinvForm.value.productName,
        this.createinvForm.value.description,
        this.createinvForm.value.price,
        this.createinvForm.value.image
      )
      .subscribe({
        next: data => {
          this.router.navigate(['/inventory']);
          console.log('invocacion exitosa');
          console.log(data);
        }
      });
  }

}
