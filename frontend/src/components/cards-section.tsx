import { useEffect, useState } from "react"
import { Card } from "./card"
import axiosInstance from "../utils/axios-instance"
import { LuLoader, LuPlus } from "react-icons/lu"
import { Link, useSearchParams } from "react-router-dom"
import { TbError404 } from "react-icons/tb"

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
        const res = await axiosInstance.get(`/cards?${params.toString()}`)
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
        <div className="max-w-[900px] mx-auto">
          <div className="flex justify-end mb-6">
            <Link
              to={"/create"}
              className="text-blue-600 flex items-center px-3 py-1.5 rounded-md hover:bg-gray-100"
            >
              <LuPlus className="size-4 mr-2" />
              Create Card
            </Link>
          </div>
          {!isLoading && cards.length === 0 && (
            <div className="h-32 flex flex-col gap-6 items-center justify-center">
              <TbError404 className="size-12" />
              <p className=" text-gray-600">No cards found!</p>
            </div>
          )}
          {isLoading && (
            <div className="py-20 flex items-center justify-center">
              <LuLoader className="size-6 animate-spin" />
            </div>
          )}{" "}
          {!isLoading && cards.length > 0 && (
            <div className="grid grid-cols-2 gap-16">
              {cards.map(card => (
                <Card
                  key={card.id}
                  data={card}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
