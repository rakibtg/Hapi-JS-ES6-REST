import bcrypt from 'bcrypt'
import validator from 'validator'
import User from '../../user/user.model'
import { makeToken } from '../../../utils/jwt'
import { r } from '../../../utils/responseUtility'

export const signIn = async ( req, res ) => {

  // User inputs.
  const userEmailOrUsername  = req.payload.userEmailOrUsername ? req.payload.userEmailOrUsername : ''
  const password  = req.payload.password ? req.payload.password : ''

  // Validate user inputs.
  if ( validator.isEmpty( userEmailOrUsername ))
    return res.response( r(0,422,'Username or email is required') ).code( 422 )
  if ( validator.isEmpty( password ))
    return res.response( r(0,422,'Password is required') ).code( 422 )
  if ( !validator.isByteLength( password, { min: 6, max: undefined } ))
    return res.response( r(0,422,'Password need to be more than 6 characters') ).code( 422 )

  // Fetch the user data.
  const _user = await User.byEmailOrUsername( userEmailOrUsername )

  // Check if the account exists.
  if ( _user === null ) return res.response( r(0,422,'No account was found!') )

  // Match the password.
  if ( !await bcrypt.compare( password, _user.password ) ) 
    return res.response( r(0,422,'Password was incorrect!') )
      .code( 422 )

  // Make JWT token.
  const token = await makeToken( {
    userName  : _user.userName,
    userID    : _user._id
  } )

  return res.response( r(1,200,token) )
    .type( 'application/json' )
    .code( 200 )

}