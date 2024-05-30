const url = require('url');
const usersRoutes = require('./usersRoutes/usersRoutes');

const routeHandler = (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;

  if (path == '/users' || path.startsWith('/users/')) {
    usersRoutes(req, res);
  } else {
    res.setHeader('Content-type', 'application/json');
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = routeHandler;
