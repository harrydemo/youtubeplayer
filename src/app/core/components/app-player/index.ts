import { NgModule } from '@angular/core';
// harry import { SharedModule } from '@shared/index';

import { AppPlayerComponent } from './app-player.component';
/* harry import { MediaInfoComponent } from './media-info';
import { PlayerControlsComponent } from './player-controls/player-controls.component';
import { PlayerResizerComponent } from './player-resizer/player-resizer.component';
import { ImageBlurComponent } from './image-blur'; */

@NgModule({
  imports: [
    // harry SharedModule
  ],
  declarations: [
    AppPlayerComponent,
/* harry     MediaInfoComponent,
    PlayerControlsComponent,
    PlayerResizerComponent,
    ImageBlurComponent */
  ],
  exports: [
    AppPlayerComponent
  ]
})
export class AppPlayerModule { }
