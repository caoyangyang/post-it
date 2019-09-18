import { Connection } from 'mongoose';
import { TagSchema } from './schema/tag.schema';

export const tagProviders = [
    {
        provide: 'TAG_MODEL',
        useFactory: (connection: Connection) => connection.model('Tag', TagSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];