const url = require('url');

const routeHandler = (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;

  if (path == '/users' || path.startsWith('/users/')) {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'All good!!!' }));
  } else {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(400);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = routeHandler;
