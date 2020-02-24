import {Component, OnInit, Input} from '@angular/core';
import {BlogEntryCommentService} from './blog-entry-comment.service';

@Component({
  selector: 'app-blog-entry-comment',
  templateUrl: './blog-entry-comment.component.html',
  styleUrls: ['./blog-entry-comment.component.scss']
})
export class BlogEntryCommentComponent implements OnInit {

  public author: string;
  public email: string;
  public body: string;
  public submitted = false;
  public added = false;
  public comments: Array<any>;
  @Input()
  public blogPostEntryId: string;

  constructor(private blogEntryCommentService: BlogEntryCommentService) {}

  ngOnInit() {
    this.blogEntryCommentService.getComments(this.blogPostEntryId).then(comments => this.comments);
  }

  public onSubmit() {
    this.submitted = true;
  }

  resolvedCaptcha(captchaResponse: string) {
    if (captchaResponse) {
      this.blogEntryCommentService.addComment(this.author, this.email, this.body, this.blogPostEntryId, captchaResponse).subscribe(() => {
        this.added = true;
      });
    }
  }
}
