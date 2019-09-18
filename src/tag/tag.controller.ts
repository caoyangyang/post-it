import { Body, Controller, Get, Post } from '@nestjs/common';
import { TagService } from './tag.service';
import { CreateTagDto } from './dto/CreateTagDto';
import { Tag } from './interfaces/tag.interface';

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
