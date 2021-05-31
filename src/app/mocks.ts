import { Observable, of } from 'rxjs';
export class MockPizzaService {

  public getAllPizzas(): Observable<any> {
    return of({data: []});
  }

  public getAllOrders(): Observable<any> {
    return of({data: []});
  }

  public saveCheckout(): Observable<any> {
    return of({data: []});
  }

  public saveOrder(): Observable<any> {
    return of({data: []});
  }
}

export class RouterMock {

  public navigate(param): void {}
}
