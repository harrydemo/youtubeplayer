import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
// harry import * as NowPlaylist from '@store/now-playlist';

@Component({
  selector: 'now-playlist-filter',
  templateUrl: './now-playlist-filter.component.html',
  styleUrls: ['./now-playlist-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NowPlaylistFilterComponent {

  // harry @Input() playlist: NowPlaylist.INowPlaylist;
  // @Output() save = new EventEmitter();
  @Output() clear = new EventEmitter();
  @Output() filter = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() headerClick = new EventEmitter();

  constructor() { }

  handleFilterChange(searchFilter: string) {
    this.filter.next(searchFilter);
  }

  resetSearchFilter() {
    this.reset.next('');
  }

  isFilterEmpty() {
    // harry return this.playlist.filter === '';
  }

  clearPlaylist() {
    this.clear.next('');
  }

  isPlaylistEmpty() {
    // harry return this.playlistLength === 0;
  }

  onNowPlayingClick() {
    this.headerClick.next();
  }
  getplaylistLength() {
    // harry return this.playlist.videos.length;
  }
}
