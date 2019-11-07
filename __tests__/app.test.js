const request = require('supertest');
const app = require('../app')
const db = require('../models')
const path = require('path')
var Umzug = require("umzug");
require('mysql2/node_modules/iconv-lite').encodingExists('foo');



describe('Test the tasksRouter root path', () => {
    it('should response the GET method', () => {
        return request(app).get("/tasks").then(response => {
            // console.log(response)
            expect(response.statusCode).toBe(200)
            expect(response.text).toBe('all tasks')
        })
    });
})

describe('Test the create user path', () => {
    beforeEach(function(done) {
        // Setup the database
      //   db.sequelize
      //     .getQueryInterface()
      //     .dropAllTables()
      //     .complete(function() { done(); }, function(err) { done(err); });
      // });
        const umzug = new Umzug({
        migrations: {
        params: [ db.sequelize.getQueryInterface(), db.Sequelize ],
        path: "migrations"
        },
        storage: "sequelize",
        storageOptions: {
        sequelize: db.sequelize
        },
        logging: console.log
        });

        umzug.execute({
        migrations: ["20191023191008-create-user"],
        method: "up"
        }).then(function(migrations) {
            console.log(migrations);
        });
    })
    it('should response the POST method', () => {
        return request(app).post("/users").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });
})