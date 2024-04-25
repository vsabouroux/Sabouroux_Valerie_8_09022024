import "./Banner.scss";


function Banner({ img, texte, alt }) {
  return (
    <div className="Banner">
      <img src={img} className="banner-image"  alt={alt}  />

      <div className="overlay">
        <h1>{texte}</h1>
      </div>
    </div>
  );
}
export default Banner;
