import { Component } from '@angular/core';
import {InventoryDto} from "../../dto/inventory.dto";
import {InventoryService} from "../../service/inventory.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventoryDto: InventoryDto[] = []
  pages:number=0
  total:number=0


  constructor(private service:InventoryService, private router: Router) {


  }
  ngOnInit(){
    this.service.recordInventory(this.pages).subscribe({
      next: data => {
        console.log(data);
        this.inventoryDto=data['content'];
        this.total = data['totalPages'];
        console.log(data['totalPages'])
      }
    })
  }
  createItem() {
    this.router.navigate(['/createinv']);
  }
  updateItem(itemId: number) {
    this.router.navigate(['/updateinv', itemId]);
  }



  increment(){
    if(this.pages<this.total){
      this.pages++;
      this.service.recordInventory(this.pages).subscribe({
        next:data=>{
          this.inventoryDto=data['content'];
          this.total=data['totalPages'];
        }
      })
    }
  }
  decrement(){
    if(this.pages>0){
      this.pages--;
      this.service.recordInventory(this.pages).subscribe({
        next:data=>{
          this.inventoryDto=data['content'];
          this.total=data['totalPages'];
        }
      })
    }
  }
  deleteItem(itemId: number) {
    console.log(itemId);
    this.service.deleteProduct(itemId).subscribe({
      next: data => {
        // this.router.navigate(['/inventory']);
        console.log('invocacion exitosa');
        console.log(data);
      }
    })

  }





  displayedColumns: string[] = ['ID', 'NAME', 'DESCRIPTION', 'PRICE', 'IMAGE','ACTIONS'];

}
