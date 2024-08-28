import React, { useState } from 'react';
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card";
import OpenAIService from '../../services/OpenAIService';

const TopicCategorizationDemo = () => {
  const [emailText, setEmailText] = useState('');
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCategorize = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await OpenAIService.categorizeEmailTopic(emailText);
      setCategory(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Topic Categorization Demo</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter your email text below</CardTitle>
          <CardDescription>Our AI will categorize the email topic</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            placeholder="Paste your email content here..."
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            rows={6}
            className="w-full p-2 mb-4 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button onClick={handleCategorize} className="w-full" disabled={isLoading}>
            {isLoading ? 'Categorizing...' : 'Categorize Topic'}
          </Button>
        </CardContent>
        {error && (
          <CardFooter>
            <p className="text-red-500">{error}</p>
          </CardFooter>
        )}
        {category && (
          <CardFooter>
            <div>
              <h3 className="font-bold mb-2">Email Category:</h3>
              <p>{category}</p>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default TopicCategorizationDemo;