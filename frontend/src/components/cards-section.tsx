import { useEffect, useState } from "react"
import { Card } from "./card"
import axiosInstance from "../utils/axios-instance"
import { LuLoader } from "react-icons/lu"
import { useSearchParams } from "react-router-dom"

interface ICard {
  id: string
  title: string
  description: string
  link: string
  createdAt: Date
  updatedAt: Date
}

export const CardsSection = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [cards, setCards] = useState<ICard[]>([])
  const [params] = useSearchParams()

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        const res = await axiosInstance(`/cards?${params.toString()}`)
        if (res.status === 200) {
          setCards(res.data)
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [params])

  return (
    <section className="bg-white">
      <div className="container py-20">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 gap-16">
          {isLoading ? (
            <div className="col-span-2 py-20 flex items-center justify-center">
              <LuLoader className="size-6 animate-spin" />
            </div>
          ) : (
            cards.map(card => (
              <Card
                key={card.id}
                data={card}
              />
            ))
          )}
        </div>
      </div>
    </section>
  )
}
