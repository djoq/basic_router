const {detector} = require('./detector');

module.exports = (server, req, res) => {
  server.on('request', (req,res) => {
    res.statusCode = 200
    console.log( detector )
    res.write(JSON.stringify({ some: 'data' }));
    return res.end();
  });
}
 
