import {Component, Renderer2} from '@angular/core';
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
  size:number=4


  constructor(private service:InventoryService, private router: Router) {


  }
  ngOnInit(){
    this.service.recordInventory(this.pages,this.size).subscribe({
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
  updateItem(id: number) {
    this.router.navigate(['/updateinv', id]);
  }



  increment(){
    if(this.pages<this.total){
      this.pages++;
      this.service.recordInventory(this.pages,this.size).subscribe({
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
      this.service.recordInventory(this.pages,this.size).subscribe({
        next:data=>{
          this.inventoryDto=data['content'];
          this.total=data['totalPages'];
        }
      })
    }
  }
  deleteItem(id: number) {
    console.log(id);
    this.service.deleteProduct(id).subscribe({
      next: data => {
        location.reload();
        console.log('invocacion exitosa');
        console.log(data);
      }
    })

  }





  displayedColumns: string[] = ['ID', 'NAME', 'DESCRIPTION', 'PRICE', 'IMAGE','ACTIONS'];

}
