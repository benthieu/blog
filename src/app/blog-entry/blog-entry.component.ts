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
  public blogEntryId: string;
  loadingError = false;
  blogEntry: any;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.contentfulService.getBlogPostBySlug(params.slug).then(content => {
        this.blogEntryId = params.id;
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
