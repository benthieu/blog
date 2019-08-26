import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentfulService} from '../shared/contentful.service';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss']
})
export class BlogEntryComponent implements OnInit, OnDestroy {
  private sub: any;
  private blogEntryId: string;
  loadingError = false;
  blogEntry: any;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.contentfulService.getBlogPost(params.id).then(content => {
        console.log(content);
        this.blogEntry = content;
      }).catch(() => {
        this.loadingError = true;
      });
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
