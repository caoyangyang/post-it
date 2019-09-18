import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { Tag } from '../interfaces/tag.interface';
import {CreateTagDto} from './dto/CreateTagDto';

@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    @Get()
    async getTags(): Promise<Tag[]> {
        return this.tagService.findAll();
    }

    @Post()
    async create(@Body() createTagDto: CreateTagDto) {
        this.tagService.create(createTagDto);
    }
}
