import { Route, Routes } from "react-router"

import Catalog from "./components/catalog/Catalog"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Details from "./components/details/details"

function App() {
  

  return (
    <>
      
  <Header/>
  
  <Routes>
    <Route path="/" element={<Home />} />             
    <Route path="/games" element={<Catalog />} />             
    <Route path="/games/:gameId/details" element={<Details />} />             
  </Routes>

  <Footer/>

    </>
  )
}

export default App
