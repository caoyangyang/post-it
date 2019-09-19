import * as mongoose from 'mongoose';
import {ConfigService} from '../config/config.service';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService: ConfigService): Promise<typeof mongoose> =>{
            const mongodburl = configService.get('MONGODB_URL');
            return await mongoose.connect('mongodb://127.0.0.1:27017/post-it');
        },
        inject: ['ConfigService'],
    },
];
