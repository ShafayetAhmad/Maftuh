import express, { Request, Response } from "express";

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Maftuh");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
