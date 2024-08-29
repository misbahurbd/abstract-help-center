import express, { Application, Request, Response } from "express"
import cors from "cors"
import { catchAsync } from "./utils/catch-async"
import { sendResponse } from "./utils/send-response"
import { cardRoutes } from "./modules/card/card.routes"
import { notFoundErrorHandler } from "./middlewares/not-found-error-handler"
import globalErrorHandler from "./middlewares/global-error-handler"

// initialize express application
const app: Application = express()

// initialize parsers
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: "*",
  })
)

// server check endpoint
app.get(
  "/ping",
  catchAsync(async (req, res) => {
    sendResponse(res, {
      message: "Service is running successfully!",
      data: null,
    })
  })
)

// card module endpoint
app.use("/cards", cardRoutes)

// not found handler
app.use(notFoundErrorHandler)

// global error handler
app.use(globalErrorHandler)

export default app
