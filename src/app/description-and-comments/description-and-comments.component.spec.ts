import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAndCommentsComponent } from './description-and-comments.component';

describe('DescriptionAndCommentsComponent', () => {
  let component: DescriptionAndCommentsComponent;
  let fixture: ComponentFixture<DescriptionAndCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionAndCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionAndCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
