import chai from 'chai';
import chaiHttp from 'chai-http';
import database from '../src/lib/database';
import app from '../src/app';

chai.use(chaiHttp);
chai.should();

before(function (done) {
    database.connect().then(()=> done()).catch((error)=> done(error));
});

after(function(done ){
    database.disconnect().then(()=> done()).catch((error)=> done(error));
});

describe('Check if server is running', ()=>{
   it('Ok,check if route has been initialized', (done)=>{
       chai.request(app).get('/')
           .end((error,response)=>{
              response.should.have.status(200);
              done();
           });
   });
});

describe('Check for conversation CRUD', ()=>{

    it('Check conversation required fields', (done)=>{
        const data = {}
        chai.request(app).post('/api/v1/conversation')
            .send(data)
            .end((error,response)=>{
                response.should.have.status(400);
                response.body.should.have.be.a('object');
                response.body.should.have.property('name').to.eq('ValidationError');
                done();
            });
    });

    it('Create conversation record 1', (done)=>{
        const data = {
            title: "this is new conversation",
            botId: "86aa71cf31c9dc05fd95e5sss",
            messageBy: "User"
        }
        chai.request(app).post('/api/v1/conversation')
            .send(data)
            .end((error,response)=>{
                response.should.have.status(200);
                response.body.should.have.be.a('object');
                response.body.should.have.property('conversation');
                response.body.should.have.nested.property('conversation._id');
                response.body.should.have.property('messages').to.be.length.gt(0);
                response.body.should.have.nested.property('messages.0._id');
                done();
            });
    });

});