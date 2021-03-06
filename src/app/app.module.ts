import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* harry  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core';
import { SharedModule } from '@shared/index';
import { APP_CONTAINER_MODULES } from './containers';
import { ROUTES } from './app.routes'; */

import { APP_CORE_MODULES } from './core/components';
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
/* harry     FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule,

    CoreModule,
    SharedModule,
    ...APP_CORE_MODULES,
    ...APP_CONTAINER_MODULES */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
