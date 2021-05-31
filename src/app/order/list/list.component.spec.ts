import { MockPizzaService } from './../../mocks';
import { PizzaService } from 'src/app/services/pizza.service';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListOrderComponent } from './list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('ListComponent', () => {
  let component: ListOrderComponent;
  let fixture: ComponentFixture<ListOrderComponent>;
  let pizzaService: PizzaService;
  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListOrderComponent],
      providers: [
        { provide: 'BASE_URL', useValue: '' },
        { provide: PizzaService, useClass: MockPizzaService },
      ],
      imports: [RouterTestingModule, HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrderComponent);
    pizzaService = TestBed.inject(PizzaService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to the main page', () => {
    spyOn(router, 'navigate');
    component.back();
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });
});
