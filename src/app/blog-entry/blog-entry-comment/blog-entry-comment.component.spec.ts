import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogEntryCommentComponent } from './blog-entry-comment.component';

describe('BlogEntryCommentComponent', () => {
  let component: BlogEntryCommentComponent;
  let fixture: ComponentFixture<BlogEntryCommentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogEntryCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogEntryCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
