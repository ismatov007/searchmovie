import "../Components/Media.css"
import dhd from "../Components/rasm.png"
export default function Nothing() {
    return(
        <div className="nothing">
            <h4>Nothing was found for your query!!!</h4> 
            <img src={dhd} alt="" />
        </div>
    )
}