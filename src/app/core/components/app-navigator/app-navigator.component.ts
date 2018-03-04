import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
} from '@angular/core';

/* harry import { Router } from '@angular/router';
import { EchoesState } from '@store/reducers';
import { Store } from '@ngrx/store';
import * as PlayerSearch from '@core/store/player-search'; */

@Component({
  selector: 'app-navigator',
  templateUrl: './app-navigator.component.html',
  styleUrls: ['./app-navigator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavigatorComponent implements OnInit {

  @Input() closed = false;
 // harry  @Input() searchType = PlayerSearch.CSearchTypes.VIDEO;

  // harry public searchType$ = this.store.select(PlayerSearch.getSearchType);
  public routes = [
    { link: 'search', icon: 'music', label: 'Explore' }
    // { link: '/user', icon: 'heart', label: 'My Profile' }
  ];

  constructor(
    // harry private store: Store<EchoesState>,
    // harry private router: Router
  ) { }

  ngOnInit() {
  }

  go(link) {
    // harry this.router.navigate([`/${link}/${this.searchType}s`]);
  }
}
