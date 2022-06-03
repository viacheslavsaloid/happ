import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { CoreComponent } from './core/layout/core.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  imports: [CoreModule],
  bootstrap: [CoreComponent],
})
export class AppModule {}
