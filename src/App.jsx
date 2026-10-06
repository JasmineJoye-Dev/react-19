import { Route, Routes } from "react-router"
// import Home from "./Home";
import About from "./About";
import Navbar from "./Navbar";

function App() {


  return (
    <>
      <Navbar title="jasmine" About="About" />
      {/* <About />  */}

      <Routes>
        {/* <Route path="/" element={<Navbar title="jasmine" About="About" />} /> */}
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  )
}
export default App
