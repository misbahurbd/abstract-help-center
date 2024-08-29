import { TbError404 } from "react-icons/tb"

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center container py-32 flex-col">
      <TbError404 className="size-12" />
      <p className="text-gray-600 text-lg">Page not found!</p>
    </div>
  )
}
