import { NgModule } from '@angular/core';
// harry import { SharedModule } from '@shared/index';
// harry import { RouterModule } from '@angular/router';

import { AppNavbarComponent } from './app-navbar.component';
// harry import { AppNavbarMenuComponent } from './app-navbar-menu';
// harry import { AppNavbarUserComponent } from './app-navbar-user';

@NgModule({
  imports: [
    // harry SharedModule,
    // harry RouterModule
  ],
  declarations: [
    AppNavbarComponent /* harry,
    AppNavbarMenuComponent,
    AppNavbarUserComponent*/
  ],
  exports: [
    AppNavbarComponent
  ]
})
export class AppNavbarModule { }
