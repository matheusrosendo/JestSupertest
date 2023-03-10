const request = require("supertest");
const app = require("./app.js");

describe("Post /users", () =>{
    describe("given a username and password", () =>{
        //should save username and password
        //should respond with a json object containg the user id
        
        test("should respond with 200 status", async() =>{
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.statusCode).toBe(200)
        })
        test("should specify json in the content type header", async() =>{
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
        })

        test("should receive a message containing 'ok'", async() =>{
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.body.message).toEqual(expect.stringContaining("ok"));
        })

        test("should receive an object with a valid userId", async() =>{
            const response = await request(app).post("/users").send({
                username: "username",
                password: "password"
            })
            expect(response.body.userId).toBeDefined();
        })

    })

    describe("when the username and/or password is missing", () =>{
        
        test("should respond with status 400 because password is missing", async () =>{
            const response = await request(app).post("/users").send({
                username: "username"
            })
            expect(response.statusCode).toEqual(400)
        })

        test("should respond with status 400 because username is missing", async () =>{
            const response = await request(app).post("/users").send({
                password: "pasasdff"
            })
            expect(response.statusCode).toEqual(400)
        })
    })
})