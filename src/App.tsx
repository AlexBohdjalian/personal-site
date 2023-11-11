import React from 'react';
import './App.css';
import CustomSocialIcon from './components/social-icon';
import HeaderSection from './components/header-section';
import AppSection from './components/app-section';


const LINKEDIN_URL = "https://linkedin.com/in/alex-bohdjalian"
const GITHUB_URL = "https://github.com/AlexBohdjalian"

interface DASTypes {
  children?: React.ReactNode
}

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
        <AppSection>
          <h2>
            Bio
          </h2>
          <p>
            Stuff
          </p>
        </AppSection>
        <AppSection nextCol circle>
          <h2>
            Other Section
          </h2>
          <p>
            Some content for inside the section. Bleep Bloop
          </p>
        </AppSection>
        <AppSection circle>
          <h2>
            Another Section
          </h2>
          <p>
            Some content for inside the section. Bleep Bloop
          </p>
        </AppSection>
        <AppSection nextCol circle>
          <h2>
            Final Section
          </h2>
          <p>
            Some content for inside the section. Bleep Bloop
          </p>
        </AppSection>
      </body>
    </div>
  );
}

export default App;
