import conversation from '../services/conversations.service';
import message from '../services/messages.service';

class ConversationController {
    async create(req, res) {
        try {
            const {body} = req;
            const data = await conversation.create(body);
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }

    async get(req, res) {
        try {
            const {params} = req;
            const data = await conversation.get(params.id);
            const messages = await message.getByConversationId(params.id) || [];
            res.json({
                conversation: data,
                messages
            });
        } catch (error) {
            res.json(error);
        }
    }

    async delete(req, res) {
        try {
            const {params} = req;
            const isDeleted = await conversation.delete(params.id);
            if (isDeleted) await message.deleteByConversationId(params.id);
            res.json(isDeleted);
        } catch (error) {
            res.json(error);
        }
    }

    async update(req, res) {
        try {
            const {params, body} = req;
            const data = await conversation.update(params.id, body);
            res.json(data);
        } catch (error) {
            res.json(error);
        }
    }
}

export default new ConversationController;