import React from 'react';
import EmailSummarizerLanding from './EmailSummarizerLanding';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <EmailSummarizerLanding />
      </div>
    </ThemeProvider>
  );
}

export default App;