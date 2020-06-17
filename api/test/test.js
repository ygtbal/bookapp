import chai from 'chai';
import chatHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';

chai.use(chatHttp);
const { expect } = chai;

describe('Testing the book endpoints:', () => {
  it('It should create a book', (done) => {
    const book = {
      title: 'test book one',
    };
    chai.request(app)
      .post('/v1/books/add')
      .set('Accept', 'application/json')
      .send(book)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({
          type: true,
          message: ''
        });
        done();
      });
    });
    it('It should get all books', (done) => {
      chai.request(app)
      .get('/v1/books/get')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('title');
        done();
      });
    });
});