import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/CreateTagDto';
import { Tag } from './interfaces/tag.interface';

@Injectable()
export class TagService {
    constructor(@Inject('TAG_MODEL') private readonly tagModel: Model<Tag>) {}

    async create(createTagDto: CreateTagDto): Promise<Tag> {
        const createdCat = new this.tagModel(createTagDto);
        return await createdCat.save();
    }

    async findAll(): Promise<Tag[]> {
        return await this.tagModel.find().exec();
    }
}
