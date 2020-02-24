import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgxMdModule} from 'ngx-md';
import {BlogEntryRoutingModule} from './blog-entry-routing.module';
import {BlogEntryComponent} from './blog-entry.component';
import {BlogEntryCommentComponent} from './blog-entry-comment/blog-entry-comment.component';
import {BlogEntryCommentModule} from './blog-entry-comment/blog-entry-comment.module';

@NgModule({
  imports: [
    CommonModule,
    BlogEntryRoutingModule,
    NgxMdModule,
    BlogEntryCommentModule
  ],
  declarations: [BlogEntryComponent]
})
export class BlogEntryModule {
}
