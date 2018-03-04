import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBlurComponent } from './image-blur.component';

describe('ImageBlurComponent', () => {
  let component: ImageBlurComponent;
  let fixture: ComponentFixture<ImageBlurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageBlurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBlurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
