import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axiosInstance from "../utils/axios-instance"
import { LuLoader } from "react-icons/lu"
import { NotFound } from "./not-found"

interface ICard {
  id: string
  title: string
  description: string
  link: string
  createdAt: Date
  updatedAt: Date
}

export const CardPage = () => {
  const params = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<ICard>({} as ICard)

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setIsLoading(true)
        const res = await axiosInstance.get(`/cards/${params.title}`)
        setData(res.data)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCardData()
  }, [params.title])

  if (!isLoading && !data.title) {
    return <NotFound />
  }

  return (
    <section className="container py-32 max-w-[800px]">
      {isLoading && (
        <div className="flex items-center justify-center">
          <LuLoader className="size-8 animate-spin" />
        </div>
      )}
      {!isLoading && data && (
        <div>
          <h1 className="font-bold text-xl mb-6">{data?.title}</h1>
          <p className="text-gray-700 mb-8">{data?.description}</p>
          <p className="text-gray-800">
            Link:{" "}
            <Link
              className="hover:underline text-blue-600"
              to={data?.link}
            >
              {data?.link}
            </Link>
          </p>
        </div>
      )}
    </section>
  )
}
