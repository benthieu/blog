import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContentfulService} from '../../shared/contentful.service';

@Injectable({
  providedIn: 'root'
})
export class BlogEntryCommentService {

  constructor(private httpClient: HttpClient,
              private contentfulService: ContentfulService) {}

  public addComment(author: string, email: string, body: string, blogPostEntryId: string, captcha: string): Observable<any> {
    const requestPayload = {
      author,
      email,
      body,
      captcha,
      blogPostEntryId
    };
    return this.httpClient.post<any>(
      `https://blog.benjamin-mathieu.ch/.netlify/functions/create-comment`,
      JSON.stringify(requestPayload)
    );
  }

  public async getComments(blogPostEntryId: string): Promise<Array<any>> {
    return this.contentfulService.getBlogComments(blogPostEntryId);
  }
}
