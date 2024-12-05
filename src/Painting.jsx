import style from "./Painting.module.css";
function Painting({
    image,
    artist
}) {

    return (
        <div className={style.imageContainers}>

            <img className={style.image} src={image}></img>
            <p>{artist}</p>
              </div>
            
    )
        


}


export default Painting





