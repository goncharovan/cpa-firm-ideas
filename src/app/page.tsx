"use client";
import React, { useState } from "react";
import Link from "next/link";

// Sample related ideas data
const relatedIdeas = [
  {
    id: 1,
    title: "Automated Expense Categorization Tool",
    description: "AI-powered software that automatically categorizes business expenses for tax purposes",
    price: "$149/month",
    opportunityScore: 8.7,
    marketSize: "$1.8B",
    category: "Tax Automation"
  },
  {
    id: 2,
    title: "Client Portal with Real-time Collaboration",
    description: "Secure platform for CPAs and clients to share documents and collaborate on tax preparation",
    price: "$199/month",
    opportunityScore: 8.9,
    marketSize: "$3.2B",
    category: "Client Management"
  },
  {
    id: 3,
    title: "Compliance Monitoring Dashboard",
    description: "Real-time tracking of regulatory changes and automated compliance alerts for accounting firms",
    price: "$299/month",
    opportunityScore: 8.4,
    marketSize: "$2.1B",
    category: "Compliance"
  },
  {
    id: 4,
    title: "Automated Bookkeeping Assistant",
    description: "AI tool that handles routine bookkeeping tasks and reconciliations for small businesses",
    price: "$99/month",
    opportunityScore: 9.1,
    marketSize: "$4.5B",
    category: "Bookkeeping"
  }
];

// Sample ideas for different dates
const dailyIdeas = [
  {
    date: "Jul 4, 2025",
    title: "AI-Powered Tax Document Analyzer",
    description: "AI tool that automatically analyzes receipts, invoices, and financial documents to identify tax-saving opportunities.",
    price: "$299/month per client",
    opportunityScore: 9.2,
    problemSeverity: 8.5,
    feasibility: 7.8,
    marketSize: "$2.5B+"
  },
  {
    date: "Jul 3, 2025",
    title: "Smart Client Onboarding Platform",
    description: "Automated client intake and document collection system that reduces onboarding time by 70%.",
    price: "$199/month",
    opportunityScore: 8.8,
    problemSeverity: 8.2,
    feasibility: 8.1,
    marketSize: "$1.9B+"
  },
  {
    date: "Jul 2, 2025",
    title: "Real-time Tax Law Update Tracker",
    description: "Instant notifications and analysis of tax law changes affecting client businesses.",
    price: "$149/month",
    opportunityScore: 8.6,
    problemSeverity: 7.9,
    feasibility: 8.3,
    marketSize: "$1.2B+"
  }
];

export default function Home() {
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const currentIdea = dailyIdeas[currentIdeaIndex];

  const goToPrevious = () => {
    setCurrentIdeaIndex((prev) => (prev > 0 ? prev - 1 : dailyIdeas.length - 1));
  };

  const goToNext = () => {
    setCurrentIdeaIndex((prev) => (prev < dailyIdeas.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Top Horizontal Menu */}
      <nav className="w-full bg-white/90 border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex justify-center space-x-8 h-12 items-center">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Idea Database</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Trends</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Idea Agent<span className="ml-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full align-middle">Beta</span></a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">Pricing</a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">More</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">CPA Firm Ideas</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900 font-medium">
                Sign In
              </Link>
              <Link 
                href="/auth/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CPA Firm Ideas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover business ideas and solutions for CPA firms and accounting consultants.</p>
          </div>
          
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl">
            {/* Date Scroller */}
            <div className="flex items-center justify-center mb-8">
              <button 
                onClick={goToPrevious}
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Previous
              </button>
              
              <div className="mx-6 text-center">
                <div className="text-lg font-semibold text-gray-900">Idea of the Day</div>
                <div className="text-sm text-gray-600 mt-1">{currentIdea.date}</div>
              </div>
              
              <button 
                onClick={goToNext}
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Next Idea
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                Share Idea
              </button>
              <button className="flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Save Idea
              </button>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight text-center">
              {currentIdea.title}
              <span className="block text-2xl text-green-600 font-semibold mt-2">{currentIdea.price}</span>
            </h3>

            {/* Centered Problem Description */}
            <div className="flex justify-center">
              <div className="max-w-2xl text-center mx-auto mb-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
                  Small businesses struggle with tax compliance, spending hours manually reviewing documents and missing deductions.
                </p>
              </div>
            </div>

            {/* Solution Description */}
            <div className="flex justify-center">
              <div className="max-w-2xl text-center mx-auto mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                <p className="text-gray-700 leading-relaxed">
                  {currentIdea.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-green-600 mb-1">{currentIdea.opportunityScore}</div>
                <div className="text-sm text-gray-600 font-medium">Opportunity Score</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-red-600 mb-1">{currentIdea.problemSeverity}</div>
                <div className="text-sm text-gray-600 font-medium">Problem Severity</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-blue-600 mb-1">{currentIdea.feasibility}</div>
                <div className="text-sm text-gray-600 font-medium">Feasibility</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                <div className="text-3xl font-bold text-purple-600 mb-1">{currentIdea.marketSize}</div>
                <div className="text-sm text-gray-600 font-medium">Market Size</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Like This Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">More Like This</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover more innovative business ideas for CPA firms and accounting professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedIdeas.map((idea) => (
              <div key={idea.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {idea.category}
                  </span>
                  <div className="text-sm font-bold text-green-600">{idea.price}</div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {idea.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {idea.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm font-bold text-green-600">{idea.opportunityScore}</div>
                    <div className="text-xs text-gray-500">Opportunity</div>
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    {idea.marketSize} market
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-gray-50 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/auth/signup" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Explore All Ideas
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trending Categories</h2>
            <p className="text-lg text-gray-600">
              Explore business ideas by category
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Tax Automation", count: "24 ideas", color: "bg-green-100 text-green-800" },
              { name: "Client Management", count: "18 ideas", color: "bg-blue-100 text-blue-800" },
              { name: "Compliance & Risk", count: "15 ideas", color: "bg-purple-100 text-purple-800" },
              { name: "Bookkeeping Tools", count: "22 ideas", color: "bg-orange-100 text-orange-800" },
              { name: "Financial Planning", count: "12 ideas", color: "bg-red-100 text-red-800" },
              { name: "Audit Support", count: "9 ideas", color: "bg-indigo-100 text-indigo-800" }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${category.color}`}>
                    {category.name}
                  </span>
                  <span className="text-sm text-gray-500">{category.count}</span>
                </div>
                <button className="w-full text-left text-gray-700 hover:text-gray-900 font-medium">
                  Browse {category.name} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
