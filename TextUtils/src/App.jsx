import { Route, Routes } from "react-router"
import TextForm from "./TextForm";
import About from "./About";
import Navbar from "./Navbar";
import Alert from "./Alert";
import { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light")
  const removeColor=()=>{
 document.body.classList.remove("bg-primary")
  document.body.classList.remove("bg-secondary")
   document.body.classList.remove("bg-danger")
  
  }
  const colorBtn = (clr) => {
    removeColor()
     document.body.classList.add('bg-'+clr)
  }
  const ToggleMode = () => {
    removeColor();
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b3348";
      ShowAlert("dark mode enabled", "success");
      document.title = "TextUtils : dark Mode"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("light mode enabled", "success");
      document.title = "TextUtils : light Mode"
    }
  }
  const [AlertMsg, setAlertMsg] = useState(null)
  const ShowAlert = (message, type) => {
    setAlertMsg({
      msg: message,
      type: type
    })



    
    setInterval(() => {
      setAlertMsg(null);
    }, 3000)
  }





  return (
    <>
      <Navbar title="Jasmine" Mode={Mode} ToggleMode={ToggleMode} About="About" colorBtn={colorBtn} />
      <Alert AlertMsg={AlertMsg} />

      <Routes>
        <Route path="/" element={<TextForm ShowAlert={ShowAlert} heading="Hyyy" Mode={Mode} AlertMsg={AlertMsg} />}></Route>
        <Route path="/about" element={<About Mode={Mode} />}></Route>
        {/* <Route path="/" element={<Alert AlertMsg={AlertMsg} />}></Route> */}
      </Routes>
    </>
  )
}
export default App
