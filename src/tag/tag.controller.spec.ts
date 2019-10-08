import {Model} from 'mongoose';
import {TagController} from './tag.controller';
import {TagService} from './tag.service';
import {Tag} from './interfaces/tag.interface';

describe('Tag Controller', () => {
    let tagController: TagController;
    let tagService: TagService;

    beforeEach(async () => {
        const tagModel = 0;
        tagService = new TagService(tagModel);
        tagController = new TagController(tagService);

    });

    describe('findAll', () => {
        it('should filter description field', async () => {
            const mockTags: Tag[] = [];
            const expectedTags: Tag[] = [];
            const tagFromDB = {
                name: 'foo',
                description: 'bar',
                createDate: new Date(),
                rgbColor: '#ffffff',
            };

            const tagToUser = {
                name: 'foo',
                createDate: new Date(),
                rgbColor: '#ffffff',
            };
            mockTags.push(tagFromDB);
            expectedTags.push(tagToUser);

            const findAllMock = jest.fn().mockImplementation(() => Promise.resolve(mockTags));
            jest.spyOn(tagService, 'findAll').mockImplementation(findAllMock);
            //when then
            expect(await tagController.getTags()).toEqual(expectedTags);
        });
    });
});
