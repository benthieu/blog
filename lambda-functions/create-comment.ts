import {createComment} from './utils/create-comment';

// from https://github.com/shaunpersad/authless-comments-example

export default function handler(event, context, callback) {
    const {body, author, blogPostEntryId} = JSON.parse(event.body);

    createComment(body, author, blogPostEntryId)
        .then(entry => callback(null, {
            headers: {
                'Content-Type': 'application/json'
            },
            statusCode: 200,
            body: JSON.stringify({message: 'OK', entry: JSON.stringify(entry)})
        }))
        .catch(callback);
};
