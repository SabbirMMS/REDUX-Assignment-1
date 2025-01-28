// eslint-disable-next-line no-undef
const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
server.use(middlewares)

// Custom route to handle array filtering
server.get('/videos', (req, res) => {
  const db = router.db
  const tagsQuery = req.query.tags
  let videos = db.get('videos').value()

  if (tagsQuery) {
    // Filter videos that have 'tagsQuery' in their tags array
    videos = videos.filter(video => video.tags && video.tags.includes(tagsQuery))
  }

  res.jsonp(videos)
})

server.use(router)
server.listen(9000, () => {
  console.log('JSON Server is running')
})
