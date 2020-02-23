import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlogEntryComponent} from './blog-entry.component';
import {BlogEntryRoutingModule} from './blog-entry-routing.module';
import {NgxMdModule} from 'ngx-md';

@NgModule({
  imports: [
    CommonModule,
    BlogEntryRoutingModule,
    NgxMdModule
  ],
  declarations: [BlogEntryComponent]
})
export class BlogEntryModule {
}
