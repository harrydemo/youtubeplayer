import { Observable } from 'rxjs/Observable';
/* harry import { UserProfile } from '@core/services';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'; */
import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistResolver /* harry implements Resolve<any> */ {
  constructor(
    // harry private userProfile: UserProfile,
  ) { }

  /* harry resolve(route: ActivatedRouteSnapshot): Observable<GoogleApiYouTubePlaylistResource> {
    const playlistId = route.params['id'];
    return this.userProfile.fetchPlaylist(playlistId)
      .map(response => response.items[0]);
  } */
}
