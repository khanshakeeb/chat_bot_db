// Schema for conversation
import mongoose from 'mongoose';
const { Schema } = mongoose;

const conversationSchema = Schema({
    title: { type: String, required: true },
    botId: { type: String,required: true, index: true },
},{timestamps: true});

export default mongoose.model('conversations', conversationSchema);