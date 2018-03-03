import { NgModule } from '@angular/core';
// harry import { SharedModule } from '@shared/index';
import { AppNavbarModule } from '../app-navbar';

import { PlaylistViewModule } from '../playlist-view';

import { UserComponent } from './user.component';
// harry import { PlaylistsComponent } from './playlists';
// import { PlaylistViewComponent, PlaylistResolver, PlaylistVideosResolver } from '@shared/components/playlist-view';
/* harry import { AuthGuard } from './user.guard';
import { UserPlayerService } from './user-player.service';
import { routing } from './user.routing'; */

@NgModule({
  imports: [
    // harry SharedModule,
    AppNavbarModule,
    PlaylistViewModule,
    // harry routing
  ],
  declarations: [
    UserComponent,
    // harry PlaylistsComponent
  ],
  exports: [
    UserComponent
  ],
  providers: [
    // harry AuthGuard,
    // harry UserPlayerService,
    // PlaylistResolver,
    // PlaylistVideosResolver
  ]
})
export class UserModule { }
