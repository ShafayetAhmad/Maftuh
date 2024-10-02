import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;
console.log(process.env.PORT);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Maftuh");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
