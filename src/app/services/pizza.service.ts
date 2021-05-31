import { OrderModel } from './../models/order.model';
import { CheckoutModel } from './../models/checkout.model';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaModel } from '../models/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {}

  private pizzas: PizzaModel[];
  public get items(): PizzaModel[] {
    return this.pizzas;
  }
  public set items(value: PizzaModel[]) {
    this.pizzas = value;
  }

  getAllPizzas(): Observable<any> {
    return this.http.get(`${this.baseUrl}pizza`);
  }

  getAllOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}order`);
  }

  saveCheckout(checkout: CheckoutModel): Observable<any> {
    return this.http.post(`${this.baseUrl}checkout`, checkout);
  }

  saveOrder(order: OrderModel): Observable<any> {
    return this.http.post(`${this.baseUrl}order`, order);
  }
}
