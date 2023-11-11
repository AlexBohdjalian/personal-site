import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InfoBanner from './components/info-banner';
import CustomSocialIcon from './components/social-icon';
import Logo from './components/logo';



const LINKEDIN_URL = "https://linkedin.com/in/alex-bohdjalian"
const GITHUB_URL = "https://github.com/AlexBohdjalian"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <header className="App-header">
      <Logo />
      <div className="App-header-socials">
        <CustomSocialIcon name="linkedin" url={LINKEDIN_URL} />
        <CustomSocialIcon name="github" url={GITHUB_URL} />
      </div>
    </header>

    {/* Main app here */}
    <App />

    <InfoBanner />
  </React.StrictMode>
);
