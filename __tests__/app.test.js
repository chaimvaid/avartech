const request = require('supertest');
const app = require('../app')

describe('Test the tasksRouter root path', () => {
    test('It should response the GET method', () => {
        return request(app).get("/tasks").then(response => {
            // console.log(response)
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('all tasks')
        })
    });
})

describe('Test the create user path', () => {
    test('It should response the POST method', () => {
        return request(app).post("/users").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})