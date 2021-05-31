import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { PizzaService } from './pizza.service';

describe('PizzaService', () => {
  let service: PizzaService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: 'BASE_URL', useValue: 'localhost' }],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
