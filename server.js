const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/search/:q/:n', (req, res) => {
    const actualPage = '/search'
    const queryParams = { baseUrl: 'search', n: req.params.n, q: req.params.q }
    app.render(req, res, actualPage, queryParams)
  })
  server.get('/search/:n', (req, res) => {
    const actualPage = '/search'
    const queryParams = { baseUrl: 'search', n: req.params.n, q: req.query.q }
    app.render(req, res, actualPage, queryParams)
  })
  server.get('/search', (req, res) => {
    const actualPage = '/search'
    const queryParams = { baseUrl: 'search', n: 0, q: req.query.q }
    app.render(req, res, actualPage, queryParams)
  })
  server.get('/trending/:n', (req, res) => {
    const actualPage = '/'
    const queryParams = { baseUrl: 'trending', n: req.params.n }
    app.render(req, res, actualPage, queryParams)
  })
  server.get('/:n', (req, res) => {
    const actualPage = '/'
    const queryParams = { baseUrl: 'trending', n: req.params.n }
    app.render(req, res, actualPage, queryParams)
  })
  server.get('*', (req, res) => {
    const actualPage = '/'
    const queryParams = { baseUrl: 'trending', n: 0 }
    app.render(req, res, actualPage, queryParams)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
