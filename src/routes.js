import conversationController from './controllers/conversation.controller';
import messageController from './controllers/message.controller';

export default (app)=>{
    app.get('/',(req, res)=>{
        res.json({
            text: 'Rest API server is running...'
        })
    });

    app.get('/api/v1/conversation/:id',conversationController.get);
    app.post('/api/v1/conversation',conversationController.create);
    app.delete('/api/v1/conversation/:id',conversationController.delete);
    app.put('/api/v1/conversation/:id',conversationController.update);

    app.get('/api/v1/message/:id',messageController.get);
    app.post('/api/v1/message',messageController.create);
    app.delete('/api/v1/message/:id',messageController.delete);
    app.put('/api/v1/message/:id',messageController.update);
};