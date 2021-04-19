/* Express App */
var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var compression = require('compression')

/* My express App */
export default function expressApp (functionName) {
  const app = express()
  const router = express.Router()

  // gzip responses
  router.use(compression())

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`

  /* define routes */
  router.get('/', (req, res) => {
    const html = `
    <html>
      <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <style>
          body {
            padding: 30px;
          }
        </style>
      </head>
      <body>
        <h1>Express via '${functionName}' ⊂◉‿◉つ</h1>
        <p classs="text-success">I'm using Express running via a <a href='https://www.netlify.com/docs/functions/' target='_blank'>Netlify Function</a>.</p>
        <p>Choose a route:</p>
        <div>
          <a href='/.netlify/functions/${functionName}/users'>View /users route</a>
        </div>
        <div>
          <a href='/.netlify/functions/${functionName}/hello'>View /hello route</a>
        </div>
        <br/>
        <br/>
        <div>
          <a href='/'>
            Go back to demo homepage
          </a>
        </div>
        <br/>
        <br/>
        <div>
          <a href='https://github.com/DavidWells/netlify-functions-express' target='_blank'>
            See the source code on github
          </a>
        </div>
      </body>
    </html>
  `
    res.send(html)
  })

  router.get('/users', (req, res) => {
    res.json({
      users: [
        {
          name: 'steve'
        },
        {
          name: 'joe'
        }
      ]
    })
  })

  router.get('/hello/', function (req, res) {
    res.send('hello world')
  })

  // Attach logger

  // Setup routes
  app.use(routerBasePath, router)

  // Apply express middlewares
  router.use(cors())
  router.use(bodyParser.json())
  router.use(bodyParser.urlencoded({ extended: true }))

  return app
}
