import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { firebaseDB } from '../config/firebase';
import { Link } from 'react-router-dom';
import SEOMetaTag from '../components/SEOMetaTag';

const HomeWrap = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  /* background-image: url('/images/main.png'); */
  /* background-repeat: no-repeat; */
  /* background-size: cover; */
  /* background-position: center; */
`;
const Description = styled.div`
  font-weight: 400;
  font-size: 24px;
  display: flex;
  align-items: center;
  font-family: 'Jua';
`;

const Writer = styled.div`
  font-size: 14px;
  font-weight: 900;

  color: #ffffff;
`;
const ParticipantWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Jua';
`;
const Participant = styled.div`
  font-size: 20px;
  font-weight: 400;
`;
const Logo = styled.img`
  width: 246px;
  height: 280px;
`;
const Select = styled.div`
  width: 220px;
  height: 68px;
  font-family: 'Jua';
  background: #ffcaca;
  border-radius: 30px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 20px;
  color: black;
  cursor: pointer;
  /* 
  &:focus-within {
    background-color: #84644c;
  }
  &:hover {
    background-color: #84644c;
  } */
`;
const Home = () => {
  const [participatorCount, setParticipatorCount] = useState(0);
  const logo = '/images/main.png';
  useEffect(() => {
    const bucket = firebaseDB.collection('result');

    bucket
      .doc('type')
      .get()
      .then((item) => {
        const items = item.data();

        setParticipatorCount(items?.total);
      });
  }, []);
  return (
    <HomeWrap>
      <SEOMetaTag
        title={'나랑 닮은 동물심리 테스트'}
        keywords={'심리테스트,동물,강아지,고양이,너구리,소,여우,곰,두더지,햄스터,토끼'}
        description={'간단한 심리테스트를 통해 당신의 동물 타입을 알아보세요 !!'}
        imgsrc={'https://ifh.cc/g/TF5B7H.png'}
        url={window.location.href}
      />
      <Description>나는 어떤 타입의 동물일까?</Description>
      <Logo src={logo} />
      {/* <Writer>REPLACE</Writer> */}
      <Link to="/introduce" style={{ textDecorationLine: 'none' }}>
        <Select>테스트 시작!</Select>
      </Link>
      <ParticipantWrap>
        <Participant>참여자 수</Participant>
        <Participant>{participatorCount}</Participant>
      </ParticipantWrap>
    </HomeWrap>
  );
};

export default Home;
