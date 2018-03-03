import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
// harry import { CSearchTypes } from '@core/store/player-search';

@Component({
  selector: 'app-search-navigator',
  templateUrl: './search-navigator.component.html',
  styleUrls: ['./search-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchNavigatorComponent implements OnInit {

  searchTypes = [
    { label: 'Videos', link: '/search/videos', type: CSearchTypes.VIDEO },
    { label: 'Playlists', link: '/search/playlists', type: CSearchTypes.PLAYLIST },
  ];

  ngOnInit() { }
}
