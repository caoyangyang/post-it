import * as mongoose from 'mongoose';

export const TagSchema = new mongoose.Schema({
    name: String,
    description: String,
    createDate: Date,
    rgbColor: String,
});
