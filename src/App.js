import logo from './logo.svg';
import './App.css';
import React from 'react';

import Loader  from './components/Loader';
import Transactions  from './components/Transactions';
import Footer from './components/Footer';
import  Services  from './components/Services';
import  Navbar  from './components/Navbar';
import  Welcome  from './components/Welcome';
import './index.css';



function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    <Services />  
    <Transactions />
    <Footer />
    </div>
  );
}

export default App;
