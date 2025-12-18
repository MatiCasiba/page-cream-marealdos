# MARELADOS
Marelados es una página de helados, el diseño se adapta tanto a celulares como a desktop. Esta página la desarrollaré con React y estilizo con Sass

## Estructura base

### Configuración de rutas (AppRoutes.jsx + Layout)

#### AppRoutes.jsx
Dentro de la carpeta routes se encontrará el archivo donde configuraré las rutas de la página: 

```js
import { Route, Routes } from "react-router"
import Layout from "../components/layout/Layout"
import Home from "../pages/home/Home"
import Category from "../pages/category/Category"
import Contact from "../pages/contact/Contact"

const AppRoutes = () => {
  return (
    <Routes>
        /* Envulevo todas las rutas públicas ccon Layout */
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="categoria/:categoryID" element={<Category />} />
            <Route path="contacto" element={<Contact />} />

            /* Ruta 404 - página no encontrada */
            <Route path="*" element={
                <div style={{
                    ...
                }}>
                    <h2 style={{...}}>
                        404 - Página no encontrada
                    </h2>
                    <p>La página que buscas no existe.</p>
                    <a
                        href='/'
                        style={{
                            ...
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
```

#### Layout.jsx

```js
import { Outlet } from "react-router"
import Header from "../header/Header"
import Footer from "../footer/Footer"


const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content">
        <Outlet /> /* acá se rendizaran las páginas hijas */
      </main>
      <Footer />
    </div>
  )
}

export default Layout
```

* Layout.scss:
```sh
.layout{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.main-content{
    flex: 1;
    margin-top: 70px;
    padding: 1rem;
    width: 100%;

    @media (min-width: 577px){
        padding: 1.5rem;
        min-width: 1200px;
        margin: 70px auto 0;
    }

    @media (min-width: 768px){
        padding: 2rem;
    }
}
```

