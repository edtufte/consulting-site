import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
function App() {

  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
    </div>
  );
}

export default App;
