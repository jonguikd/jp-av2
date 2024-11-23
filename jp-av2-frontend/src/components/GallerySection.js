import React from "react";
import "../styles/Home.css";
import jp1 from "../images/photo-grid/jp1.jpg";
import jp2 from "../images/photo-grid/jp2.jpg";
import jp3 from "../images/photo-grid/jp3.jpg";
import jp4 from "../images/photo-grid/jp4.jpg";

const images = [
  { src: jp1, alt: "Espaço 1" },
  { src: jp2, alt: "Espaço 2" },
  { src: jp3, alt: "Espaço 3" },
  { src: jp4, alt: "Espaço 4" },
];

const CarouselItem = ({ src, alt, isActive }) => (
  <div className={`carousel-item ${isActive ? "active" : ""}`}>
    <img src={src} className="d-block w-100" alt={alt} />
  </div>
);

const GallerySection = () => {
  return (
    <section className="view4">
      <h2>O espaço da jp Solutions</h2>
      <div className="gallery">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                src={image.src}
                alt={image.alt}
                isActive={index === 0}
              />
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
