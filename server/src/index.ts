import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT = process.env.PORT || 3001;

// const connectionString = "..."
// const sql = postgres(connectionString, { max: 1 })
// const db = drizzle(sql);

// await migrate(db, { migrationsFolder: "drizzle" });

// await sql.end();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript Server');
});

app.listen(PORT, () =>
	console.log(`Backend now listening \nhttp://localhost:${PORT}`)
);
