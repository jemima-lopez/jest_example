
import app from "../src/app.js";
import request from 'supertest';

describe('GET /tasks', () => {
    test('should respond status 200', async() => {
        const response = await request(app).get('/tasks').send();
        expect(response.statusCode).toBe(200);
    });

    test('should respond with an array', async() => {
        const response = await request(app).get('/tasks').send();
        expect(response.body).toBeInstanceOf(Array);
    });
});