import {  RouterProvider } from "react-router"
import userRouter from "./routes/UserRoutes"


function App() {
  return <RouterProvider router={userRouter} />
}

export default App