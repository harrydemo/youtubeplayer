import { Component, OnInit, ViewEncapsulation } from '@angular/core';
/* harry import { Store } from '@ngrx/store';
import { EchoesState } from '@core/store';

import * as UserProfile from '@core/store/user-profile/user-profile.selectors';
import { AppApi } from '@api/app.api'; */

@Component({
  selector: 'app-user',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

 /* harry  playlists$ = this.store.select(UserProfile.getUserPlaylists);
  currentPlaylist$ = this.store.select(UserProfile.getUserViewPlaylist);
  isSignedIn$ = this.store.select(UserProfile.getIsUserSignedIn); */

  constructor(
/*  harry    private appApi: AppApi,
    public store: Store<EchoesState> */
  ) {
    console.log('LAZY..');
  }

  ngOnInit() { }

  signInUser() {
   // harry  this.appApi.signinUser();
  }
}
