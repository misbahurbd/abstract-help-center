import { Router } from "express"
import { validateRequest } from "../../middlewares/validate-request"
import { cardValidation } from "./card.validation"
import { cardController } from "./card.controller"

const router = Router()

router.post(
  "/",
  validateRequest(cardValidation.createCardSchema),
  cardController.createCard
)

router.get("/:title", cardController.getCard)
router.get("/", cardController.getAllCard)

export const cardRoutes = router
