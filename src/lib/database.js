import mongoose from 'mongoose';
import configurations from '../../config';

class Connection {
    constructor(config) {
        console.log(config);
        const {url} = config;
        this.connectionString = url;
    }

    async connect() {
        try {
            return await mongoose.connect(this.connectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        } catch (error) {
            console.log(error);
        }
    }

    async disconnect() {
        return await mongoose.disconnect();
    }
}

export default new Connection(configurations.get('database'));