/** @format */

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import MainSearch from "./components/MainSearch"
import CompanySearchResults from "./components/CompanySearchResults"
import Favourites from "./components/Favourites"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainSearch />} />
        <Route path='/:companyName' element={<CompanySearchResults />} />
        <Route path='/Favourites' element={<Favourites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
