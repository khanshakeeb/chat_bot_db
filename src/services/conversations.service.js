import ConversationModel from '../models/conversation.model';

class ConversationsService {
    constructor(model) {
        this.model = model;
    }

    async get(_id) {
        return await this.model.findOne({_id});
    }

    async create(data) {
        try {
            const conversation = new this.model(data);
            return await conversation.save();
        } catch (error) {
            console.log(error);
        }
    }

    async update(_id, data) {
        try {
            return await this.model.update({_id}, data);
        } catch (error) {
            console.log(error);
        }
    }

    async delete(_id) {
        try {
            return await this.model.remove({_id});
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ConversationsService(ConversationModel);