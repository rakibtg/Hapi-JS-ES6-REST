import mongoose from 'mongoose'

// Connect with MongoDB
mongoose.connect( 
  'mongodb://localhost:27017/hapi-diary',
  { useNewUrlParser: true } 
)

mongoose.connection.on( 'connected', () => {
  console.log( `📃 App is connected to mongo!` )
})

mongoose.connection.on( 'error', err => {
  console.log( `Error while connecting to mongo: ${err}` )
})

/*
Sample:
import User from './src/models/users.model'

server.route({
    path : '/api/companies',
    method: 'POST',
    handler: async ( req, res ) => {
        try {
            console.log('i am inside the try block')
            const savedUser = await User.addUser({
                name        : req.payload.name,
                userName    : req.payload.userName,
                email       : req.payload.email,
            })
            return res.response( savedUser )
                .type( 'application/json' )
                .code( 200 )
        } catch( err ) {
            console.log('i am inside the catch block')
            return res.response( err )
                .type( 'application/json' )
                .code( 400 )
        }
    }
})
*/