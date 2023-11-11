import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InfoBanner from './components/info-banner';
import HeaderSection from './components/header-section';
import CustomSocialIcon from './components/social-icon';



const LINKEDIN_URL = "https://linkedin.com/in/alex-bohdjalian"
const GITHUB_URL = "https://github.com/AlexBohdjalian"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <header className="App-header">
      <div className="App-header-sections">
        <HeaderSection text="Something" url="" />
      </div>
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
