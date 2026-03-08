import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Airpods from "./components/Airpods/Airpods";
import Watch from "./components/Watch/Watch";
import IpadAir from "./components/IpadAir/IpadAir";
import Macbook from "./components/MacBook/Macbook";
import "./App.css";
import Ipadcolor from "./components/IpadColor/Ipadcolor";
import Mac from "./components/MacM1/Mac";

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
      <Airpods />
      <Watch />
      <div className="bag">
        <IpadAir />
        <Macbook />
         </div>
         <div className="full">
        <Ipadcolor/>
        <Mac/>
      </div>
    </div>
  );
};

export default App;
