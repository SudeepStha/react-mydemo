import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
// import About from './components/About'
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  //background color changing dark mode
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = '#071032';
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled.", "success");
      document.title = "Dark Mode has been enabled";
      // setInterval(() => {
      //   document.title = "Enable Dark Mode";
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Did You Enable Dark Mode?";
      // }, 2000);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");
      document.title = "Light Mode has been enabled";


    }
  }

  const toggleGreen = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = '#071032';
      document.body.style.backgroundColor = 'green';
      showAlert("Dark Mode has been enabled.", "success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");

    }
  }

  const toggleRed = () => {
    if (mode === 'light') {
      setMode('dark');
      // document.body.style.backgroundColor = '#071032';
      document.body.style.backgroundColor = 'red';
      showAlert("Dark Mode has been enabled.", "success");

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled.", "success");

    }
  }

  // alert showing
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    //version 5
    // <>
    //   <Router>
    //     <Navbar title="Test" about="About" home="Home" mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen} toggleRed={toggleRed} />
    //     <Alert alert={alert} />
    //     <Switch>
    //       <Route path="/about">
    //         <About />
    //       </Route>
    //       <Route path="/">
    //         <TextForm showAlert={showAlert} heading="This is a Heading" mode={mode} />
    //       </Route>
    //     </Switch>
    //   </Router>
    // </>

    //version 6
    <>
      {/* <Router> */}
      <Navbar title="Test" about="About" home="Home" mode={mode} toggleMode={toggleMode} toggleGreen={toggleGreen} toggleRed={toggleRed} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path="/about"
              element={
                <About />
              }
            >
            </Route> */}
        {/* <Route exact path="/"
              element={ */}
        <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
        {/* }
            > */}
        {/* </Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
