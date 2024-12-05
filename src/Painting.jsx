import style from "./Painting.module.css";
function Painting({ image, artist, titre }) {
    return (
      <div className="painting-card">
        <div className="painting-image">
          <img src={image} alt={titre} />
        </div>
        <div className="painting-info">
          <h3>{titre}</h3>
          <p>{artist}</p>
        </div>
      </div>
    );
  }
    

export default Painting





