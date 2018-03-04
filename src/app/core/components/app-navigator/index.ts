import { NgModule } from '@angular/core';
// harry import { RouterModule } from '@angular/router';

// harry import { SharedModule } from '@shared/index';

import { AppNavigatorComponent } from './app-navigator.component';

@NgModule({
  imports: [
    // harry SharedModule,
    // harry RouterModule
  ],
  declarations: [
    AppNavigatorComponent
  ],
  exports: [
    AppNavigatorComponent
  ],
  providers: []
})
export class AppNavigatorModule { }
