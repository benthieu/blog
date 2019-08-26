import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { createClient, Entry } from 'contentful';
import {environment} from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private cdaClient = createClient({
    space: environment.contentful.space,
    accessToken: environment.contentful.accessToken
  });

  constructor() { }

  getBlogPost(id: string, query?: object): Promise<Entry<any>> {
    return this.cdaClient.getEntry(id, Object.assign({
      content_type: environment.contentful.contentTypeIds.blogPost
    }, query))
    .then(res => {
      return res;
    });
  }

  getBlogPosts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: environment.contentful.contentTypeIds.blogPost,
      order: '-sys.createdAt'
    }, query))
    .then(res => {
      return res.items.map(entry => {
        const imageLink = (entry.fields as any).heroImage;
        if (imageLink) {
          (entry.fields as any).image = res.includes.Asset.find(image => image.sys.id === imageLink.sys.id);
        }
        return entry;
      });
    });
  }
}
