import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const FeatureUnderConstruction = () => {
  const { featureName } = useParams();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Feature Under Construction</CardTitle>
        </CardHeader>
        <CardContent>
          <p>The {featureName.replace('-', ' ')} feature is currently under development. Please check back later!</p>
          <Link to="/" className="mt-4 inline-block">
            <Button>Back to Home</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeatureUnderConstruction;