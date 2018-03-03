import { Component, OnInit } from '@angular/core';
/* harry  import { Store } from '@ngrx/store';
import { EchoesState } from '@core/store';

// actions
import { NowPlaylistActions, LoadPlaylistAction, PlayPlaylistAction } from '@core/store/now-playlist';
import { ActionTypes } from '@core/store/app-player';
// selectors
import * as PlayerSearch from '@core/store/player-search';
import { AppPlayerApi } from '@core/api/app-player.api';

import { fadeInAnimation } from '@shared/animations/fade-in.animation';
 */
@Component({
  selector: 'app-youtube-playlists',
  templateUrl: './youtube-playlists.component.html',
  // harry animations: [fadeInAnimation],
  styleUrls: ['./youtube-playlists.component.css']
})
export class YoutubePlaylistsComponent implements OnInit {

  /* harry results$ = this.store.select(PlayerSearch.getPlayerSearchResults);
  isSearching$ = this.store.select(PlayerSearch.getIsSearching); */

  constructor(
/*   harry   private store: Store<EchoesState>,
    private nowPlaylistActions: NowPlaylistActions,
    private appPlayerActions: ActionTypes,
    private playerSearchActions: PlayerSearch.PlayerSearchActions,
    private appPlayerApi: AppPlayerApi */
  ) { }

  ngOnInit() {
    /* harry this.store.dispatch(this.playerSearchActions.updateSearchType(PlayerSearch.CSearchTypes.PLAYLIST));
    this.store.dispatch(PlayerSearch.PlayerSearchActions.PLAYLISTS_SEARCH_START.creator()); */
  }

  /* harry  playPlaylist(media: GoogleApiYouTubePlaylistResource) {
    // this.store.dispatch(new PlayPlaylistAction(media.id));
    this.appPlayerApi.playPlaylist(media);
  } */

  /* harry queueSelectedPlaylist(media: GoogleApiYouTubePlaylistResource) {
    // this.store.dispatch(new LoadPlaylistAction(media.id));
    this.appPlayerApi.queuePlaylist(media);
  } */
}
