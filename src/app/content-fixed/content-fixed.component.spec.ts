import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFixedComponent } from './content-fixed.component';

describe('ContentFixedComponent', () => {
  let component: ContentFixedComponent;
  let fixture: ComponentFixture<ContentFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
