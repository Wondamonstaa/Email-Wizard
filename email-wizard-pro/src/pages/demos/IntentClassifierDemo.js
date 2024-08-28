import React, { useState } from 'react';
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card";
import OpenAIService from '../../services/OpenAIService';

const IntentClassifierDemo = () => {
  const [emailText, setEmailText] = useState('');
  const [intent, setIntent] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClassifyIntent = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await OpenAIService.classifyEmailIntent(emailText);
      setIntent(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Email Intent Classifier Demo</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter your email text below</CardTitle>
          <CardDescription>Our AI will classify the intent of the email</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            placeholder="Paste your email content here..."
            value={emailText}
            onChange={(e) => setEmailText(e.target.value)}
            rows={6}
            className="w-full p-2 mb-4 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button onClick={handleClassifyIntent} className="w-full" disabled={isLoading}>
            {isLoading ? 'Classifying...' : 'Classify Intent'}
          </Button>
        </CardContent>
        {error && (
          <CardFooter>
            <p className="text-red-500">{error}</p>
          </CardFooter>
        )}
        {intent && (
          <CardFooter>
            <div>
              <h3 className="font-bold mb-2">Email Intent:</h3>
              <p>{intent}</p>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default IntentClassifierDemo;