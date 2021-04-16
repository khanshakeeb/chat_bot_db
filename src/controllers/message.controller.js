import messages from '../services/messages.service';
import {STATUS_CODE} from "../utils";

class MessageController {
    async create(req, res) {
        try {
            const {body} = req;
            const data = await messages.create(body);
            res.json(data, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST)
        }
    }

    async get(req, res) {
        try {
            const {params} = req;
            const data = await messages.get(params.id);
            res.json(data, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST)
        }
    }

    async delete(req, res) {
        try {
            const {params} = req;
            const data = await messages.delete(params.id);
            res.json(data, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST)
        }

    }

    async update(req, res) {
        try {
            const {params, body} = req;
            const data = await messages.update(params.id, body);
            res.json(data, STATUS_CODE.SUCCESS);
        } catch (error) {
            res.json(error, STATUS_CODE.BAD_REQUEST);
        }
    }
}

export default new MessageController;