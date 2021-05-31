import { PizzaModel } from './../../models/pizza.model';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPizzaService } from 'src/app/mocks';
import { PizzaService } from 'src/app/services/pizza.service';

import { ListComponent } from './list.component';
import { Router, RouterModule } from '@angular/router';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let pizzaService: PizzaService;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        { provide: 'BASE_URL', useValue: '' },
        { provide: PizzaService, useClass: MockPizzaService },
      ],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    pizzaService = TestBed.inject(PizzaService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new pizza to checkout cart', () => {
    let pizza: PizzaModel;
    pizza = {
      image: 'image.jpg',
      ingredients: ['corn'],
      name: 'fake pizza',
      price: 12,
      quantity: 0,
      size: 'large',
      sliceQuantity: 8,
    };
    component.addPizza(pizza);
    expect(pizza.quantity).toBe(1);
  });

  it('should remove a pizza from checkout cart', () => {
    let pizza: PizzaModel;
    pizza = {
      image: 'image.jpg',
      ingredients: ['corn'],
      name: 'fake pizza',
      price: 12,
      quantity: 5,
      size: 'large',
      sliceQuantity: 8,
    };
    component.subsPizza(pizza);
    expect(pizza.quantity).toBe(4);
  });

  it('should proceed to checkout', () => {
    spyOn(router, 'navigate');
    component.proceedCheckout();
    expect(router.navigate).toHaveBeenCalledWith(['checkout']);
  });

  it('should proceed to orders', () => {
    spyOn(router, 'navigate');
    component.proceedOrder();
    expect(router.navigate).toHaveBeenCalledWith(['order']);
  });
});
