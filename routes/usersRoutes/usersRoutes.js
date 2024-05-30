const url = require('node:url');

const usersRoutes = (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parseUrl.pathname;

  res.setHeader('Content-type', 'application/json');

  if (path === '/users' && method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'GET /users' }));
  } else if (path === '/users' && method === 'POST') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'POST /users' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = usersRoutes;