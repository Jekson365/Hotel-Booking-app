import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Upload from "./upload/Upload"
import Header from "./header/Header"
import './main.scss'
import { createContext, useState } from "react"
import Detailed from "./detailed/Detailed"
import Saved from "./saved/Saved"


export const MyContect = createContext({});

function App() {
  const [cart, setCart] = useState(false)
  const [book, setBook] = useState<boolean>(false)
  const deactive = () => {
    setCart(false)
    setBook(false)
  }
  if (book) {
    document.body.style.overflow = 'hidden'
  }
  else {

    document.body.style.overflow = 'auto'
  }
  return (
    <>
      <div className="cover">
        <MyContect.Provider value={{ cart, setCart, book, setBook }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/detailed/:id" element={<Detailed />} />
          </Routes>
          <Saved />
          <div
            onClick={deactive}
            className={`backdrop ${cart || book ? 'active-ov' : ""}`}></div>
        </MyContect.Provider>
      </div>
    </>
  )
}

export default App
