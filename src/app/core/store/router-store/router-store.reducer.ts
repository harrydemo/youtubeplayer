import { StoreModule, ActionReducerMap } from '@ngrx/store';
// harry import { Params, RouterStateSnapshot } from '@angular/router';
/* harry import {
  RouterReducerState,
  RouterStateSerializer
} from '@ngrx/router-store'; */

/* harry  export interface RouterStateUrl {
  url: string;
  queryParams: Params;
} */

export class NavigationSerializer /* harry implements RouterStateSerializer<RouterStateUrl> */ {
  /* harry serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    // console.log('ROUTE', routerState);
    const { url } = routerState;
    const queryParams = routerState.root.queryParams;
    return { url, queryParams };
  } */
}
