import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  return (
    <section id="features">
      <h2>Features</h2>
      <ul>
        <li><Link to="/feature/summarizer">Summarizer Demo</Link></li>
        <li><Link to="/feature/sentiment-analysis">Sentiment Analysis</Link></li>
        <li><Link to="/feature/contact-insights">Contact Insights</Link></li>
        <li><Link to="/feature/intent-classifier">Intent Classifier</Link></li>
        <li><Link to="/feature/topic-categorization">Topic Categorization</Link></li>
      </ul>
    </section>
  );
}

export default Features;