import mongoose from 'mongoose';
import server from './app';
import db from './lib/database';
import { normalizePort } from './utils';

db.connect();

const PORT = normalizePort(process.env.PORT || '3000');
server.listen(PORT, () => {
    console.log(`Application is running on ${process.env.NODE_ENV} at PORT# ${PORT}`);
});
