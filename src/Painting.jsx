import style from "./Painting.module.css";
function Painting() {

    return (
        <div className={style.imageContainers}>

            <img className={style.image} src="https://lh3.googleusercontent.com/SwwiVAxnwFE_s-k7-bPOZ6jnGfcuVDJoZ-ofLb0Zispb-mJdsfasrE1nTPRcGDPwyEqY0txKpjPcAWaIIltYvvPtDA8=s0"></img>
            <p>Portrait of don Ramon satué</p>
        </div>

    )
}


export default Painting