import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {first, startWith, Subject, switchMap} from "rxjs";

@Component({
  selector: 'logger-core',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent {
  private readonly _endpoint = 'users';
  private readonly _forceUpdateSubject$ = new Subject();
  readonly users$ =  this._forceUpdateSubject$.asObservable().pipe(
    startWith(null),
    switchMap(() => this._apiService.get(this._endpoint))
  );
  name = '';

  constructor(private readonly _apiService: ApiService) {}

  createUser(name: string) {
    this._apiService.post(this._endpoint, { name }).pipe(
      first()
    ).subscribe(() => {
      this._forceUpdateSubject$.next(null);
    })
  }
}
