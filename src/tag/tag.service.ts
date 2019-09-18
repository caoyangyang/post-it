import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/CreateTagDto';
import { Tag } from './interfaces/tag.interface';

@Injectable()
export class TagService {
    constructor(@Inject('TAG_MODEL') private readonly tagModel: Model<Tag>) {}

    async create(createTagDto: CreateTagDto): Promise<Tag> {
        const createdTag = new this.tagModel(createTagDto);
        createdTag.createDate = new Date();
        return await createdTag.save();
    }

    async findAll(): Promise<Tag[]> {
        return await this.tagModel.find().exec();
    }
}
