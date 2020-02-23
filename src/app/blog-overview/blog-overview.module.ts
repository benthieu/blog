import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BlogOverviewComponent} from './blog-overview.component';
import {RouterModule} from '@angular/router';
import {BlogOverviewRoutingModule} from './blog-overview-routing.module';
import {NgxMdModule} from 'ngx-md';

@NgModule({
  imports: [
    CommonModule,
    BlogOverviewRoutingModule,
    NgxMdModule
  ],
  declarations: [BlogOverviewComponent]
})
export class BlogOverviewModule {
}
