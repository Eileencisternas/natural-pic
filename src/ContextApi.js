import { useEffect } from "react"
import { createContext, useState } from "react"

export const ContextApi = createContext({})

export const Provider = ({ children }) => {
  const [fotos, setFotos] = useState([])
  const [fotosFavoritos, setFotosFavoritos] = useState([])

  const totalFotos = { fotos, setFotos }
  const totalFotosFavoritos = { fotosFavoritos, setFotosFavoritos }

  const fotosRender = async () => {
    const endpoint = "/fotos.json"
    const response = await fetch(endpoint)
    const { photos } = await response.json()
    setFotos(photos)
  }

  useEffect(() => {
    fotosRender()
  }, [])

  return (
    <ContextApi.Provider value={{ totalFotos, totalFotosFavoritos }}>
      {children}
    </ContextApi.Provider>
  )
}
