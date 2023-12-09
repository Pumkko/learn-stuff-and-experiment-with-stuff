import { Elysia, t } from "elysia";
import { movies } from "./src/schema";
import { migrate } from "drizzle-orm/bun-sqlite/migrator"
import { db } from "./src/db";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/movies", async () => {
    const allMovies = await db.select().from(movies);
    return allMovies;
  })
  .post("/movies", async ({ body }) => {
    await db.insert(movies).values({
      title: body.movieName,
      releaseYear: body.releaseYear
    });
  }, {
    body: t.Object({
      movieName: t.String(),
      releaseYear: t.Number()
    })
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
