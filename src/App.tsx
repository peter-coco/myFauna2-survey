import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home';
import Survey from './pages/survey';
import Result from './pages/result';
import Introduce from './pages/introuduce';
import styled from 'styled-components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SEOMetaTag from './components/SEOMetaTag';

const AppWrap = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <BrowserRouter>
      <AppWrap>
        {/* <SEOMetaTag /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/result/:type" element={<Result />} />
        </Routes>
      </AppWrap>
    </BrowserRouter>
  );
}

export default App;
