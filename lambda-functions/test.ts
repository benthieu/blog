const emoji = [
    {
        codepoint: [0x1f600],
        description: 'grinning face',
    },
    {
        codepoint: [0x1f603],
        description: 'grinning face with big eyes',
    },
    {
        codepoint: [0x1f604],
        description: 'grinning face with smiling eyes',
    },
    {
        codepoint: [0x1f601],
        description: 'beaming face with smiling eyes',
    },
    {
        codepoint: [0x1f606],
        description: 'grinning squinting face',
    },
    {
        codepoint: [0x1f605],
        description: 'grinning face with sweat',
    }
];

function sample(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function handler(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: JSON.stringify(sample(emoji)),
    });
}
