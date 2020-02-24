import { TestBed } from '@angular/core/testing';

import { BlogEntryCommentService } from './blog-entry-comment.service';

describe('BlogEntryCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogEntryCommentService = TestBed.get(BlogEntryCommentService);
    expect(service).toBeTruthy();
  });
});
