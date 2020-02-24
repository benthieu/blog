import {createComment} from './utils/create-comment';
const axios = require('axios').default;
// from https://github.com/shaunpersad/authless-comments-example

export function handler(event, context, callback) {
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
