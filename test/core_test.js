
const chai = require('chai')
const chaiHttp = require('chai-http')
let server = require('../index')

let should = chai.should()
chai.use(chaiHttp)

describe('Setup the API', function() {
  return describe('Checking the /core endpoint', () => {
    it('Someone can query for core information', (done) => {
      chai.request(server).get('/').end((err, res) => {
        res.should.have.status(200);
        JSON.parse(res.text).should.have.keys('some');
        console.log("Login response ->", res);
        done();
      });
    });
  });
});