import { useContext } from "react";
import { ContextApi } from "../ContextApi";
import "../assets/css/galeria.css";

const Favoritos = () => {

  const {totalFotosFavoritos} = useContext(ContextApi)
  const {fotosFavoritos} = totalFotosFavoritos
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      { 
        fotosFavoritos.map((foto) => {
            return (
                <div key={foto.id} className='foto'>
                  <img src={foto.src.original}
                    alt="fotos" />
                </div>
            );
          })
      }
       
      </div>
    </div>
  );
}

export default Favoritos