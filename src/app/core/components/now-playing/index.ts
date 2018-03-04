import { NgModule } from '@angular/core';
// harry import { SharedModule } from '@shared/index';

import { NowPlayingComponent } from './now-playing.component';
/* harry import { NowPlaylistComponent, NowPlaylistTrackComponent } from './now-playlist';
import { NowPlaylistFilterComponent } from './now-playlist-filter';
 */
@NgModule({
  imports: [
    // harry SharedModule
  ],
  declarations: [
    NowPlayingComponent,
/* harry     NowPlaylistComponent,
    NowPlaylistTrackComponent,
    NowPlaylistFilterComponent */
  ],
  exports: [
    NowPlayingComponent
  ]
})
export class NowPlayingModule { }
