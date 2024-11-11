import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "library is open",
  });
});

app.use("/api", router);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  globalErrorHandler(err, req, res, next);
});
app.use((req: Request, res: Response, _next: NextFunction) => {
  res.status(404).json({
    success: false,
    status: 404,
    message: "API NOT FOUND!",
  });
});
export default app;
