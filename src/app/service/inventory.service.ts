import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  // BACK_URL = environment.url;

  constructor(private http: HttpClient) {

  }

  public recordInventory(pages:number): Observable<any> {
    return this.http.get<any>('');
  }
}
