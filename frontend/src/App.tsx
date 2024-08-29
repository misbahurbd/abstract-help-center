import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./layouts/main-layout"
import { Home } from "./pages/home"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={routes} />
}
export default App
