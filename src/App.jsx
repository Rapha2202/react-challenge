import CardList from "./components/CardList"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.scss"
import { useState } from "react"

function App() {

  const [panier, setPanier] = useState(0)
  const [prix, setPrix] = useState(0)

  return (
    <div>
      <Navbar panier={panier} prix={prix} />
      <CardList panier={panier} setPanier={setPanier} prix={prix} setPrix={setPrix} />
      <Footer />
    </div>
  )
}

export default App
