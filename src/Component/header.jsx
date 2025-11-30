function Header() { 
    const carouselImgStyle={
height:"400px",
objectFit:"cover",
width:"100%",
}; 
    return (  
        <header style={{ backgroundColor: "blue", padding: "10px", textAlign: "center", color: "white" }}>  
 

            
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="\img\AMD-Ryzen-Banner-jpg.webp" class="d-block w-100" alt="..."style={carouselImgStyle}/>
    </div>
    <div class="carousel-item">
      <img src="\img\geforce-rtx-5090-gallery-shot-2-ari.jpeg" class="d-block w-100" alt="..." style={carouselImgStyle}/>
    </div>
    <div class="carousel-item">
      <img src=" \img\intel processor banner-min.png" class="d-block w-100" alt="..." style={carouselImgStyle}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </header>  
 
);  
}  
export default Header;