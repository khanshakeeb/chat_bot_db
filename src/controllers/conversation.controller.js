import conversation from '../services/conversations.service';

class ConversationController {
    async create(req, res) {
       const { body } = req;
        const data =  await conversation.create(body);
        res.json(data);
    }

    async get(req, res) {
        const { params } = req;
        const data =  await conversation.get(params.id);
        res.json(data);
    }

    async delete(req, res) {
        const { params } = req;
        const data =  await conversation.delete(params.id);
        res.json(data);
    }

     async update(req, res){
        const { params, body } = req;
        const data =  await conversation.update(params.id, body);
        res.json(data);
    }
}

export default new ConversationController;