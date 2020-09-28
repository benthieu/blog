import {Component, OnInit, OnDestroy} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {ContentfulService} from '../shared/contentful.service';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';

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

  constructor(
    private route: ActivatedRoute,
    private meta: Meta,
    private contentfulService: ContentfulService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.contentfulService.getBlogPostBySlug(params.slug).then(content => {
        this.blogEntryId = content.sys.id;
        this.blogEntry = content;
        this.meta.updateTag({property: 'og:title', content: content.fields.title + ' - Benjamin\'s Tech Blog'}, 'property="og:title"');
        this.meta.updateTag({property: 'og:description', content: content.fields.description}, 'property="og:description"');
        this.meta.updateTag({property: 'og:image', content: content.fields.heroImage.fields.file.url + '?fm=jpg&fl=progressive&fit=fill&w=1200&h=630'}, 'property="og:image"');
      }).catch(() => {
        this.loadingError = true;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
