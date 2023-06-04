import { Component } from '@angular/core';
import {InventoryDto} from "../../dto/inventory.dto";
import {InventoryService} from "../../service/inventory.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: InventoryDto[] = [];
  pages:number=0
  productForm: FormGroup;
  size:number=20



  constructor(private formBuilder: FormBuilder,private service:InventoryService,private router: Router, private snackBar: MatSnackBar) {
    this.productForm = this.formBuilder.group({
      quantity: ''
    });



  }
  ngOnInit(){
    this.service.recordInventory(this.pages,this.size).subscribe({
      next: data => {
        console.log(data);
        this.products=data['content'];
        console.log(data['totalPages'])
      }
    })
  }
  buyProduct(id: number, price: number) {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    const timestamp = new Date(year, month, day, hours, minutes, seconds);
    this.service.buyProduct(id, this.productForm.value.quantity,timestamp,price).subscribe({
      next: data => {
        this.snackBar.open('Successful purchase', 'Cerrar', {
          duration: 6000 // Duración de la notificación en milisegundos (opcional)
        });
        this.router.navigate(['/createreview', id]);
        console.log('invocacion exitosa');
        console.log(data);
      }
    });

  }

}
