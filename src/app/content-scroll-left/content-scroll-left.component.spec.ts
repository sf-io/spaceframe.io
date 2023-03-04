import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentScrollLeftComponent } from './content-scroll-left.component';

describe('ContentScrollLeftComponent', () => {
  let component: ContentScrollLeftComponent;
  let fixture: ComponentFixture<ContentScrollLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentScrollLeftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentScrollLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
