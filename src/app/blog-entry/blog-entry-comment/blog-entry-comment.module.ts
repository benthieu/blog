import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {BlogEntryCommentComponent} from './blog-entry-comment.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RecaptchaModule
    ],
    declarations: [BlogEntryCommentComponent],
    exports: [BlogEntryCommentComponent]
})
export class BlogEntryCommentModule {
}
