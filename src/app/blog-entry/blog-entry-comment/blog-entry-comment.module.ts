import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {BlogEntryCommentComponent} from './blog-entry-comment.component';
import {NgxMdModule} from 'ngx-md';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgxMdModule,
        RecaptchaModule
    ],
    declarations: [BlogEntryCommentComponent],
    exports: [BlogEntryCommentComponent]
})
export class BlogEntryCommentModule {
}
