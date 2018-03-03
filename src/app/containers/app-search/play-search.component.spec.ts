import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaySearchComponent } from './play-search.component';

describe('PlaySearchComponent', () => {
  let component: PlaySearchComponent;
  let fixture: ComponentFixture<PlaySearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaySearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
