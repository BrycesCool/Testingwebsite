import React, { useState } from 'react';
import Navigation from './balls/NavBar.tsx';
import HomePage from './balls/Home.tsx';
import ProductPage from './balls/Producttemplate.tsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' ? <HomePage /> : <ProductPage />}
    </div>
  );
};

export default App;