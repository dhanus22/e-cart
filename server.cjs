const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('Db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3006
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`)
})