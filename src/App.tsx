import React from 'react';
import './App.css';
import CustomSocialIcon from './components/social-icon';


const LINKEDIN_URL = "www.linkedin.com/in/alex-bohdjalian"
const GITHUB_URL = "www.github.com/AlexBohdjalian"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Some Text</p>
        <p>More Text</p>
        <div className="App-socials">
          <CustomSocialIcon url={LINKEDIN_URL} />
          <CustomSocialIcon url={GITHUB_URL} />
        </div>
      </header>
    </div>
  );
}

export default App;
