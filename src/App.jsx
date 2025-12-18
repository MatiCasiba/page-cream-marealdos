import { BrowserRouter } from "react-router"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App
