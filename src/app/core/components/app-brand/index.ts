import { NgModule } from '@angular/core';
// harry import { SharedModule } from '@shared/index';

import { AppBrandComponent } from './app-brand.component';

@NgModule({
  imports: [
    // harry SharedModule
  ],
  exports: [AppBrandComponent],
  declarations: [AppBrandComponent],
  providers: [],
})
export class AppBrandModule { }
