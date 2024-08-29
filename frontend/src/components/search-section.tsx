import { useState } from "react"
import { FaArrowRightLong } from "react-icons/fa6"
import { useSearchParams } from "react-router-dom"

export const SearchSection = () => {
  const [params, setParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm) {
      params.append("search", searchTerm)
    } else {
      params.delete("search")
    }

    setParams(params)
  }

  return (
    <section className="bg-[#dadbf0] py-20">
      <div className="container">
        <div className="max-w-[620px] mx-auto space-y-8">
          <h2 className="text-6xl text-center">How can we help?</h2>
          <form
            className="relative w-full"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full border border-black transition-all rounded px-3 py-4 shadow-lg outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-950"
              placeholder="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 size-8 flex rounded-md items-center justify-center hover:bg-gray-100"
            >
              <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
