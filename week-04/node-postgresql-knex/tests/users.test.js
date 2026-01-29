const request = require("supertest");
const app = require("../src/app");
const db = require("../src/config/knex");

jest.setTimeout(10000);

describe("Users API", () => {
  it("should create a user", async () => {
    const res = await request(app)
      .post("/users")
      .send({
        name: "Test User",
        email: `test_${Date.now()}@mail.com`
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id");
  });
});

afterAll(async () => {
  await db.destroy();
});
