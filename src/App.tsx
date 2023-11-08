import React from 'react';
import './App.css';
import LinkedInIcon from './components/social-icons/linkedin-button';
import GitHubIcon from './components/social-icons/github-button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Some Text</p>
        <p>More Text</p>
        <div className="App-socials">
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </header>
    </div>
  );
}

export default App;
