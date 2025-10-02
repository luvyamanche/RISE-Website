import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Team from './components/Team';
import Impact from './components/Impact';
import GetInvolved from './components/GetInvolved';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Team />
      <Impact />
      <GetInvolved />
      <Contact />
    </div>
  );
}

export default App;