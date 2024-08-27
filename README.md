# Email Wizard Pro

Email Wizard Pro is an AI-powered email management tool designed to boost productivity and streamline your inbox experience. It combines a Chrome extension for Gmail integration with a web application for comprehensive email management.

## Features

- **Smart Summaries**: AI-generated concise summaries of your emails
- **Priority Sorting**: Automatic categorization of emails by importance
- **Topic Categorization**: Organize emails into custom categories
- **Sentiment Analysis**: Understand the tone of your emails at a glance
- **Meeting Scheduler**: Seamless calendar integration for scheduling
- **Smart Reminders**: AI-powered follow-up reminders
- **Attachment Summary**: Quick overviews of attached documents
- **Language Translation**: Instant translation of emails
- **Time-to-Read Estimate**: Estimated reading time for each email
- **AI-Powered Email Triage**: Automatically sort emails into action-based categories and learn from user behavior
- **Email Chain Summarizer**: Provide concise summaries of long email threads, highlighting key points and decisions
- **Contextual Contact Insights**: Analyze communication patterns and provide personalized talking points for each contact
- **Predictive Email Prioritization**: Predict important emails and suggest optimal times to address them
- **Email Intent Classifier**: Automatically classify and route emails based on their intent (e.g., request, complaint, sales inquiry)

## Project Structure

The project consists of two main components:

1. Chrome Extension (email-wizard-chrome)
2. Web Application (email-wizard-pro)

### Chrome Extension

Located in the `email-wizard-chrome` directory, the extension integrates directly with Gmail to provide on-the-fly email management.

Key files:
- `manifest.json`: Extension configuration
- `background.js`: Background script for API calls and data management
- `contentScript.js`: Injects UI elements into Gmail
- `popup.html` & `popup.js`: Extension popup interface
- `options.html` & `options.js`: User settings page

### Web Application

Located in the `email-wizard-pro` directory, the web app provides a full-featured dashboard for email management.

Key files:
- `src/App.js`: Main application component
- `src/EmailSummarizerLanding.js`: Landing page component
- `src/components/`: UI components (Header, Features, Pricing, etc.)
- `src/contexts/ThemeContext.js`: Dark/light mode context
- `tailwind.config.js`: Tailwind CSS configuration

## Installation

### Chrome Extension

1. Navigate to `chrome://extensions/` in your Chrome browser
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked" and select the `email-wizard-chrome` directory

### Web Application

1. Navigate to the `email-wizard-pro` directory
2. Run `npm install` to install dependencies
3. Run `npm start` to start the development server

## Usage

### Chrome Extension

1. Click the Email Wizard icon in your Chrome toolbar
2. Connect to your Gmail account
3. Use the "Summarize" buttons next to emails in your Gmail interface

### Web Application

1. Visit the deployed web application (or `localhost:3000` if running locally)
2. Sign up for an account or log in
3. Connect your email account to start using Email Wizard Pro features

## Development

To contribute to the project:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

Ensure you follow the existing code style and write tests for new features.

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- Chrome Extension APIs
- Gmail API

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

For support or queries, please contact us at support@emailwizardpro.com.

## Pricing

Choose the plan that fits your needs:

1. **Basic Plan**: $4.99/month
   - Smart Summaries
   - Priority Sorting
   - Topic Categorization
   - Sentiment Analysis

2. **Pro Plan**: $9.99/month
   - All Basic features
   - Meeting Scheduler
   - Smart Reminders
   - Attachment Summary
   - Language Translation

3. **Enterprise Plan**: $17.99/month
   - All Pro features
   - AI-Powered Email Triage
   - Email Chain Summarizer
   - Contextual Contact Insights
   - Predictive Email Prioritization
   - Email Intent Classifier
   - Priority Support

## Setup

To run this project locally, follow these steps:

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file in the project root
4. Add your OpenAI API key to the `.env` file:
   ```
   REACT_APP_OPENAI_API_KEY=your_actual_api_key_here
   ```
5. Run the development server with `npm start`

Note: Never commit your actual API keys to the repository. The `.env` file is ignored by git to prevent accidental exposure of sensitive information.