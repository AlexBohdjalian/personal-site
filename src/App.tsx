import './App.css';
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
