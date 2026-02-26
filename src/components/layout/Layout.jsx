import { Outlet } from "react-router"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import "./Layout.scss"

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout