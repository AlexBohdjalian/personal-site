import React from 'react';
import './App.css';
import CustomSocialIcon from './components/social-icon';
import HeaderSection from './components/header-section';


const LINKEDIN_URL = "https://linkedin.com/in/alex-bohdjalian"
const GITHUB_URL = "https://github.com/AlexBohdjalian"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-sections">
          <HeaderSection text="About Me" url="" />
          <HeaderSection text="Portfolio" url="" />
          <HeaderSection text="Contact Me" url="" />
        </div>
        <div className="App-header-socials">
          <CustomSocialIcon name="linkedin" url={LINKEDIN_URL} />
          <CustomSocialIcon name="github" url={GITHUB_URL} />
        </div>
      </header>
    </div>
  );
}

export default App;
