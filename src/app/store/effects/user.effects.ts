import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import {
  EUserAction,
  GetUser,
  GetUserSuccess
} from '@store/actions/user.actions';
import { UserService } from '@services/user/user.service';
import { IUser } from '@models/user.interface';

@Injectable()
export class UserEffects {

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserAction.getUser),
    switchMap(() => this.userService.getUser()),
    switchMap((userHttp: IUser) => {
      return of(new GetUserSuccess(userHttp));
    })
  );

  constructor(
    private userService: UserService,
    private actions$: Actions
  ) {}
}
