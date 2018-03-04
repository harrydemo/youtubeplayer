import { EffectsModule } from '@ngrx/effects';

import { AppPlayerEffects } from './app-player.effects';
import { RouterEffects } from './router.effects';
import { UserProfileEffects } from './user-profile.effects';
import { PlayerSearchEffects } from './player-search.effects';
/*harry  import { AppSettingsEffects } from './app-settings.effects';
import { AnalyticsEffects } from './analytics.effects';
import { NowPlaylistEffects } from './now-playlist.effects'; */


export const AppEffectsModules = EffectsModule.forRoot([
  AppPlayerEffects,
  UserProfileEffects,
  PlayerSearchEffects,
  RouterEffects,
/* harry    AppSettingsEffects,
  NowPlaylistEffects,
  AnalyticsEffects */
]);
