import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ContentfulService} from './shared/contentful.service';
import { BlogOverviewComponent } from './blog-overview/blog-overview.component';
import { NgxMdModule } from 'ngx-md';
import {HttpClientModule} from '@angular/common/http';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogOverviewComponent,
    BlogEntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxMdModule.forRoot(),
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
