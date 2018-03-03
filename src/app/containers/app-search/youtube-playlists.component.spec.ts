import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlaylistsComponent } from './youtube-playlists.component';

describe('YoutubePlaylistsComponent', () => {
  let component: YoutubePlaylistsComponent;
  let fixture: ComponentFixture<YoutubePlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubePlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubePlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
