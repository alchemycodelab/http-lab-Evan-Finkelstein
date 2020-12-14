
const server = require('../lib/app');
const request = require('supertest');

describe('app routes', () => {
    it('responds with hi', async () => {
        const response = await request(server)
            .get('/');

        expect(response.text).toEqual('hi');
    });
    it('responds with echo', async () => {
        const response = await request(server)
            .post('/echo')
            .send('echo');


        expect(response.text).toEqual('echo');
    });
    it('responds with red', async () => {
        const response = await request(server)
            .get('/red')


        expect(response.text).toEqual('<h1>red</h1>');
    });
    it('responds with blue', async () => {
        const response = await request(server)
            .get('/blue')


        expect(response.text).toEqual('<h1>blue</h1>');
    });
    it('responds with green', async () => {
        const response = await request(server)
            .get('/green')


        expect(response.text).toEqual('<h1>green</h1>');
    });
});
