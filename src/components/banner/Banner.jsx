import { useState, useEffect, useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules"

// importo estilos de Swiper
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

import "./Banner.scss"
import { useNavigate } from "react-router"

const Banner = () => {
  const [banners, setBanners] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576)
  const swiperRef = useRef(null)
  const navigate = useNavigate()

  //detecta cambios de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize',handleResize)
  })

  // simulo carga de banners (después vendrá de API)
  useEffect(() => {
    // carga de imágenes desde una API o carpeta
    const bannerImages = [
      {
        id: 1,
        image: "/banner/banner-1.jpg",
        title: "Nuevos Palitos",
        subtitle: "Sabores frutales para el verano",
        buttonText: "Ver productos",
        link: "/categoria/palitos"
      },
      {
        id: 2,
        image: "/banner/banner-2.png",
        title: "Bombones Premium",
        subtitle: "Los más vendidos de la temporada",
        buttonText: "Descubrir",
        link: "/categoria/bombones"
      },
      {
        id: 3,
        image: "/banner/banner-3.png",
        title: "Tortas",
        subtitle: "Para compartir en familia",
        buttonText: "Ver más",
        link: "/categoria/tortas"
      }
    ]
    
    setBanners(bannerImages)
    setLoading(false)
  }, [])

  // navegar al hacer clic en el botón
  const handleBannerClick = (link) => {
    navigate(link) // uso navigate en lugar de window.location
  }

  if (loading) {
    return <div className="banner-skeleton">Cargando promociones...</div>
  }

  return (
    <section className="banner-section">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        autoplay={{
          delay: 5000, // 5 segundos
          disableOnInteraction: false, // sigue auto después de interacción
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={!isMobile} //solo flechas en desktop
        loop={true}
        grabCursor={true}
        touchRatio={1.5}
        className="banner-swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div 
              className={`banner-slide ${isMobile ? "banner-slide-mobile" : "banner-slide-desktop"}`}
              onClick={() => handleBannerClick(banner.link)} // banner clickeable
              style={{ backgroundImage: `url(${banner.image})` }}
            >

              {/* contenido del banner */}
              <div className="banner-content">
                <h2 className="banner-title">{banner.title}</h2>
                <p className="banner-subtitle">{banner.subtitle}</p>
                <button 
                  className="banner-button"
                  onClick={(e) => {
                    e.stopPropagation() // evita doble navegación
                    handleBannerClick(banner.link)
                  }}
                >
                  {banner.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* indicador de swipe en celulares */}
      {isMobile && (
        <div className="swipe-indicator">
          <span className="swipe-text">Desliza para ver más</span>
          <span className="swipe-arrow">→</span>
        </div>
      )}
    </section>
  )
}

export default Banner