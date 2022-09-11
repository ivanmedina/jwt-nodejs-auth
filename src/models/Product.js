import {Schema, model} from 'mongoose'

const productShcema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
},{
    timestamps: true,
    versionKey: false
})

export default model('Product',productShcema)