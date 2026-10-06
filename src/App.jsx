import { Route, Routes } from "react-router"
import TextForm from "./TextForm";
import About from "./About";
import Navbar from "./Navbar";

function App() {


  return (
    <>
      <Navbar title="jasmine" About="About" />
      {/* <About />  */}

      <Routes>
        <Route path="/" element={<TextForm />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  )
}
export default App
