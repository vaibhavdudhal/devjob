import NavBar from "./Components/NavBarDiv/NavBar"
import Search from "./Components/SearchDiv/Search"
import Jobs from "./Components/JobDiv/Jobs"
import Value from "./Components/ValueDiv/Value"
import Footer from "./Components/FooterDiv/Footer"
import React from "react"


function App() {
 

  return (
    
      <div className="w-[85%] m-auto bg-white">
        <NavBar/>
        <Search/>
        <Jobs/>
        <Value/>
        <Footer/>



      </div>
  )
}

export default App
