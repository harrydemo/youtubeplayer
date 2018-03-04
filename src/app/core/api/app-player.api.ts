import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take';

/* harry import { Store } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { EchoesState } from '@store/reducers';
import * as AppPlayer from '@store/app-player';
import * as NowPlaylist from '@store/now-playlist';
import { NowPlaylistEffects } from '@core/effects/now-playlist.effects'; */


@Injectable()
export class AppPlayerApi {
  constructor(
    /* harry private store: Store<EchoesState>,
    private nowPlaylistEffects: NowPlaylistEffects,
    private nowPlaylistActions: NowPlaylist.NowPlaylistActions */
  ) { }

  // harry playPlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    /* harry this.nowPlaylistEffects.playPlaylistFirstTrack$
      .map(toPayload)
      .take(1)
      .subscribe((media: GoogleApiYouTubeVideoResource) => this.playVideo(media)); */
    // harry this.queuePlaylist(playlist);
  // harry }

  /* harry queuePlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.store.dispatch(new NowPlaylist.LoadPlaylistAction(playlist.id));
  }

  playVideo(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(new AppPlayer.LoadAndPlay(media));
    this.store.dispatch(new NowPlaylist.SelectVideo(media));
  }

  queueVideo(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(new NowPlaylist.QueueVideo(media));
  }

  removeVideoFromPlaylist(media: GoogleApiYouTubeVideoResource) {
    this.store.dispatch(new NowPlaylist.RemoveVideo(media));
  } */

  pauseVideo() {
    // harry this.store.dispatch(new AppPlayer.PauseVideo());
  }

  togglePlayer() {
    // harry this.store.dispatch(new AppPlayer.TogglePlayer(true));
  }

  toggleFullScreen() {
    // harry this.store.dispatch(new AppPlayer.FullScreen());
  }

  toggleRepeat() {
    // harry this.store.dispatch(new NowPlaylist.ToggleRepeat());
  }

  resetPlayer() {
    // harry this.store.dispatch(new AppPlayer.Reset());
  }

  setupPlayer(player) {
    // harry this.store.dispatch(new AppPlayer.SetupPlayer(player));
  }

  // harry changePlayerState(event: YT.OnStateChangeEvent) {
    // harry this.store.dispatch(new AppPlayer.PlayerStateChange(event));
    // harry this.store.dispatch(new NowPlaylist.PlayerStateChange(event));
  // harry }
}
