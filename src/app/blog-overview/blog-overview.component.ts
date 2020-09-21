import { Component, OnInit } from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {ContentfulService} from '../shared/contentful.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit {
  blogPosts = Array<any>();
  loadingError = false;
  constructor(private contentfulService: ContentfulService,
    private meta: Meta) { }

  ngOnInit() {
    this.meta.updateTag({property: 'og:title', content: 'Benjamin\'s Tech Blog'}, 'property="og:title"');
    this.meta.updateTag({property: 'og:description', content: 'My tech blog - things I discover, build or fix.'}, 'property="og:description"');
    this.meta.updateTag({property: 'og:image', content: 'https://blog.benjamin-mathieu.ch/assets/og.jpg'}, 'property="og:image"');

    this.contentfulService.getBlogPosts().then(content => {
      this.blogPosts = content;
    }).catch(() => {
      this.loadingError = true;
    });
  }
}
