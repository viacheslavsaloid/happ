import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreComponent  } from './layout/core.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [CoreComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'orders'
      },
      {
        path: 'orders',
        loadChildren: async () => await import('../orders/orders.module').then((m) => m.OrdersModule),
      },
      {
        path: 'users',
        loadChildren: async () => await import('../users/users.module').then((m) => m.UsersModule),
      }
    ], { initialNavigation: 'enabledBlocking' }),
  ],
  exports: [CoreComponent],
})
export class CoreModule {}
