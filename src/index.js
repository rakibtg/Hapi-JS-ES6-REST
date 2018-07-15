import './mongoConnection'
import hapi from 'hapi'
import routes from './routes'

const server = hapi.server({
    host: 'localhost',
    port: 3500,
    router: {
        stripTrailingSlash: true
    }
})

server.route( routes )

const init = async() => {
    await server.start()
    console.log( '💻 Server is running at: http://localhost:3500' )
}

// Start the app.
init()