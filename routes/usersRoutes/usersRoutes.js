const url = require('node:url');
const getUsers = require('../../handlers/getUsers');

const usersRoutes = (req, res) => {
  const parseUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parseUrl.pathname;

  res.setHeader('Content-type', 'application/json');

  if (path === '/users' && method === 'GET') {
    getUsers(req, res);
  } else if (path === '/users' && method === 'POST') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'POST /users' }));
  } else if (path.startsWith('/users/') && method === 'GET') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'GET /users/:id' }));
  } else if (path.startsWith('/users/') && method === 'PUT') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'PUT /users/:id' }));
  } else if (path.startsWith('/users/') && method === 'DELETE') {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'DELETE /users/:id' }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
};

module.exports = usersRoutes;