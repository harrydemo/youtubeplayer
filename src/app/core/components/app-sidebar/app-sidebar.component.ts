import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppSidebarProxy } from './app-sidebar.proxy';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppSidebarComponent {

 /* harry sidebarCollapsed$ = this.appSidebarProxy.sidebarCollapsed$;
  searchType$ = this.appSidebarProxy.searchType$; */

  constructor(private appSidebarProxy: AppSidebarProxy) { }

  toggleSidebar() {
    this.appSidebarProxy.toggleSidebar();
  }
}
