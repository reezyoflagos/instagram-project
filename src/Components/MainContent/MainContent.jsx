import React from 'react';
import "./MainContent.css";
import StatusBar from '../StatusBar/StatusBar';
import MainPage from '../MainPage/MainPage';
import InfoSection from '../InfoSection/InfoSection';
import Suggestions from '../Suggestions/Suggestions';

const MainContent = () => {
  return (
    <div className="maincontent__container">
      <StatusBar />
      <MainPage />
      <div className="maincontent__sidebar">
        <InfoSection />
        <Suggestions />
      </div>
    </div>
  );
};

export default MainContent;