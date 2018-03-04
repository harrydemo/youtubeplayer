import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/* harry import { Store } from '@ngrx/store';

import { EchoesState } from '@store/reducers';
import { NowPlaylistService } from '@core/services/now-playlist.service';
import { INowPlaylist } from '@store/now-playlist';
import * as AppPlayer from '@store/app-player/app-player.actions';
import { NowPlaylistComponent } from './now-playlist'; */

@Component({
  selector: 'now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.scss'],
  // (sort)="sortVideo($event)"
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlayingComponent implements OnInit {

/* harry  public nowPlaylist$: Observable<INowPlaylist>;
  @ViewChild(NowPlaylistComponent) nowPlaylistComponent: NowPlaylistComponent; */

  constructor(
    // harry public store: Store<EchoesState>, public nowPlaylistService: NowPlaylistService
  ) { }

  ngOnInit() {
   // harry this.nowPlaylist$ = this.nowPlaylistService.playlist$;
  }

  // harry selectVideo(media: GoogleApiYouTubeVideoResource) {
  /* harry  this.store.dispatch(new AppPlayer.PlayVideo(media));
    this.nowPlaylistService.updateIndexByMedia(media.id); */
  // harry }

  sortVideo() { }

  updateFilter(searchFilter: string) {
    // harry this.nowPlaylistService.updateFilter(searchFilter);
  }

  resetFilter() {
    // harry this.nowPlaylistService.updateFilter('');
  }

  clearPlaylist() {
    // harry this.nowPlaylistService.clearPlaylist();
  }

  removeVideo(media) {
    // harry this.nowPlaylistService.removeVideo(media);
  }

  onHeaderClick() {
    // harry this.nowPlaylistComponent.scrollToActiveTrack();
  }

  /* harry selectTrackInVideo(trackEvent: { time: string; media: GoogleApiYouTubeVideoResource }) {
    this.store.dispatch(new AppPlayer.PlayVideo(trackEvent.media));
    this.nowPlaylistService.seekToTrack(trackEvent);
  } */
}
