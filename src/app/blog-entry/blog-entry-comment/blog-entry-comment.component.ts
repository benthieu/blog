import {Component, OnInit} from '@angular/core';

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

  constructor() {}

  ngOnInit() {
  }

  public onSubmit() {
    this.submitted = true;
  }

  resolvedCaptcha(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
