import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerResizerComponent } from './player-resizer.component';

describe('PlayerResizerComponent', () => {
  let component: PlayerResizerComponent;
  let fixture: ComponentFixture<PlayerResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerResizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
