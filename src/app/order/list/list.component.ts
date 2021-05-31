import { BaseComponent } from './../../base/base.component';
import { OrderModel } from './../../models/order.model';
import { PizzaService } from 'src/app/services/pizza.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListOrderComponent extends BaseComponent implements OnInit {
  orders: OrderModel[];

  constructor(private pizzaService: PizzaService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.unsubscribeOndestroy(
      this.pizzaService.getAllOrders().subscribe(
        (data) => (this.orders = data.data)
      )
    );
  }

  back(): void {
    this.router.navigate(['']);
  }
}
