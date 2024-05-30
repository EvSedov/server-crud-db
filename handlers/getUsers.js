const stor = require('../sorage/sqlite3');

module.exports = (_, res) => {
  res.writeHead(200);
  res.end(JSON.stringify({ message: stor.getUsers() }));
};
