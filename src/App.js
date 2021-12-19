// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import Contact from "./Components/Contact";

//Router function.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  //Alert function
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
//Dark and Light mode functionc
  const toggledMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar
        title="TextUtils."
        AboutText="About Us"
        Contact="Contact Us"
        mode={mode}
       
        toggledMode={toggledMode}
      />

      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/About"
            element={<About toggledMode={toggledMode} mode={mode} />}
          ></Route>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter text to analyze"
                mode={mode}
                showAlert={showAlert}
              />
            }
          ></Route>

          <Route
            exact
            path="/Contact"
            element={<Contact toggledMode={toggledMode} mode={mode} showAlert={showAlert}/>}
          ></Route>
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
