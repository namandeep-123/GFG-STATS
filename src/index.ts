import * as dotenv from "dotenv";
import cors from "cors";
import express, { Request, Response, urlencoded, Application } from "express";
dotenv.config();
import router from "./routes";

const app: Application = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

//route
app.get("/", router);

const PORT = process.env.PORT ?? 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
