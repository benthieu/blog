import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlogEntryCommentComponent} from './blog-entry-comment.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [BlogEntryCommentComponent],
    exports: [BlogEntryCommentComponent]
})
export class BlogEntryCommentModule {
}
