import { ListOrderComponent } from './order/list/list.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './pizza/list/list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AddComponent } from './checkout/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListOrderComponent,
    AddComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [{ provide: 'BASE_URL', useValue: 'http://localhost:3004/' }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

