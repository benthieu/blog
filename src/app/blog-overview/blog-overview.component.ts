import { Component, OnInit } from '@angular/core';
import {ContentfulService} from '../shared/contentful.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit {
  blogPosts = Array<any>();
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getBlogPosts().then(content => {
      console.log(content);
      this.blogPosts = content;
    });
  }
}
