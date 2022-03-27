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
        {/* <SEOMetaTag
          title={'나랑 닮은 동물 심리 테스트'}
          keywords={'심리테스트,공감,동물,강아지,고양이,너구리,소,여우,곰,두더지,햄스터,토끼'}
          description={'123123간단한 심리테스트를 통해 당신의 동물 타입을 알아보세요 !!'}
          imgsrc={'%PUBLIC_URL%/images/main.png'}
          url={'https://my-animal-type2-survey.netlify.app/'}
        /> */}
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
