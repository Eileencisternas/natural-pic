import "../assets/css/galeria.css"
import Heart from "./Heart"
import { ContextApi } from "../ContextApi"
import { useContext } from "react"

export default function Home() {
  const { totalFotos } = useContext(ContextApi)

  const { fotos } = totalFotos

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => {
        return (
          <div key={foto.id} className="foto">
            <Heart liked={foto.liked} foto={foto} />
            <img src={foto.src.original} alt="foto" />
            <p>{foto.alt}</p>
          </div>
        )
      })}
    </div>
  )
}
