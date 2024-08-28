import React from 'react';
import { Button } from "./components/ui/Button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/Card"
import { Mail, List, Calendar, Bell, Check, Globe, Clock, FileText, Users, Zap, Sun, Moon, ArrowRight } from 'lucide-react'
import { useTheme } from './contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Features from './components/Features';

const EmailSummarizerLanding = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300 sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Mail className={`h-8 w-8 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'} mr-2`} />
            <span className="text-2xl font-bold">Email Wizard Pro</span>
          </div>
          <nav className="flex items-center">
            <ul className="flex space-x-8 mr-8">
              <li><a href="#features" className={`hover:text-primary-500 transition-colors duration-200 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Features</a></li>
              <li><a href="#pricing" className={`hover:text-primary-500 transition-colors duration-200 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pricing</a></li>
              <li><a href="#contact" className={`hover:text-primary-500 transition-colors duration-200 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Contact</a></li>
            </ul>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary-600 to-primary-400 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl mb-6">
            Master Your Inbox with <span className="text-yellow-300">AI-Powered Intelligence</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
            Email Wizard Pro uses advanced AI to summarize, prioritize, and manage your emails, saving you hours every week and boosting your productivity.
          </p>
          <div className="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
            <div className="rounded-md shadow">
              <Button className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200">
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Powerful AI-Driven Features
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<Mail />} title="Email Summarizer" description="Get concise, AI-generated summaries of your emails, highlighting key points and action items." link="/feature/summarizer" />
            <FeatureCard icon={<Users />} title="Sentiment Analysis" description="Understand the tone of your emails with quick sentiment scores (positive, neutral, negative)." link="/feature/sentiment-analysis" />
            <FeatureCard icon={<Users />} title="Contact Insights" description="Analyze communication patterns and provide personalized talking points for each contact." link="/feature/contact-insights" />
            <FeatureCard icon={<Mail />} title="Intent Classifier" description="Automatically classify and route emails based on their intent (e.g., request, complaint, sales inquiry)." link="/feature/intent-classifier" />
            <FeatureCard icon={<Zap />} title="Topic Categorization" description="Automatically organize emails into custom categories like Work, Personal, Finance, and Travel." link="/feature/topic-categorization" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-10">
            Choose the Perfect Plan for You
          </h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <PricingCard 
              title="Basic" 
              price="$4.99" 
              description="For personal use" 
              features={[
                "Smart Summaries",
                "Priority Sorting",
                "Topic Categorization",
                "Sentiment Analysis"
              ]}
            />
            <PricingCard 
              title="Pro" 
              price="$9.99" 
              description="For power users" 
              isPopular={true}
              features={[
                "All Basic features",
                "Meeting Scheduler",
                "Smart Reminders",
                "Attachment Summary",
                "Language Translation"
              ]}
            />
            <PricingCard 
              title="Enterprise" 
              price="$17.99" 
              description="For teams and businesses" 
              features={[
                "All Pro features",
                "AI-Powered Email Triage",
                "Email Chain Summarizer",
                "Contextual Contact Insights",
                "Predictive Email Prioritization",
                "Email Intent Classifier",
                "Priority Support"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r from-primary-600 to-primary-400 transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to revolutionize your email management?</span>
            <span className="block mt-2">Start your free 14-day trial today.</span>
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-colors duration-200">
                Get started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} text-white transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Product</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#features" className="text-base text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Support</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">API Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
            <p className="text-base text-gray-400">&copy; 2024 Email Wizard Pro. All rights reserved.</p>
            <div className="flex space-x-6">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, link }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`h-full transition-shadow duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'}`}>
        <CardHeader>
          {React.cloneElement(icon, { className: `h-8 w-8 ${isDarkMode ? 'text-primary-400' : 'text-primary-600'} mb-2` })}
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter>
          <Link to={link} className="w-full">
            <Button className="w-full">Try Feature</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const PricingCard = ({ title, price, description, features, isPopular = false }) => {
  const { isDarkMode } = useTheme();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`relative h-full transition-shadow duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800 text-gray-100' : 'bg-white'} ${isPopular ? 'border-primary-500 border-2' : ''}`}>
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
            Choose {title}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default EmailSummarizerLanding;