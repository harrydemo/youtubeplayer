import { Component, OnInit } from '@angular/core';

/* harry import { UserPlayerService } from '../user-player.service';
import { EchoesState } from '@core/store';
import { Store } from '@ngrx/store'; */

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html' // ,
  // styleUrls: ['./playlists.component.css']
})
export class PlaylistsComponent implements OnInit {

  // harry playlists$ = this.store.select(state => state.user.playlists);

  constructor(
  /* harry  private store: Store<EchoesState>,
    private userPlayerService: UserPlayerService */
  ) { }

  ngOnInit() { }

  /* harry playSelectedPlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.userPlayerService.playSelectedPlaylist(playlist);
  }

  queueSelectedPlaylist(playlist: GoogleApiYouTubePlaylistResource) {
    this.userPlayerService.queuePlaylist(playlist);
  } */
}
