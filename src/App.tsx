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
          <HeaderSection text="Something" url="" />
        </div>
        <div className="App-header-socials">
          <CustomSocialIcon name="linkedin" url={LINKEDIN_URL} />
          <CustomSocialIcon name="github" url={GITHUB_URL} />
        </div>
      </header>
      <body>
        <h2>
          Bio
        </h2>
        <body>
          Bleep bloop
        </body>
      </body>
    </div>
  );
}

export default App;
