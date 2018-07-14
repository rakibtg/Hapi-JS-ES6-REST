import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: {
        type        : String,
        required    : true,
        index       : true
    },
    userName: {
        type        : String,
        required    : true,
        unique      : true,
        index       : true,
    },
    email: {
        type        : String,
        required    : true,
        unique      : true,
        index       : true,
    },
    createdAt: {
        type        : Date,
        default     : Date.now,
    }
}, {
    collection: 'User'
})

let UsersModel = mongoose.model( 'User', UserSchema )

// Get all users.
UsersModel.getAll = () => (
    UsersModel.find({})
)

// Add a new usre.
UsersModel.addUser = user => (
    UsersModel( user )
        .save()
)

// Delete a user.
UsersModel.removeUser = userName => (
    UsersModel.remove({ userName: userName })
)

export default UsersModel