import React, { useState, useEffect } from "react";
import RenderComponents from "./components.js";
import Header from './components/Header';
import Footer from './components/Footer';

import "./App.scss";

const logoSrc = 'https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2020/05/Zest-Logo_300-98-01-1.png';

function App() {

  const [components, setComponents] = useState([]);

  useEffect(() => {
    console.log('getting components !');
    fetch('http://localhost:9000/data')
    .then(response => response.json())
    .then(data => setComponents(data));
  },[])

  return (
    <div className="App">
      <Header logo={logoSrc} header={'Offers'} />
        {components.map(block => RenderComponents(block))}
      <Footer />
    </div>
  );
}

export default App;