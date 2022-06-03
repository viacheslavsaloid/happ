import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {first, startWith, Subject, switchMap} from "rxjs";

@Component({
  selector: 'logger-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  private readonly _endpoint = 'orders';
  private readonly _forceUpdateSubject$ = new Subject();
  readonly orders$ =  this._forceUpdateSubject$.asObservable().pipe(
    startWith(null),
    switchMap(() => this._apiService.get(this._endpoint))
  );
  name = '';

  constructor(private readonly _apiService: ApiService) {}

  createOrder(name: string) {
    this._apiService.post(this._endpoint, { name }).pipe(
      first()
    ).subscribe(() => {
      this._forceUpdateSubject$.next(null);
    })
  }
}
