import { Schema, model } from 'mongoose';

export interface Food{
    id: string;
    name: string;
    ingredients: string;
    price: number;
    imageUrl: string;
    meat: boolean;
    tag: string;
}

export const FoodSchema = new Schema<Food>(
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

export const FoodModel = model<Food>('food', FoodSchema);