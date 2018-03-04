import { Component, HostBinding, OnInit } from '@angular/core';
/* harry import { Store } from '@ngrx/store';
import { VersionCheckerService } from './core/services/version-checker.service';
import { EchoesState } from '@store/reducers';
import { getSidebarCollapsed, getAppTheme } from '@store/app-layout'; */

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  // harry sidebarCollapsed$ = this.store.select(getSidebarCollapsed);
  // harry theme$ = this.store.select(getAppTheme);

  @HostBinding('class')
  style = 'arctic';

  /* harry constructor(private store: Store<EchoesState>, private versionCheckerService: VersionCheckerService) {
    versionCheckerService.start();
  } */

  ngOnInit() {
   // harry this.theme$.subscribe(theme => this.style = theme);
  }
}
