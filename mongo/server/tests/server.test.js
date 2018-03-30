const expect = require("expect");
const request = require("supertest");

const { Todo } = require("./../models");
const { app } = require("./../server");

beforeEach(done => {
	Todo.remove({}).then(() => {
		done();
	});
});

describe("POST /todos", () => {
	it("should add a new todo", done => {
		let text = "test todo text";

		request(app)
			.post("/todos")
			.send({ text })
			.expect(201)
			.expect(res => {
				expect(res.body.text).toBe(text);
			})
			.end(err => {
				if (err) return done(err);

				Todo.find()
					.then(todos => {
						expect(todos.length).toBe(1);
						expect(todos[0].text).toBe(text);
						return done();
					})
					.catch(e => done(e));
			});
	});

	it("should not create todo with invalid data", done => {
		request(app)
			.post("/todos")
			.send({})
			.expect(400)
			.end(err => {
				if (err) return done(err);

				Todo.find()
					.then(todos => {
						expect(todos.length).toBe(0);
						return done();
					})
					.catch(e => done(e));
			});
	});
});
