import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleGalleryComponent } from './google-gallery.component';

describe('GoogleGalleryComponent', () => {
  let component: GoogleGalleryComponent;
  let fixture: ComponentFixture<GoogleGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
