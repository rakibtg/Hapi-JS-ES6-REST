import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
  name: {
    type        : String,
    required    : true,
    index       : true,
  },
  userName: {
    type        : String,
    required    : true,
    unique      : true,
    index       : true,
    set         : str => str.toLowerCase()
  },
  email: {
    type        : String,
    required    : true,
    unique      : true,
    index       : true,
  },
  password: {
    type        : String,
    required    : true,
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

// Check if an user is unique.
UsersModel.isUnique = async ( email, userName ) => {
  const _user = await UsersModel.findOne({
    $or: [
      { email },
      { userName },
    ],
  })
  return _user === null
}

// Get user by email or username.
UsersModel.byEmailOrUsername = async ( emailOrUserName ) => {
  const _user = await UsersModel.findOne({
    $or: [
      { email: emailOrUserName },
      { userName: emailOrUserName },
    ],
  })
  return _user
}

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