import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu, Login } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    {/* <Intro /> */}
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
    {/* <Login /> */}
  </div>
);

export default App;
