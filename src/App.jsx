import { BrowserRouter } from "react-router"
import AppRoutes from "./routes/AppRoutes"
import './App.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
