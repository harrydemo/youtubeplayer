
import { Injectable } from '@angular/core';
/* harry import { EchoesState } from '@store/reducers';
import { Store } from '@ngrx/store';
// Actions
import * as AppLayout from '@store/app-layout';
import * as RouterActions from '@store/router-store';
import * as UserActions from '@store/user-profile'; */

@Injectable()
export class AppApi {
/* harry   themes$ = this.store.select(AppLayout.getAppThemes);
  appVersion$ = this.store.select(AppLayout.getAppVersion);
  user$ = this.store.select(UserActions.getUser); */

  constructor(
    // harry private store: Store<EchoesState>
  ) { }

  toggleSidebar() {
    // harry this.store.dispatch(new AppLayout.ToggleSidebar());
  }

  navigateBack() {
    // harry this.store.dispatch(new RouterActions.Back());
  }

  updateVersion() {
    // harry this.store.dispatch(new AppLayout.UpdateAppVersion());
  }

  checkVersion() {
    // harry this.store.dispatch(new AppLayout.CheckVersion());
  }

  changeTheme(theme: string) {
    // harry this.store.dispatch(new AppLayout.ThemeChange(theme));
  }

  notifyNewVersion(response) {
    // harry this.store.dispatch(new AppLayout.RecievedAppVersion(response));
  }

  recievedNewVersion(response) {
    // harry this.store.dispatch(new AppLayout.RecievedAppVersion(response));
  }

  // AUTHORIZATION
  signinUser() {
    // harry this.store.dispatch(new UserActions.UserSignin());
  }

  signoutUser() {
    // harry this.store.dispatch(new UserActions.UserSignout());
  }
}
