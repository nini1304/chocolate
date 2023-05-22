import { Component } from '@angular/core';
import {InventoryDto} from "../../dto/inventory.dto";
import {InventoryService} from "../../service/inventory.service";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventoryDto: InventoryDto[] = []
  pages:number=0
  total:number=0

  constructor(private service:InventoryService) {

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
    // Lógica para eliminar el elemento con el ID especificado
  }

  updateItem(itemId: number) {
    // Lógica para actualizar el elemento con el ID especificado
  }


  displayedColumns: string[] = ['ID', 'NAME', 'DESCRIPTION', 'PRICE', 'IMAGE','ACTIONS'];

}
