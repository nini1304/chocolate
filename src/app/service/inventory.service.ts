import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {CreateinvDto} from "../dto/createinv.dto";
import {DeleteinvDto} from "../dto/deleteinv.dto";
import {CreatereviDto} from "../dto/createrevi.dto";
import {BuyProductDto} from "../dto/buyProduct.dto";
import {UpdateinvDto} from "../dto/updateinv.dto";


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

   BACK_URL = environment.url;

  constructor(private http: HttpClient) {

  }

  public createProduct(productName: string, description: string, price: number, image: string): Observable<CreateinvDto> {

    return this.http.post<CreateinvDto>(`${this.BACK_URL}/ms-inventory/api/v1/product/register?productName=${productName}&description=${description}&price=${price}&image=${image}`, null);
  }

  public recordInventory(pages:number, size:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/ms-inventory/api/v1/product/all?page=`+pages+`&size=${size}`);
  }
  public recordProducts(pages:number, size:number): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/ms-orders/api/v1/orderItem/all?page=`+pages+`&size=${size}`);
  }
  public clientProducts(userid: string,): Observable<any> {
    return this.http.get<any>(`${this.BACK_URL}/ms-orders/api/v1/orderItem/getOrderInfoByUserId?userId=${userid}`);
  }

  public updateProduct(id: number, productName: string, description: string, price: number, image: string): Observable<UpdateinvDto> {

    return this.http.put<UpdateinvDto>(`${this.BACK_URL}/ms-inventory/api/v1/product/update?id=${id}&productName=${productName}&description=${description}&price=${price}&image=${image}`, null);
  }
  public deleteProduct(id:number): Observable<DeleteinvDto> {
    return this.http.delete<DeleteinvDto>(`${this.BACK_URL}/ms-inventory/api/v1/product/delete?id=${id}`);
  }
  public createReview(comment: String, rating: number, id: number): Observable<CreatereviDto> {

    return this.http.post<CreatereviDto>(`${this.BACK_URL}/ms-reviews/api/v1/review/register?reviewComment=${comment}&reviewScore=${rating}&productId=${id}`, null);
  }
  public buyProduct(id: number, quantity: number,timestamp: object,price: number): Observable<BuyProductDto> {

    return this.http.post<BuyProductDto>(`${this.BACK_URL}/ms-orders/api/v1/orderItem/register?productId=${id}&cantidad=${quantity}&fecha=${timestamp}&precioUnitario=${price}`, null);
  }
}
