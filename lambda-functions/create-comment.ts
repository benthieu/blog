import axios from 'axios';
import {createClient} from 'contentful-management';
import {Environment} from 'contentful-management/dist/typings/entities/environment';
import {Space} from 'contentful-management/dist/typings/entities/space';
import 'core-js/stable';
import regeneratorRuntime from 'regenerator-runtime';
// from https://github.com/shaunpersad/authless-comments-example

const client = createClient({
    accessToken: process.env.CONTENTFUL_CONTENT_MANAGEMENT_ACCESS_TOKEN
});

export function handler(event, context, callback) {
    const r = regeneratorRuntime;
    const {author, email, body, captcha, blogPostEntryId} = JSON.parse(event.body);
    // verify the result by POSTing to google backend with secret and
    // frontend recaptcha token as payload
    axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SITE_RECAPTCHA_SECRET}&response=${captcha}`,
        {},
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
        }).then((result => {
            if (result.data.success) {
                createComment(body, email, author, blogPostEntryId)
                    .then(() => callback(null, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        statusCode: 200,
                        body: JSON.stringify({message: 'OK'})
                    }));
            }
        }));
}

export function createComment(body: string, email: string, author: string, blogPostEntryId: string) {
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
                email: {
                    'en-US': email
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
