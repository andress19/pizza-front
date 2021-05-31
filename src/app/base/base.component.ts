import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: '',
})
export class BaseComponent implements OnDestroy {
  subscriptions: Subscription[];
  ngOnDestroy(): void {
    if (!this.subscriptions || !this.subscriptions.length) {
      return;
    }
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }
  constructor() {
    this.subscriptions = [];
  }

  unsubscribeOndestroy(subscription: Subscription): void {
    this.subscriptions.push(subscription);
  }
}
