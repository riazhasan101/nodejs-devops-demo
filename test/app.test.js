const request = require("supertest");
const app = require("../src/index");

describe("API Tests", () => {
  it("GET / should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toBe("Hello DevOps World 🌍🚀");
  });

  it("GET /health should return UP", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toBe("UP");
  });
});
