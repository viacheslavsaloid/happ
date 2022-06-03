import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsersComponent  } from './layout/users.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      }
    ]),
  ],
  exports: [UsersComponent],
})
export class UsersModule {}
