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
    it('Get conversation', (done)=>{
        chai.request(app).get('/api/v1/conversation')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });

    it('POST conversation', (done)=>{
        chai.request(app).post('/api/v1/conversation')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });

    it('DELETE conversation', (done)=>{
        chai.request(app).delete('/api/v1/conversation')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });

    it('PUT conversation', (done)=>{
        chai.request(app).put('/api/v1/conversation')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });
});


describe('Check for message CRUD', ()=>{
    it('Get message', (done)=>{
        chai.request(app).get('/api/v1/message')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });

    it('POST message', (done)=>{
        chai.request(app).post('/api/v1/message')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });

    it('DELETE message', (done)=>{
        chai.request(app).delete('/api/v1/message')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });

    it('PUT message', (done)=>{
        chai.request(app).put('/api/v1/message')
            .send({id:1})
            .end((error,response)=>{
                response.should.have.status(200);
                done();
            });
    });
});
