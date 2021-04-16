// Schema for storing message against each conversation _id
import mongoose from 'mongoose'
const { Schema } = mongoose;

const messageSchema = Schema({
    conversationId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true
    },
    messageBy: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    intents: [
        {
            confidence: String,
            name: String
        }
    ]
},{timestamps: true});

export default mongoose.model('messages', messageSchema);