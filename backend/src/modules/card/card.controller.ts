import httpStatus from "http-status"
import { catchAsync } from "../../utils/catch-async"
import { sendResponse } from "../../utils/send-response"
import { cardService } from "./card.service"

const createCard = catchAsync(async (req, res) => {
  const result = await cardService.createCard(req.body)

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Card created successfully!",
    data: result,
  })
})

const getCard = catchAsync(async (req, res) => {
  const result = await cardService.getCard(req.params.title)

  sendResponse(res, {
    message: "Card data retrive successfully!",
    data: result,
  })
})

const getAllCard = catchAsync(async (req, res) => {
  const result = await cardService.getAllCard()

  sendResponse(res, {
    message: "All card data retrive successfully!",
    data: result,
  })
})

export const cardController = {
  createCard,
  getCard,
  getAllCard,
}
