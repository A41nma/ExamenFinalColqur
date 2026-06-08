import Image from "next/image";
import Ejercicio from "./componentes/ejercicio";
export default function Home() {
  return (
    <div style={{ backgroundColor: '#3f3e3e' }} >
      <h1>Exercicios</h1>
      <Ejercicio/>
      <Ejercicio/>
      <Ejercicio/>

    </div>
  )
}
