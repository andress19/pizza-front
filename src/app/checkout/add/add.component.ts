import { BaseComponent } from './../../base/base.component';
import { OrderModel } from './../../models/order.model';
import { CheckoutModel } from './../../models/checkout.model';
import { PizzaModel } from './../../models/pizza.model';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent extends BaseComponent implements OnInit {
  items: PizzaModel[];
  total: number;
  form = new FormGroup({
    mail: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    ]),
    address: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
  });
  constructor(private router: Router, private pizzaService: PizzaService) {
    super();
  }

  ngOnInit(): void {
    if (!this.pizzaService.items) {
      this.back();
      return;
    }
    this.items = this.pizzaService.items.filter((x) => x.quantity);
    this.calculateTotal();
  }

  get address(): AbstractControl {
    return this.form.get('address');
  }
  get customer(): AbstractControl {
    return this.form.get('customer');
  }
  get mail(): AbstractControl {
    return this.form.get('mail');
  }
  get phone(): AbstractControl {
    return this.form.get('phone');
  }

  back(): void {
    this.router.navigate(['']);
  }

  calculateTotal(): void {
    let total = 0;
    this.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    this.total = total;
  }

  onSubmit(): void {
    const checkout: CheckoutModel = {
      items: this.items,
      address: this.address.value,
      customer: this.customer.value,
      mail: this.mail.value,
      phone: this.phone.value,
      total: this.total,
    };

    const order: OrderModel = {
      mail: this.mail.value,
      total: this.total,
    };

    this.unsubscribeOndestroy(
      forkJoin([
        this.pizzaService.saveCheckout(checkout),
        this.pizzaService.saveOrder(order),
      ]).subscribe(
        (suc) => {
          this.router.navigate(['order']);
        }
      )
    );
  }
}
