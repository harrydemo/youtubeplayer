import { Injectable, NgZone } from '@angular/core';
import { Store } from '@ngrx/store';
/* harry import { EchoesState } from '@store/reducers';
import * as AppPlayer from '@store/app-player'; */

@Injectable()
export class YoutubePlayerService {
  // harry public player: YT.Player;

  constructor(
    // harry private store: Store<EchoesState>,
    private zone: NgZone,
    // harry private playerActions: AppPlayer.ActionTypes
  ) { }

  setupPlayer(player) {
    // harry this.player = player;
  }

  play() {
    // harry this.zone.runOutsideAngular(() => this.player.playVideo());
  }

  pause() {
    // harry this.zone.runOutsideAngular(() => this.player.pauseVideo());
  }

/* harry  playVideo(media: GoogleApiYouTubeVideoResource, seconds?: number) {
    const id = media.id;
    const isLoaded = this.player.getVideoUrl().includes(id);
    if (!isLoaded) {
      this.zone.runOutsideAngular(() => this.player.loadVideoById(id, seconds || undefined));
    }
    this.play();
  } */

  seekTo(seconds: number) {
    // harry this.zone.runOutsideAngular(() => this.player.seekTo(seconds, true));
  }

  // Not in use
  onPlayerStateChange(event) {
    const state = event.data;
    // let autoNext = false;
    // play the next song if its not the end of the playlist
    // should add a "repeat" feature
    // harry if (state === YT.PlayerState.ENDED) {
      // this.listeners.ended.forEach(callback => callback(state));
    // harry }

    // harry if (state === YT.PlayerState.PAUSED) {
      // service.playerState = YT.PlayerState.PAUSED;
    // harry }
    // harry if (state === YT.PlayerState.PLAYING) {
      // service.playerState = YT.PlayerState.PLAYING;
    // harry }
  }

  setSize(height, width) {
    this.zone.runOutsideAngular(() => {
      // harry this.player.setSize(width, height);
    });
  }
}
