import { NgModule } from '@angular/core';
import { OrdersComponent  } from './layout/orders.component';
import {RouterModule} from "@angular/router";
import {UsersComponent} from "../users/layout/users.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: OrdersComponent,
      }
    ]),
  ],
  exports: [OrdersComponent],
})
export class OrdersModule {}
