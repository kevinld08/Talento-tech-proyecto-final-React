function Banner() {
  const carouselImgStyle = {
    height: "400px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <section style={{ marginBottom: "40px" }}>
      <div
        id="mainBanner"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <img
              src="/img/intel-14th-gen-banner.jpg"
              className="d-block w-100"
              style={carouselImgStyle}
              alt="Banner Intel"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/img/283_13-07-2023-02-07-51-ryzen.jpg"
              className="d-block w-100"
              style={carouselImgStyle}
              alt="Banner Ryzen"
            />
          </div>

          <div className="carousel-item">
            <img
              src="/img/15c17d09-200a-4a45-9bd5-91e172d25156-profile_banner-480.jpeg"
              className="d-block w-100"
              style={carouselImgStyle}
              alt="Banner perfil"
            />
          </div>

        </div>

       
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#mainBanner"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

      
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#mainBanner"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </section>
  );
}

export default Banner;
