import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/* harry import { UserProfile } from '@core/services';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'; */


@Injectable()
export class PlaylistVideosResolver implements Resolve<any> {
  constructor(
    // harry private userProfile: UserProfile,
  ) { }

/* harry  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const playlistId = route.params['id'];
    return this.userProfile.fetchAllPlaylistItems(playlistId);
  } */
}
