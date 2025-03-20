import React from "react";
import Header from "./components/Headers";
import Benefit from "./components/Benefit";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Showcase from "./components/Showcase";
import Support from "./components/Support";
import Info from "./components/Information";
const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Showcase />
        <Benefit />
        <Support />
        <Map />
        <Info />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
