import { NgModule } from '@angular/core';
import { Store, StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
// harry import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// harry import { localStorageSync } from 'ngrx-store-localstorage';
// import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
// harry import { environment } from '@env/environment';
// harry import { EchoesState, EchoesReducers, EchoesActions } from './reducers';
// harry import { NavigationSerializer } from './router-store';

// import { storeFreeze } from 'ngrx-store-freeze';
export { EchoesState } from './reducers';

/* harry export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: Object.keys(EchoesReducers),
    rehydrate: true
  })(reducer);
}
const metaReducers: MetaReducer<any, any>[] = [localStorageSyncReducer];
const optionalImports = [];
if (!environment.production) {
  // Note that you must instrument after importing StoreModule
  optionalImports.push(StoreDevtoolsModule.instrument({ maxAge: 25 }));
}

@NgModule({
  imports: [
    StoreModule.forRoot(EchoesReducers, { metaReducers }),
    // StoreRouterConnectingModule,
    ...optionalImports
  ],
  declarations: [],
  exports: [],
  providers: [
    ...EchoesActions,
    // { provide: RouterStateSerializer, useClass: NavigationSerializer }
  ]
})*/
export class CoreStoreModule { }
