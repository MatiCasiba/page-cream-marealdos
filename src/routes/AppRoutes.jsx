import { Route, Routes } from "react-router"
import Layout from "../components/layout/Layout"
import Home from "../pages/home/Home"
import Category from "../pages/category/Category"
import Contact from "../pages/contact/Contact"


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categoria/:categoryID" element={<Category />} />
            <Route path="contacto" element={<Contact />} />

            <Route path="*" element={
                <div style={{
                    padding: '2rem',
                    textAlign: 'center',
                    minHeight: '50vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <h2 style={{ color: '#ff6b8b', marginBottom: '1rem'}}>
                        404 - Página no encontrada
                    </h2>
                    <p>La página que buscas no existe.</p>
                    <a
                        href='/'
                        style={{
                            marginTop: '1rem',
                            color: '#ff6b8b',
                            textDecoration: 'underline'
                        }}
                    >
                        Volver al inicio
                    </a>
                </div>
            } />
        </Route>
    </Routes>
  )
}

export default AppRoutes