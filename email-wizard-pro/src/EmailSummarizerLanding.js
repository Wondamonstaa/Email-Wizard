import React from 'react';
import { Button } from "./components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/Card"
import { Mail, List, Calendar, Bell, Check, Globe, Clock, FileText, Users, Zap, Sun, Moon } from 'lucide-react'
import { useTheme } from './contexts/ThemeContext';
import { motion } from 'framer-motion';

const EmailSummarizerLanding = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-dark-200 text-dark-900' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-dark-300' : 'bg-white'} shadow-md transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Mail className={`h-8 w-8 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'} mr-2`} />
            <span className="text-2xl font-bold">Email Wizard Pro</span>
          </div>
          <nav className="flex items-center">
            <ul className="flex space-x-8 mr-8">
              <li><a href="#features" className={`hover:text-primary-500 transition-colors duration-200 ${isDarkMode ? 'text-dark-800' : 'text-gray-600'}`}>Features</a></li>
              <li><a href="#pricing" className={`hover:text-primary-500 transition-colors duration-200 ${isDarkMode ? 'text-dark-800' : 'text-gray-600'}`}>Pricing</a></li>
              <li><a href="#contact" className={`hover:text-primary-500 transition-colors duration-200 ${isDarkMode ? 'text-dark-800' : 'text-gray-600'}`}>Contact</a></li>
            </ul>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className={isDarkMode ? 'text-dark-900' : 'text-gray-600'}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Master Your Inbox with <span className="text-primary-500">AI-Powered Intelligence</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Email Wizard Pro uses advanced AI to summarize, prioritize, and manage your emails, saving you hours every week and boosting your productivity.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className={`py-20 ${isDarkMode ? 'bg-dark-300' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Powerful AI-Driven Features
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<Mail />} title="Smart Summaries" description="Get concise, AI-generated summaries of your emails, highlighting key points and action items." />
            <FeatureCard icon={<List />} title="Priority Sorting" description="Our AI automatically categorizes your emails by importance, helping you focus on what matters most." />
            <FeatureCard icon={<Zap />} title="Topic Categorization" description="Automatically organize emails into custom categories like Work, Personal, Finance, and Travel." />
            <FeatureCard icon={<Users />} title="Sentiment Analysis" description="Understand the tone of your emails with quick sentiment scores (positive, neutral, negative)." />
            <FeatureCard icon={<Calendar />} title="Meeting Scheduler" description="Detect scheduling requests and seamlessly integrate with your calendar for easy meeting planning." />
            <FeatureCard icon={<Bell />} title="Smart Reminders" description="Never miss an important follow-up with AI-powered reminders based on email content." />
            <FeatureCard icon={<FileText />} title="Attachment Summary" description="Get brief overviews of attached documents without opening them." />
            <FeatureCard icon={<Globe />} title="Language Translation" description="Instantly translate emails from foreign languages to your preferred language." />
            <FeatureCard icon={<Clock />} title="Time-to-Read Estimate" description="Know at a glance how long it will take to read each email." />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 ${isDarkMode ? 'bg-dark-200' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Choose the Perfect Plan for You
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <PricingCard 
              title="Basic" 
              price="$9.99" 
              description="For personal use" 
              features={[
                "Up to 100 emails/day",
                "Smart Summaries",
                "Priority Sorting",
                "Topic Categorization",
                "Sentiment Analysis"
              ]}
            />
            <PricingCard 
              title="Pro" 
              price="$24.99" 
              description="For power users" 
              isPopular={true}
              features={[
                "Unlimited emails",
                "All Basic features",
                "Meeting Scheduler",
                "Smart Reminders",
                "Attachment Summary",
                "Language Translation",
                "Time-to-Read Estimate"
              ]}
            />
            <PricingCard 
              title="Enterprise" 
              price="Custom" 
              description="For teams and businesses" 
              features={[
                "All Pro features",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantees",
                "Team collaboration tools",
                "Advanced analytics"
              ]}
              customCTA="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDarkMode ? 'bg-primary-700' : 'bg-primary-600'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to revolutionize your email management?</span>
            <span className="block">Start your free 14-day trial today.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200">
                Get started
              </Button>
            </div>
            <div className="ml-3 inline-flex">
              <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-700 hover:bg-primary-800 transition-colors duration-200">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-dark-400' : 'bg-gray-900'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-white mr-2" />
              <span className="text-white text-lg font-semibold">Email Wizard Pro</span>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Email Wizard Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`h-full transition-shadow duration-300 hover:shadow-lg ${isDarkMode ? 'bg-dark-400 text-dark-900' : 'bg-white'}`}>
        <CardHeader>
          {React.cloneElement(icon, { className: `h-8 w-8 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'} mb-2` })}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
      </Card>
    </motion.div>
  );
};

const PricingCard = ({ title, price, description, features, isPopular = false, customCTA }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`relative h-full transition-shadow duration-300 hover:shadow-lg ${isDarkMode ? 'bg-dark-400 text-dark-900' : 'bg-white'} ${isPopular ? 'border-primary-500 border-2' : ''}`}>
        {isPopular && (
          <span className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-bl">
            Most Popular
          </span>
        )}
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{price}<span className="text-base font-normal">/month</span></p>
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" /> {feature}
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className={`w-full ${isPopular ? 'bg-primary-500 hover:bg-primary-600' : ''} transition-colors duration-200`}>
            {customCTA || `Choose ${title}`}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EmailSummarizerLanding;