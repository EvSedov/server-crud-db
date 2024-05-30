const http = require('http');
const router = require('./routes/router');

const server = http.createServer(router);

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server started on PORT', PORT);
});
