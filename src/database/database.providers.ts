import * as mongoose from 'mongoose';
import {ConfigService} from '../config/config.service';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService: ConfigService): Promise<typeof mongoose> =>{
            return await mongoose.connect(configService.get('MONGODB_URL'));
        },
        inject: ['ConfigService'],
    },
];
