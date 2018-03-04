import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComtrolsComponent } from './player-comtrols.component';

describe('PlayerComtrolsComponent', () => {
  let component: PlayerComtrolsComponent;
  let fixture: ComponentFixture<PlayerComtrolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComtrolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComtrolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
