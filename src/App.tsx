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
          <div className="section-content bio">
            {bioText.map((bioLine, index) => (
              <body
                key={index}
                style={{ marginBottom: '1rem', padding: '0 10rem' }}
              >
                {bioLine}
              </body>
            ))}
          </div>
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

const bioText = [
  "Hey there, I'm Alex, a software developer with roots in the charming town of Maidenhead. Uni life led me to Bath, and I just couldn't resist the city's vibe, so I stuck around.",
  "I got into coding because I've always been the puzzle-solving, logic-loving type. Plus, I genuinely believe I've got something cool to bring to the tech table.",
  "Armed with a Computer Science degree from the University of Bath, I'm your go-to person for languages like PHP, Python, React, and a bunch of others (C++, C#, Java - you name it).",
  "By day, I'm killing it in my coding adventures, always pushing to do better. Outside of the tech world, catch me at the gym, whipping up experimental recipes, gaming, or chilling with my cats. Oh, and I'm a sucker for puzzles and deep dives into anything from space to philosophy.",
  "Excited about where my coding journey is taking me. Always learning, always improving, and always up for the next big challenge. Let's see what the future holds!",
];

export default App;
