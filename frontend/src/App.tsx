import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./layouts/main-layout"
import { Home } from "./pages/home"
import { CreateCard } from "./pages/create-card"
import { CardPage } from "./pages/card-page"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "create",
        element: <CreateCard />,
      },
      {
        path: "card/:title",
        element: <CardPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={routes} />
}
export default App
