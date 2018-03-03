import { NgModule } from '@angular/core';
// harry import { SharedModule } from '@shared/index';

import { AppNavbarModule } from '../app-navbar';
import { PlaylistViewComponent } from './playlist-view.component';
// harry import { PlaylistProxy } from './playlist-view.proxy';
// harry import { routing } from './playlist-view.routing';

@NgModule({
  imports: [
    // harry SharedModule,
    AppNavbarModule,
    // harry routing
  ],
  declarations: [
    PlaylistViewComponent
  ],
  exports: [
    PlaylistViewComponent
  ],
  providers: [
    // harry PlaylistProxy
  ]
})
export class PlaylistViewModule { }
