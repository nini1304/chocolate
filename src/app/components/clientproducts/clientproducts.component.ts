import { Component } from '@angular/core';
import {InventoryService} from "../../service/inventory.service";
import {ClientproductsDto} from "../../dto/clientproducts.dto";

@Component({
  selector: 'app-clientproducts',
  templateUrl: './clientproducts.component.html',
  styleUrls: ['./clientproducts.component.css']
})
export class ClientproductsComponent {
  products: ClientproductsDto[] = [];
  id:string="1"

    constructor(private service:InventoryService) {

    }
  ngOnInit(){
    this.service.clientProducts(this.id).subscribe({
      next: data => {
        console.log(data);
        this.products=data['content'];

      }
    })
  }


}
