import { Schema, model } from 'mongoose';

export interface Item{
    id: string;
    name: string;
    ingredients: string;
    price: number;
    imageUrl: string;
    meat: boolean;
    tag: string;
}

export const ItemSchema = new Schema<Item>(
    {
        name: {type: String, required: true},
        ingredients: {type: String},
        price: {type: Number, required: true},
        imageUrl: {type: String, required: true},
        meat: {type: Boolean, default: true},
        tag: {type: String}
    },
    {
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps: true
    }
);

export const ItemModel = model<Item>('item', ItemSchema);