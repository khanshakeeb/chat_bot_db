import conversations from '../services/conversations.service';
import messages from '../services/messages.service';
import {STATUS_CODE, APP_CONST} from '../utils';

class ConversationController {
    async create(req, res) {
        try {
            const {body} = req;
            const data = await conversations.create({
                title: body.title,
                botId: body.botId
            });
            const messageData = await messages.create({
                conversationId: data._id,
                messageBy: body.messageBy || APP_CONST.MESSAGE_BY_HUMAN,
                message: body.title
            });
            res.json({
                conversation: data,
                messages: [messageData]
            }, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST);
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
            }, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST);
        }
    }

    async delete(req, res) {
        try {
            const {params} = req;
            const isDeleted = await conversations.delete(params.id);
            if (isDeleted) await messages.deleteByConversationId(params.id);
            res.json(isDeleted, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST);
        }
    }

    async update(req, res) {
        try {
            const {params, body} = req;
            const data = await conversations.update(params.id, body);
            res.json(data, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST);
        }
    }
}

export default new ConversationController;