import { BaseComponent } from './../../base/base.component';
import { PizzaModel } from './../../models/pizza.model';
import { PizzaService } from './../../services/pizza.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent extends BaseComponent implements OnInit {
  pizzas: PizzaModel[];
  constructor(private pizzaService: PizzaService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    if (this.pizzaService.items) {
      this.pizzas = this.pizzaService.items;
      return;
    }
    this.unsubscribeOndestroy(
      this.pizzaService
        .getAllPizzas()
        .subscribe((result: any) => (this.pizzas = result.data))
    );
  }

  addPizza(pizza: PizzaModel): void {
    pizza.quantity++;
  }

  subsPizza(pizza: PizzaModel): void {
    pizza.quantity--;
  }

  proceedCheckout(): void {
    this.pizzaService.items = this.pizzas;
    this.router.navigate(['checkout']);
  }

  proceedOrder(): void {
    this.pizzaService.items = this.pizzas;
    this.router.navigate(['order']);
  }
}
