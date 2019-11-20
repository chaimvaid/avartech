const request = require('supertest');
const path = require('path')
console.log(path.basename('../app'))
const app = require(path.join('../app'))
const db = require(path.join('../models'))
var Umzug = require("umzug");
require(path.join('mysql2/node_modules/iconv-lite')).encodingExists('foo');



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
    beforeEach(async (done) => {
        // jest.setTimeout(30000);

        
        await db.sequelize
          .getQueryInterface()
          .dropAllTables();

            
              
        

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

        
        await umzug.execute({
        migrations: ["20191023191008-create-user"],
        method: "up"
        })

        done()

        
    })

    it('should response the POST method', () => {
        return request(app).post("/users").then(response => {
            expect(response.statusCode).toBe(200)
        })
    });

    it('should create new user in db with id 1', () => {
        return request(app).post("/users").then(response => {
            const User = db.User
            return User.findByPk(1).then(user=>{
                expect(user).not.toBeNull()
            })
        })
    });

    it('should create only one user', () => {
        return request(app).post("/users").then(response => {
            const User = db.User
            return User.findAll().then(users=>{
                expect(users.length).toBe(1)
            })
        })
    });

    test('Created user should contain request params', () => {
        return request(app)
        .post("/users")
        .send({
            first_name: 'chaim',
            last_name: 'vaidberg',
            email: 'chaimvaid@gmail.com',
        })
        .then(response => {
            const User = db.User
            return User.findOne().then(user=>{
                expect(user).toMatchObject({
                    first_name: 'chaim',
                    last_name: 'vaidberg',
                    email: 'chaimvaid@gmail.com',
                })
            })
        })
    });


})