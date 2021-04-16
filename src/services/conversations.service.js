import ConversationModel from '../models/conversation.model';

class ConversationsService {
    constructor(model) {
        this.model = model;
    }

    async get(_id) {
        return await this.model.findOne({_id});
    }

    async create(data) {
        const conversation = new this.model(data);
        return await conversation.save();
    }

    async update(_id, data) {
        return await this.model.update({_id}, data);
    }

    async delete(_id) {
        return await this.model.remove({_id});
    }
}

export default new ConversationsService(ConversationModel);