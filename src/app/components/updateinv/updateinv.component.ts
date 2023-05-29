import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {InventoryService} from "../../service/inventory.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-updateinv',
  templateUrl: './updateinv.component.html',
  styleUrls: ['./updateinv.component.css']
})
export class UpdateinvComponent {
  inventoryForm: FormGroup;
  id: number=0;
  constructor(private formBuilder: FormBuilder, private service:InventoryService, private route: ActivatedRoute, private router: Router) {
    this.inventoryForm = this.formBuilder.group({
      productName: [''], // Valor inicial vacío
      description: [''], // Valor inicial vacío
      price: [''], // Valor inicial vacío
      image: [''] // Valor inicial vacío
    });
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }
  updateItem(){
    console.log(this.id); // Utiliza el ID recibido
    console.log(this.inventoryForm.value);
    this.service
      .updateProduct(
        this.id,
        this.inventoryForm.value.productName,
        this.inventoryForm.value.description,
        this.inventoryForm.value.price,
        this.inventoryForm.value.image
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
