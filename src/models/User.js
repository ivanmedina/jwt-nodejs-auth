import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userShcema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }]
},{
    timestamps: true,
    versionKey: false
})

userShcema.statics.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userShcema.statics.comparedPassword = async (password, recivedPassword) =>{
    return await bcrypt.compare(password,recivedPassword)
}

export default model('User',userShcema)