import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phoneNo: {
        type: String,
        required: true
    },

    salary: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export const User = mongoose.model('User', userSchema)