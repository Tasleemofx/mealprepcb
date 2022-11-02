import React from "react";
// import FullMenu from "./pages/FullMenu";
import Nav from "./components/Nav";
import './styles/App.css';
import MealprepCB from "./pages/MealprepCB";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <FullMenu /> */}
      <MealprepCB/>
    </div>
  );
}

export default App;
