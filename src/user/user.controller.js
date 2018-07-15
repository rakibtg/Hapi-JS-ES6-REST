import User from './user.model'

export const users = async ( req, res ) => {

  try {
    const userLists = await User.find()
    return res.response( userLists )
      .type( 'application/json' )
      .code( 200 )
  } catch( e ) {

    return res.response( { 'message': 'Error occured' } )
      .type( 'application/json' )
      .code( 422 )
  }

}