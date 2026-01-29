const request = require("supertest");
const app = require("../src/app");
const db = require("../src/config/knex");

jest.setTimeout(10000);

describe("Tasks API", () => {
  it("should create a task for a user", async () => {
    const user = await request(app)
      .post("/users")
      .send({
        name: "Task User",
        email: `task_${Date.now()}@mail.com`
      });

    const task = await request(app)
      .post("/tasks")
      .send({
        title: "Learn Knex",
        user_id: user.body.id
      });

    expect(task.statusCode).toBe(201);
    expect(task.body.title).toBe("Learn Knex");
  });
});

afterAll(async () => {
  await db.destroy();
});
