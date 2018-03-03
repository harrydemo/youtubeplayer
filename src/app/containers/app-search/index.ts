import { NgModule } from '@angular/core';
// harry import { ReactiveFormsModule } from '@angular/forms';

// harry import { SharedModule } from '@shared/index';

import { AppSearchComponent } from './app-search.component';
import { AppNavbarModule } from '../app-navbar';
import { YoutubeVideosComponent } from './youtube-videos.component';
import { YoutubePlaylistsComponent } from './youtube-playlists.component';
// harry import { PlayerSearchComponent } from './player-search.component';
// harry import { SearchNavigatorComponent } from './search-navigator';
// harry import { routing } from './app-search.routing';

@NgModule({
  imports: [
/* harry     SharedModule,
    ReactiveFormsModule,
    routing, */
    AppNavbarModule
  ],
  declarations: [
/*  harry    PlayerSearchComponent,
    SearchNavigatorComponent, */
    AppSearchComponent,
    YoutubeVideosComponent,
    YoutubePlaylistsComponent

  ],
  exports: [
    AppSearchComponent
  ],
  providers: []
})
export class AppSearchModule { }
