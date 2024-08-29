import { z } from "zod"

const createCardSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  link: z.string().min(1, "Link is required").url("Invalid url"),
})

export const cardValidation = {
  createCardSchema,
}
