import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MockPizzaService } from 'src/app/mocks';
import { PizzaModel } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';
import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let pizzaService: PizzaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddComponent],
      providers: [
        { provide: 'BASE_URL', useValue: '' },
        { provide: PizzaService, useClass: MockPizzaService },
      ],
      imports: [RouterTestingModule, HttpClientModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    pizzaService = TestBed.inject(PizzaService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate total', () => {
    let pizzas: PizzaModel[];
    pizzas = [
      {
        image: 'image.jpg',
        ingredients: ['corn'],
        name: 'fake pizza',
        price: 12,
        quantity: 5,
        size: 'large',
        sliceQuantity: 8,
      },
      {
        image: 'image.jpg',
        ingredients: ['corn'],
        name: 'fake pizza',
        price: 12,
        quantity: 3,
        size: 'large',
        sliceQuantity: 8,
      },
    ];
    component.items = pizzas;
    fixture.detectChanges();
    component.calculateTotal();
    expect(component.total).toBe(96);
  });
});
