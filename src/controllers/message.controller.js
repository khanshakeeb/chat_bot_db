import messages from '../services/messages.service';

class MessageController {
    async create(req, res) {
        const { body } = req;
        const data =  await messages.create(body);
        res.json(data);
    }

    async get(req, res) {
        const { params } = req;
        const data =  await messages.get(params.id);
        res.json(data);
    }

    async delete(req, res) {
        const { params } = req;
        const data =  await messages.delete(params.id);
        res.json(data);
    }

    async update(req, res){
        const { params, body } = req;
        const data =  await messages.update(params.id, body);
        res.json(data);
    }
}

export default new MessageController;