
import { Component, OnInit } from '@angular/core';

// harry import { Store } from '@ngrx/store';
// harry import { EchoesState } from '@core/store';

// harry import { NowPlaylistActions } from '@core/store/now-playlist';
// selectors
// harry import * as UserProfile from '@core/store/user-profile';
// harry import * as PlayerSearch from '@core/store/player-search';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {

  // harry query$ = this.store.select(PlayerSearch.getQuery);
  // harry currentPlaylist$ = this.store.select(UserProfile.getUserViewPlaylist);
  // harry queryParamPreset$ = this.store.select(PlayerSearch.getQueryParamPreset);
  // harry presets$ = this.store.select(PlayerSearch.getPresets);

  constructor(
    // harry private store: Store<EchoesState>,
    // harry private playerSearchActions: PlayerSearch.PlayerSearchActions
  ) { }

  ngOnInit() { }

  search(query: string) {
    // harry this.store.dispatch(this.playerSearchActions.searchNewQuery(query));
  }

  resetPageToken(query: string) {
    // harry this.store.dispatch(this.playerSearchActions.resetPageToken());
    // harry this.store.dispatch(new PlayerSearch.UpdateQueryAction(query));
  }

  searchMore() {
    // harry this.store.dispatch(this.playerSearchActions.searchMoreForQuery());
  }

  // harry updatePreset(preset: PlayerSearch.IPresetParam) {
    // harry this.store.dispatch(this.playerSearchActions.updateQueryParam({ preset: preset.value }));
  // harry }
}
