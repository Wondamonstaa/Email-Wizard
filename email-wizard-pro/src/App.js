import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import EmailSummarizerLanding from './EmailSummarizerLanding';
import SummarizerDemo from './pages/demos/SummarizerDemo';
import SentimentAnalysisDemo from './pages/demos/SentimentAnalysisDemo';
import ContactInsightsDemo from './pages/demos/ContactInsightsDemo';
import IntentClassifierDemo from './pages/demos/IntentClassifierDemo';
import TopicCategorizationDemo from './pages/demos/TopicCategorizationDemo';
import FeatureUnderConstruction from './pages/FeatureUnderConstruction';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<EmailSummarizerLanding />} />
        <Route path="/feature/summarizer" element={<SummarizerDemo />} />
        <Route path="/feature/sentiment-analysis" element={<SentimentAnalysisDemo />} />
        <Route path="/feature/contact-insights" element={<ContactInsightsDemo />} />
        <Route path="/feature/intent-classifier" element={<IntentClassifierDemo />} />
        <Route path="/feature/topic-categorization" element={<TopicCategorizationDemo />} />
        <Route path="/feature/:featureName" element={<FeatureUnderConstruction />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;