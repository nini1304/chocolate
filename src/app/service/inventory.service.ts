import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

   BACK_URL = environment.url;

  constructor(private http: HttpClient) {

  }

  public recordInventory(pages:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/api/v1/product/all?page=`+pages+`&size=10`);
  }

  public updateInventory(id: number, name: string, description: string, price: number, image: string): Observable<any> {

    return this.http.put<any>(`${this.BACK_URL}/api/v1/product/update?id=${id}&productName=${name}&description=${description}&price=${price}&image=${image}`, null);
  }
  public deleteInventory(id:number): Observable<any> {
    return this.http.delete<any>(`${this.BACK_URL}/api/v1/product/delete?id=${id}`);
  }
}
