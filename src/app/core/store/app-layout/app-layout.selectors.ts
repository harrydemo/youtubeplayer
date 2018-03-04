import { Store, createSelector } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IAppSettings } from './app-layout.reducer';
// harry import { EchoesState } from '@store/reducers';

// harry export const getAppSettings = (state: EchoesState) => state.appLayout;
/* harry  export const getAppTheme = createSelector(
  // harry getAppSettings,
  (state: IAppSettings) => state.theme
); */
/* harry export const getAllAppThemes = createSelector(
  // harry getAppSettings,
  (state: IAppSettings) => state.themes
); */
/* harry export const getAppThemes = createSelector(
  // harry getAppSettings,
  getAppTheme,
  getAllAppThemes,
  (appLayout, theme: string, themes: string[]) => ({
    selected: theme,
    themes: themes.map(_theme => ({ label: _theme, value: _theme }))
  })
); */
/* harry export const getAppVersion = createSelector(
  // harry getAppSettings,
  (state: IAppSettings) => state.version
);
export const getSidebarCollapsed = createSelector(
  // harry getAppSettings,
  (state: IAppSettings) => !state.sidebarExpanded
); */
