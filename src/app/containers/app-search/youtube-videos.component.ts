import { Component, OnInit } from '@angular/core';

/* harry import * as PlayerSearch from '@core/store/player-search';
import { Store } from '@ngrx/store';
import { EchoesState } from '@core/store';

// actions
import { NowPlaylistActions } from '@core/store/now-playlist';
import { ActionTypes } from '@core/store/app-player';
import { AppPlayerApi } from '@core/api/app-player.api';

// selectors
import * as NowPlaylist from '@core/store/now-playlist'; */

@Component({
  selector: 'app-youtube-videos',
  templateUrl: './youtube-videos.component.html',
  styleUrls: ['./youtube-videos.component.scss']
})
export class YoutubeVideosComponent implements OnInit {

  /* harry videos$ = this.store.select(PlayerSearch.getPlayerSearchResults);
  playlistVideos$ = this.store.select(NowPlaylist.getPlaylistVideos);
  loading$ = this.store.select(PlayerSearch.getIsSearching);
 */
  constructor(
/*   harry   private store: Store<EchoesState>,
    private appPlayerApi: AppPlayerApi,
    private playerSearchActions: PlayerSearch.PlayerSearchActions */
  ) { }

  ngOnInit() {
/*  harry    this.store.dispatch(this.playerSearchActions.updateSearchType(PlayerSearch.CSearchTypes.VIDEO));
    this.store.dispatch(this.playerSearchActions.searchCurrentQuery()); */
  }

  /* harry  playSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    this.appPlayerApi.playVideo(media);
  }

  queueSelectedVideo(media: GoogleApiYouTubeVideoResource) {
    this.appPlayerApi.queueVideo(media);
  }

  removeVideoFromPlaylist(media: GoogleApiYouTubeVideoResource) {
    this.appPlayerApi.removeVideoFromPlaylist(media);
  } */
}
