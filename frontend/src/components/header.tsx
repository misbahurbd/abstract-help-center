import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="bg-black text-white">
      <nav className="container py-4 flex items-center justify-between">
        <Link
          to={"/"}
          className="flex items-center gap-1.5"
        >
          <img
            src="/logo.png"
            className="size-6"
          />
          <span>Abstrack</span>
          <span className="block h-5 w-[1px] bg-white mx-1" />
          <span>Help Center</span>
        </Link>
        <Link to="#">
          <button className="px-5 py-2 rounded-lg border border-gray-300 leading-tight bg-white/10 hover:bg-white hover:text-black">
            Submit a request
          </button>
        </Link>
      </nav>
    </header>
  )
}
