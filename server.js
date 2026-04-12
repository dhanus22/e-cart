import jsonServer from 'json-server'

const server = jsonServer.create()
const router = jsonServer.router('src/Db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 3006
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`)
})