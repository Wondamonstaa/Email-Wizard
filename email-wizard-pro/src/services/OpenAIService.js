import axios from 'axios';

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

class OpenAIService {
  constructor() {
    this.apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!this.apiKey) {
      console.error('OpenAI API key is not set. Please set the REACT_APP_OPENAI_API_KEY environment variable.');
    }
  }

  async summarizeEmail(emailContent) {
    try {
      const response = await axios.post(
        OPENAI_API_URL,
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful assistant that summarizes emails." },
            { role: "user", content: `Please summarize the following email:\n\n${emailContent}` }
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      throw new Error('Failed to summarize email. Please try again later.');
    }
  }
}

export default new OpenAIService();