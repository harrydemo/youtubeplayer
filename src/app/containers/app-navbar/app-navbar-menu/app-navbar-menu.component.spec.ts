import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNavbarMenuComponent } from './app-navbar-menu.component';

describe('AppNavbarMenuComponent', () => {
  let component: AppNavbarMenuComponent;
  let fixture: ComponentFixture<AppNavbarMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppNavbarMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppNavbarMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
