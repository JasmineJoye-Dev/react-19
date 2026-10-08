import { Route, Routes } from "react-router"
import TextForm from "./TextForm";
import About from "./About";
import Navbar from "./Navbar";
import Alert from "./Alert";
import { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light")
  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b3348";
      ShowAlert("dark mode enabled", "success");
      document.title = "TextUtils : dark Mode"
      setInterval(() => {
        document.title = "heyy - whatsupp";
      }, 1000);
      setInterval(() => {
        document.title = "Install it";
      }, 5000);
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
      <Navbar title="Jasmine" Mode={Mode} ToggleMode={ToggleMode} About="About" />
      <Alert AlertMsg={AlertMsg} />

      <Routes>
        <Route path="/" element={<TextForm ShowAlert={ShowAlert} heading="Hyyy" Mode={Mode} AlertMsg={AlertMsg} />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/" element={<Alert AlertMsg={AlertMsg} />}></Route> */}
      </Routes>
    </>
  )
}
export default App
