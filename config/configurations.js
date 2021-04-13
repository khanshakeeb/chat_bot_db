export default {
    development: {
        database: {
            url: 'mongodb://localhost:27020/chat_bot'
        }
    },
    production: {
        database: {
           url:'mongodb://localhost:27020/chat_bot'
        }
    },
    testing: {
        database: {
           url: 'mongodb://localhost:27020/test'
        }
    }
};