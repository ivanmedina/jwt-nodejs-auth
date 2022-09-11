import {Schema, model} from 'mongoose'

export const ROLES = ["user","admin","moderator"]

const roleShcema = new Schema({
    name: String
},{
    versionKey: false
})

export default model('Role',roleShcema)