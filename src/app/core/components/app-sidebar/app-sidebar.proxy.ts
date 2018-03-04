import { Injectable } from '@angular/core';
/* harry import { Store } from '@ngrx/store';
import { AppApi } from '@api/app.api';
import { EchoesState } from '@store/reducers';

import { getSidebarCollapsed } from '@store/app-layout';
import * as PlayerSearch from '@store/player-search';
import * as AppLayout from '@store/app-layout'; */

@Injectable()
export class AppSidebarProxy {

/* harry  sidebarCollapsed$ = this.store.select(getSidebarCollapsed);
  searchType$ = this.store.select(PlayerSearch.getSearchType); */

  constructor(
    /* harry private store: Store<EchoesState>,
    private appApi: AppApi */
  ) { }

  toggleSidebar() {
    // harry this.appApi.toggleSidebar();
  }
}
