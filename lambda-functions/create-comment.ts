import {createComment} from './utils/create-comment';
const axios = require('axios').default;
// from https://github.com/shaunpersad/authless-comments-example

export function handler(event, context, callback) {
    const {author, email, body, captcha, blogPostEntryId} = JSON.parse(event.body);
    // verify the result by POSTing to google backend with secret and
    // frontend recaptcha token as payload
    axios.post(`https://www.google.com/recaptcha/api/siteverify`, {
        secret: process.env.SITE_RECAPTCHA_SECRET,
        response: captcha
    }).then((result => {
        if (result.success) {
            createComment(body, email, author, blogPostEntryId)
                .then(entry => callback(null, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    statusCode: 200,
                    body: JSON.stringify({message: 'OK'})
                }))
                .catch(callback);
        } else {
            callback(null, {
                headers: {
                    'Content-Type': 'application/json'
                },
                statusCode: 200,
                body: JSON.stringify({message: 'FAIL'})
            });
        }
    }));
}
