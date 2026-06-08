import "./ejerciciocard.css"
import Info from "./info"
export default function Ejerciciocard() {
    return (
        <div className="ejerciciocard">
            <img src="/imagenes/images.jfif" alt="Ejercicio" />
            <Info/>
            <button className="button"> {">"} </button>
        </div>
    )
}