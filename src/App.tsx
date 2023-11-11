import React from 'react';
import './App.css';
import CustomSocialIcon from './components/social-icon';
import HeaderSection from './components/header-section';
import AppSection from './components/app-section';


interface UHTypes {
  header: string;
}

function App() {
  function UnderlineHeader({ header }: UHTypes) {
    return (
      <h2>
        <u>
          {header}
        </u>
      </h2>
    )
  }

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
          <UnderlineHeader header="Bio" />
          <body>
            Stuff
          </body>
        </AppSection>
        <AppSection nextCol circle>
          <UnderlineHeader header="Other Section" />
          <body>
            Some content for inside the section. Bleep Bloop
          </body>
        </AppSection>
        <AppSection circle>
          <UnderlineHeader header="Another Section" />
          <body>
            Some content for inside the section. Bleep Bloop
          </body>
        </AppSection>
        <AppSection nextCol circle>
          <UnderlineHeader header="Final Section" />
          <body>
            Some content for inside the section. Bleep Bloop
          </body>
        </AppSection>
      </body>
    </div>
  );
}

export default App;
