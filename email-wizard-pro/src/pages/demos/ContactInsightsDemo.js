import React, { useState } from 'react';
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/Card";
import OpenAIService from '../../services/OpenAIService';

const ContactInsightsDemo = () => {
  const [emailHistory, setEmailHistory] = useState('');
  const [insights, setInsights] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerateInsights = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await OpenAIService.generateContactInsights(emailHistory);
      setInsights(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Insights Demo</h1>
      <Card>
        <CardHeader>
          <CardTitle>Enter email history with a contact</CardTitle>
          <CardDescription>Our AI will analyze communication patterns and provide insights</CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            placeholder="Paste a summary or examples of email exchanges with a contact..."
            value={emailHistory}
            onChange={(e) => setEmailHistory(e.target.value)}
            rows={6}
            className="w-full p-2 mb-4 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button onClick={handleGenerateInsights} className="w-full" disabled={isLoading}>
            {isLoading ? 'Generating Insights...' : 'Generate Insights'}
          </Button>
        </CardContent>
        {error && (
          <CardFooter>
            <p className="text-red-500">{error}</p>
          </CardFooter>
        )}
        {insights && (
          <CardFooter>
            <div>
              <h3 className="font-bold mb-2">Contact Insights:</h3>
              <ul className="list-disc pl-5">
                {insights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </div>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default ContactInsightsDemo;