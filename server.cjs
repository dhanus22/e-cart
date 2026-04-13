const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'Db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3006
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`)
})