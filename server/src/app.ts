import cors from "cors";
import express from "express";
import { SERVER_PORT, SERVER_DOMAIN } from "./config";
import { authorRouter } from "./router/authorRouter";
import { employeeRouter } from "./router/employeeRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.listen(SERVER_PORT, () => {
  console.log(`Server is running at http://${SERVER_DOMAIN}:${SERVER_PORT}`);

  // ROUTES
  app.use("/api/employees", employeeRouter);
  app.use("/api/authors", authorRouter);
});
