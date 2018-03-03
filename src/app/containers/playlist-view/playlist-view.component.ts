import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/* harry import { ActivatedRoute } from '@angular/router';
import { EchoesState } from '@core/store';
import { Store } from '@ngrx/store';
import { UserProfileActions } from '@core/store/user-profile';
import { NowPlaylistActions, LoadPlaylistAction, PlayPlaylistAction } from '@core/store/now-playlist';

import { PlaylistProxy } from './playlist-view.proxy'; */

@Component({
  selector: 'app-playlist-view',
  templateUrl: './playlist-view.component.html',
  styleUrls: ['./playlist-view.component.scss']
})
export class PlaylistViewComponent implements OnInit {

 /* harry  playlist$ = this.playlistProxy.fetchPlaylist(this.route);
  videos$ = this.playlistProxy.fetchPlaylistVideos(this.route);
  header$ = this.playlistProxy.fetchPlaylistHeader(this.route);
  nowPlaylist$ = this.playlistProxy.nowPlaylist$; */

  // harry constructor(private playlistProxy: PlaylistProxy, private route: ActivatedRoute) { }

  ngOnInit() { }

  /* harry playPlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.playlistProxy.playPlaylist(playlist);
  }

  queuePlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.playlistProxy.queuePlaylist(playlist);
  }

  queueVideo(media: GoogleApiYouTubeVideoResource) {
    this.playlistProxy.queueVideo(media);
  }

  playVideo(media: GoogleApiYouTubeVideoResource) {
    this.playlistProxy.playVideo(media);
  }

  unqueueVideo(media: GoogleApiYouTubeVideoResource) {
    this.playlistProxy.unqueueVideo(media);
  }

  handleBack() {
    this.playlistProxy.goBack();
  } */
}
