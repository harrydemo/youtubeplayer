import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take';


/* harry import { NowPlaylistEffects } from '@core/effects/now-playlist.effects';
import * as AppPlayer from '@store/app-player';
import * as NowPlaylist from '@store/now-playlist/now-playlist.selectors';
import { EchoesState } from '@store/reducers';
import { Store } from '@ngrx/store';
import { NowPlaylistService } from '@core/services';
import { AppPlayerApi } from '@api/app-player.api'; */

@Component({
  selector: 'app-player',
  templateUrl: './app-player.component.html',
  styleUrls: ['./app-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPlayerComponent implements OnInit {

 /* harry  player$ = this.store.select(AppPlayer.getPlayer);
  media$ = this.store.select(AppPlayer.getCurrentMedia);
  isPlayerPlaying$ = this.store.select(AppPlayer.getIsPlayerPlaying);
  isPlayerInRepeat$ = this.store.select(NowPlaylist.isPlayerInRepeat);
  isPlayerFullscreen$ = this.store.select(AppPlayer.getPlayerFullscreen);
  isShowPlayer$ = this.store.select(AppPlayer.getShowPlayer); */

  @HostBinding('class.youtube-player') style = true;

  constructor(
    /* harry  private nowPlaylistService: NowPlaylistService,
    private store: Store<EchoesState>,
    private nowPlaylistEffects: NowPlaylistEffects,
    private appPlayerApi: AppPlayerApi */
  ) { }

  ngOnInit() {
    // harry this.appPlayerApi.resetPlayer();
    // harry this.nowPlaylistEffects.loadNextTrack$.subscribe(action => this.playVideo(action.payload));
  }

  setupPlayer(player) {
    // harry this.appPlayerApi.setupPlayer(player);
  }

  updatePlayerState(event) {
    // harry this.appPlayerApi.changePlayerState(event);
  }

  // harry playVideo(media: GoogleApiYouTubeVideoResource) {
    // harry this.appPlayerApi.playVideo(media);
  // harry }

  pauseVideo() {
    // harry this.appPlayerApi.pauseVideo();
  }

  togglePlayer() {
    // harry this.appPlayerApi.togglePlayer();
  }

  toggleFullScreen() {
    // harry this.appPlayerApi.toggleFullScreen();
  }

  playNextTrack() {
    // harry this.nowPlaylistService.selectNextIndex();
    // harry this.playVideo(this.nowPlaylistService.getCurrent());
  }

  playPreviousTrack() {
    // harry this.nowPlaylistService.selectPreviousIndex();
    // harry this.playVideo(this.nowPlaylistService.getCurrent());
  }

  toggleRepeat() {
    // harry this.appPlayerApi.toggleRepeat();
  }
}
