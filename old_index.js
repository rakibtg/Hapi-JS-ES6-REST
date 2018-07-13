`use strict`
const hapi = require( 'hapi' )

const server = hapi.server({
    port: 3500,
    host: 'localhost'
})

server.route({
    method  : 'GET',
    path    : '/',
    handler : ( req, h ) => {
        return 'Hello world'
    }
})

server.route({
    method  : 'GET',
    path    : '/{name}',
    handler : ( req, h ) => {
        return 'Hello ' + req.params.name + '!'
    }
})

const init = async() => {
    await server.start()
    console.log( `Server is running at: ${server.info.url}` )
}

process.on( `unhandledRejection`, err => {
    console.log( err )
    process.exit( 1 )
} )

// Start the app.
init()