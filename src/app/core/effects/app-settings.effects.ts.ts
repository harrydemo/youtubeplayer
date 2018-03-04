import { Injectable } from '@angular/core';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

/* harry import { NowPlaylistService } from '@core/services';
import { Store } from '@ngrx/store';
import { EchoesState } from '@store/reducers';
import { Effect, Actions, toPayload } from '@ngrx/effects';

import * as AppLayout from '@store/app-layout';
import { VersionCheckerService } from '@core/services/version-checker.service'; */

@Injectable()
export class AppSettingsEffects {
  constructor(
    /* harry  public actions$: Actions,
    public store: Store<EchoesState>,
    public versionCheckerService: VersionCheckerService */
  ) { }

  /* harry @Effect({ dispatch: false })
  updateAppVersion$ = this.actions$
    .ofType(AppLayout.ActionTypes.APP_UPDATE_VERSION)
    .map(() => this.versionCheckerService.updateVersion());

  @Effect({ dispatch: false })
  checkForNewAppVersion$ = this.actions$
    .ofType(AppLayout.ActionTypes.APP_CHECK_VERSION)
    .map(() => this.versionCheckerService.checkForVersion()); */
}
