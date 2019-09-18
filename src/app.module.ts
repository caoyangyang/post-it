import { Module } from '@nestjs/common';
import { TagService } from './tag/tag.service';
import { TagController } from './tag/tag.controller';

@Module({
  imports: [],
  controllers: [ TagController],
  providers: [ TagService],
})
export class AppModule {}
