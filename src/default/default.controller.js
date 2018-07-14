export const welcome = ( req, res ) => {

  return res.response({ message: 'Welcome! Your app is up.' })
    .type( 'application/json' )
    .code( 200 )

}