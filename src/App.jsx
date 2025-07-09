import { BrowserRouter } from "react-router"
import UserRoutes from "./routes/UserRoutes"


function App() {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  )
}

export default App