import { Outlet, useLocation } from "react-router-dom"
import { Footer } from "../components/footer"
import { Header } from "../components/header"
import { useEffect } from "react"

export const MainLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
