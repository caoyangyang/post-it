import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/CreateTagDto';
import { Tag } from './interfaces/tag.interface';
import * as _ from 'lodash';

@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Get()
    async getTags(): Promise<Tag[]> {
         return this.tagService.findAll().then(data =>
             data.map(dataInDb => _.pick(dataInDb, ['name', 'rgbColor', 'createDate'])));
    }

    @Post()
    async create(@Body() createTagDto: CreateTagDto) {
        this.tagService.create(createTagDto);
    }
}
