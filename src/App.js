import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/textForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#001f3f";
      showAlert(": Dark mode has been enabled", "success");
    }
  };

  return (
    <>
    
      <Navbar title="Anish" toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />

      <div className="container my-3">
       //Always a good practice to use exact path insted of path
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter the text to analyze"
                  showAlert={showAlert}
                  mode={mode}
                />
              }
            />
          </Routes>
      </div>
      
    </>
  );
}

export default App;
