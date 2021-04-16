import conversations from '../services/conversations.service';
import messages from '../services/messages.service';

class ConversationController {
    async create(req, res) {
        try {
            const { body } = req;
            const  data = await conversations.create({
                title: body.title,
                botId: body.botId
            });
            const messageData = await messages.create({
                conversationId : data._id,
                messageBy : body.messageBy || 'User',
                message : body.title
            });
            res.json({
                conversation: data,
                messages: [messageData]
            });
        } catch (error) {
            res.json(error);
        }
    }

    async get(req, res) {
        try {
            const {params} = req;
            const data = await conversations.get(params.id);
            const messagesData = await messages.getByConversationId(params.id);
            res.json({
                conversation: data,
                messages: messagesData
            });
        } catch (error) {
            res.json(error);
        }
    }

    async delete(req, res) {
        try {
            const {params} = req;
            const isDeleted = await conversations.delete(params.id);
            if (isDeleted) await messages.deleteByConversationId(params.id);
            res.json(isDeleted);
        } catch (error) {
            res.json(error);
        }
    }

    async update(req, res) {
        try {
            const {params, body} = req;
            const data = await conversations.update(params.id, body);
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }
}

export default new ConversationController;