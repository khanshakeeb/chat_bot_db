import MessageModel from '../models/message.model';

class MessagesService {
    constructor(model) {
        this.model = model;
    }

    async get(_id) {
        return await this.model.findOne({_id});
    }

    async create(data) {
        try {
            return await this.model.create(data);
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

    async deleteByConversationId(conversationId) {
        try{
            return await this.model.remove({conversationId});
        }catch (error) {
            console.log(error);
        }
    }

    async getByConversationId (conversationId) {
        try{
            return await this.model.find({conversationId}).exec();
        }catch (error) {
            console.log(error);
        }
    }
}

export default new MessagesService(MessageModel);