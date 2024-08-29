import httpStatus from "http-status"
import { AppError } from "../../errors/app-error"
import prisma from "../../utils/prisma-client"
import { ICreateCard } from "./card.interface"

const createCard = async (payload: ICreateCard) => {
  const card = await prisma.card.create({
    data: {
      title: payload.title,
      description: payload.description,
      link: payload.link,
    },
  })

  return card
}

const getCard = async (title: string) => {
  const card = await prisma.card.findFirst({
    where: {
      title: {
        equals: title,
        mode: "insensitive",
      },
    },
  })

  if (!card) {
    throw new AppError(httpStatus.NOT_FOUND, "Card information not found!")
  }

  return card
}

const getAllCard = async () => {
  const cards = await prisma.card.findMany()

  return cards
}

export const cardService = {
  createCard,
  getCard,
  getAllCard,
}
