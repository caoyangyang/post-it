import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: ConfigService,
            useValue: new ConfigService(`src/config/${process.env.NODE_ENV || 'development'}.env`),
        },
    ],
    exports: [ConfigService],
})
export class ConfigModule {}
