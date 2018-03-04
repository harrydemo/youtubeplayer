import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { YoutubeVideosInfo } from './youtube-videos-info.service';
/* harry import { EchoesState } from '@store/reducers';
import * as NowPlaylist from '@store/now-playlist'; */

@Injectable()
export class NowPlaylistService {
  // harry public playlist$: Observable<NowPlaylist.INowPlaylist>;

  constructor(
    // harry public store: Store<EchoesState>,
    private youtubeVideosInfo: YoutubeVideosInfo,
    // harry private nowPlaylistActions: NowPlaylist.NowPlaylistActions
  ) {
    // harry this.playlist$ = this.store.select(NowPlaylist.getNowPlaylist);
  }

  queueVideo(mediaId: string) {
    // harry return this.youtubeVideosInfo.api.list(mediaId).map(items => items[0]);
  }

  // harry queueVideos(medias: GoogleApiYouTubeVideoResource[]) {
    // harry this.store.dispatch(new NowPlaylist.QueueVideos(medias));
  // harry }

  removeVideo(media) {
    // harry this.store.dispatch(new NowPlaylist.RemoveVideo(media));
  }

  selectVideo(media) {
    // harry this.store.dispatch(new NowPlaylist.SelectVideo(media));
  }

  updateFilter(filter: string) {
    // harry this.store.dispatch(new NowPlaylist.FilterChange(filter));
  }

  clearPlaylist() {
    // harry this.store.dispatch(new NowPlaylist.RemoveAll());
  }

  selectNextIndex() {
    // harry this.store.dispatch(new NowPlaylist.SelectNext());
  }

  selectPreviousIndex() {
    // harry this.store.dispatch(new NowPlaylist.SelectPrevious());
  }

  trackEnded() {
   // harry  this.store.dispatch(new NowPlaylist.MediaEnded());
  }

  getCurrent() {
    // harry let media;
  /* harry    this.playlist$.take(1).subscribe(playlist => {
      media = playlist.videos.find(video => video.id === playlist.selectedId);
    }); */
    // harry return media;
  }

  updateIndexByMedia(mediaId: string) {
    // harry this.store.dispatch(new NowPlaylist.UpdateIndexByMedia(mediaId));
  }
 /*harry
  isInLastTrack(): boolean {
    let nowPlaylist: NowPlaylist.INowPlaylist;
    this.playlist$.take(1).subscribe(_nowPlaylist => (nowPlaylist = _nowPlaylist));
    const currentVideoId = nowPlaylist.selectedId;
    const indexOfCurrentVideo = nowPlaylist.videos.findIndex(video => video.id === currentVideoId);
    const isCurrentLast = indexOfCurrentVideo + 1 === nowPlaylist.videos.length;
    return isCurrentLast;
  }
*/
 /* harry  seekToTrack(trackEvent) {
    this.store.dispatch(this.nowPlaylistActions.seekTo(trackEvent));
  } */
}
