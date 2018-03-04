import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlaylistTrackComponent } from './now-playlist-track.component';

describe('NowPlaylistTrackComponent', () => {
  let component: NowPlaylistTrackComponent;
  let fixture: ComponentFixture<NowPlaylistTrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NowPlaylistTrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NowPlaylistTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
