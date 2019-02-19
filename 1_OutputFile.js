const http = require('http')
var fs = require('fs')
const port = 3001

const requestHandler = (request, response) => {
  console.log(request.url)
  fs.readFile('someFile.txt', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write(data)
  response.end('Hello Node.js Server!')
  })
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Not available', err)
  }

  console.log(`server is listening on ${port}`)
})