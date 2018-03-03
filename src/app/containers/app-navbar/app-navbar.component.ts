import {
  Component,
  EventEmitter,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

/* harry import { Authorization } from '@core/services';
import { EchoesState } from '@core/store';
import { AppApi } from '@api/app.api'; */

@Component({
  selector: 'app-navbar',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app-navbar.scss'],
  template: `
    <nav class="row navbar navbar-default navbar-fixed-top">
      <div class="navbar-container">
        <div class="navbar__content">
        <h3 *ngIf="header" class="navbar__header navbar-text">
            <button *ngIf="mainIcon" class="navbar-btn__main btn-transparent"
              (click)="handleMainIconClick()">
              <icon [name]="mainIcon"></icon>
            </button>
            <icon [name]="headerIcon" *ngIf="headerIcon"></icon> {{ header }}
          </h3>
          <ng-content></ng-content>
        </div>
        <section class="navbar-text navbar-actions">
          <app-navbar-user
            [signedIn]="isSignIn()"
            [userImageUrl]="(user$ | async).profile.imageUrl"
            (signIn)="signInUser()"
            ></app-navbar-user>
          <app-navbar-menu
            [appVersion]="appVersion$ | async"
            [theme]="themes$ | async"
            (themeChange)="changeTheme($event)"
            [signedIn]="isSignIn()"
            (signOut)="signOutUser()"
            (versionUpdate)="updateVersion()"
            (versionCheck)="checkVersion()"
          ></app-navbar-menu>
        </section>
      </div>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppNavbarComponent implements OnInit {
  // harry user$ = this.appApi.user$;
  // harry appVersion$ = this.appApi.appVersion$;
  // harry themes$ = this.appApi.themes$;

  @Input() header: string;
  @Input() headerIcon = '';
  @Input() mainIcon = '';

  @Output() signIn = new EventEmitter();
  @Output() signOut = new EventEmitter();
  @Output() headerMainIconClick = new EventEmitter();

  // harry constructor(private authorization: Authorization, private appApi: AppApi) {}

  ngOnInit() {}

  signInUser() {
    // harry this.appApi.signinUser();
    this.signIn.next();
  }

  signOutUser() {
    // harry this.appApi.signoutUser();
    this.signOut.next();
  }

  isSignIn() {
    // harry return this.authorization.isSignIn();
  }

  updateVersion() {
   // harry  this.appApi.updateVersion();
  }

  checkVersion() {
    // harry this.appApi.checkVersion();
  }

  handleMainIconClick() {
    this.headerMainIconClick.emit();
  }

  changeTheme(theme) {
   // harry  this.appApi.changeTheme(theme.value);
  }
}
