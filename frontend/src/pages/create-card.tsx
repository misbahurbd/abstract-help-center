import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { z } from "zod"
import axiosInstance from "../utils/axios-instance"
import { Input } from "../components/input"

const createFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  link: z.string().min(1, "Link is required").url("Invalid link"),
})

export const CreateCard = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<z.infer<typeof createFormSchema>>({
    resolver: zodResolver(createFormSchema),
    defaultValues: {
      title: "",
      description: "",
      link: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof createFormSchema>) => {
    try {
      setIsLoading(true)
      const res = await axiosInstance.post("/cards", values)

      if (res.status === 201) {
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      className="flex flex-col gap-2 px-4 max-w-[460px] mx-auto py-20"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <h2 className="text-center font-bold mb-6 text-2xl">Create Card</h2>
      <Input
        name="title"
        label="Title"
        placeholder="Enter card title here"
        form={form}
        disabled={isLoading}
      />
      <Input
        name="description"
        label="Description"
        placeholder="Enter card description here"
        form={form}
        disabled={isLoading}
      />
      <Input
        name="link"
        label="Link"
        placeholder="Enter card link here"
        form={form}
        disabled={isLoading}
      />
      <button
        disabled={isLoading}
        type="submit"
        className="w-full px-4 py-1 bg-black text-white rounded"
      >
        Create
      </button>
    </form>
  )
}
