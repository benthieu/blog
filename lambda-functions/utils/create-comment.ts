import {createClient} from 'contentful-management';
import {Environment} from 'contentful-management/typings/environment';
import {Space} from 'contentful-management/typings/space';

const client = createClient({
    accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_ACCESS_TOKEN
});

export function createComment(body: string, author: string, blogPostEntryId: string) {
    

    return client.getSpace(process.env.BLOG_CONTENTFUL_SPACE_ID)
        .then((space: Space) => space.getEnvironment('master'))
        .then((environment: Environment) => environment.createEntry('comment', {
            fields: {
                body: {
                    'en-US': body
                },
                author: {
                    'en-US': author
                },
                blogPostEntryId: {
                    'en-US': {
                        sys: {
                            type: 'Link',
                            linkType: 'Entry',
                            id: blogPostEntryId
                        }
                    }
                }
            }
        }));
}
