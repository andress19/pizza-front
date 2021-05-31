import { ListOrderComponent } from './order/list/list.component';
import { AddComponent } from './checkout/add/add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pizza/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'checkout', component: AddComponent },
  { path: 'order', component: ListOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
