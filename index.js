import hapi from 'hapi'
import mongoose from 'mongoose'

const server    = hapi.server({
    port: 3500,
    host: 'localhost'
})

// Connect with MongoDB
mongoose.connect( 'mongodb://localhost/hapi-diary' )

mongoose.connection.on( 'connected', () => {
    console.log( `app is connected to mongo!` )
} )
mongoose.connection.on( 'error', err => {
    console.log( `Error while connecting to mongo: ${err}` )
} )

server.route({
    method  : 'GET',
    path    : '/',
    handler : ( req, h ) => {
        return 'Hello world'
    }
})





const Company = require( './src/models/company.model' )
server.route({
    path: '/api/companies',
    method: 'POST',
    handler: ( req, res ) => {
        Company.create({
            name        : req.payload.name,
            city        : req.payload.city,
            address     : req.payload.address,
        }).then(( res ) => {
            return res.response( res )
        }).catch( err => {
            return res( err ).code( 500 )
        })
        // return true
    }
})







const init = async() => {
    await server.start()
    console.log( `Server is running at: http://localhost:3500` )
}

// Start the app.
init()