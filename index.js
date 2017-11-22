const fs = require('fs');

const path = require('path');

const http = require('http');

const PORT = 4000;

handle = function(e) {
  console.log('we had an error ->', e)
  return;
};

// staticBasePath = './public';


i = 5;



server = http.createServer();

server.listen(PORT, () => {
  console.log('[SERVER] listening on port ' + PORT);
  return
});

require('./routes')(server)
// plotql.use(server, MONGODB_URI);


exports = module.exports = server;
