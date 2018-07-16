import bcrypt from 'bcrypt'
import validator from 'validator'
import User from '../../user/user.model'
import { r } from '../../../utils/responseUtility'

export const signUp = async ( req, res ) => {

  // User inputs.
  const name      = req.payload.name ? req.payload.name : ''
  const userName  = req.payload.userName ? req.payload.userName : ''
  const email     = req.payload.email ? req.payload.email : ''
  const password  = req.payload.password ? req.payload.password : ''

  // Validate user inputs.
  if ( validator.isEmpty( name )) return res.response( r( 0, 422, 'Name is required' ) ).code( 422 )
  if ( validator.isEmpty( userName )) return res.response( r(0,422,'Username is required') ).code( 422 )
  if ( validator.isEmpty( email )) return res.response( r(0,422,'Email is required') ).code( 422 )
  if ( !validator.isEmail( email )) return res.response( r(0,422,'Valid email is required') ).code( 422 )
  if ( validator.isEmpty( password )) return res.response( r(0,422,'Password is required') ).code( 422 )
  if ( !validator.isByteLength( password, { min: 6, max: undefined } )) return res.response( r(0,422,'Password need to be more than 6 characters') ).code( 422 )

  // Check if user is unique.
  if ( ! await User.isUnique( email, userName ) ) {
    return res.response( r( 0, 422, 'Username or email is not unique' ) )
  }
  
  // Passowrd hash generate.
  const passwordHash = await bcrypt.hash( password, 10 )

  // Insert data to database.
  const savedUser = await User.addUser({
    name        : name,
    userName    : userName,
    email       : email,
    password    : passwordHash
  })

  // Response with the user data.
  return res.response( savedUser )
    .type( 'application/json' )
    .code( 200 )

}