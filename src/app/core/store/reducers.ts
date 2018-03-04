import { Observable } from 'rxjs/Observable';
import { ActionReducerMap, Store } from '@ngrx/store';
// harry import { RouterStateSnapshot } from '@angular/router';
// import { routerReducer, RouterReducerState } from '@ngrx/router-store';
// reducers
import { IAppPlayer, player, ActionTypes } from './app-player';
// harry import { INowPlaylist, nowPlaylist, NowPlaylistActions } from './now-playlist';
// harry import { IUserProfile, user, UserProfileActions } from './user-profile';
// harry import { IPlayerSearch, search, PlayerSearchActions } from './player-search';
import { IAppSettings, appLayout } from './app-layout';

// The top level Echoes Player application interface
// each reducer is reponsible for manipulating a certain state
export interface EchoesState {
  player: IAppPlayer;
  // harry nowPlaylist: INowPlaylist;
  // harry user: IUserProfile;
  // harry search: IPlayerSearch;
  appLayout: IAppSettings;
  // routerReducer: RouterReducerState;
}

/* harry export let EchoesReducers: ActionReducerMap<EchoesState> = {
  player,
 nowPlaylist,
  user,
  search,
  appLayout,
  // routerReducer
};
*/

// harry export let EchoesActions = [ActionTypes, NowPlaylistActions, UserProfileActions, PlayerSearchActions];
