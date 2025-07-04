"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { data: session, status } = useSession();
  const [activeTab, setActiveTab] = useState("ideas");

  // If user is logged in, show the dashboard
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">CPA Firm Ideas</h1>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Welcome, {session.user?.name}</span>
                <Link href="/api/auth/signout" className="text-sm text-blue-600 hover:text-blue-800">
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8">
              {["ideas", "trends", "saved", "profile"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {activeTab === "ideas" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-5xl font-playfair font-bold text-gray-900 mb-2 flex items-center justify-center">
                    CPA Firm Idea of the Day
                  </h2>
                  <div className="text-sm text-gray-500">July 4, 2025</div>
                </div>
                
                {/* Scroller Bar */}
                <div className="flex justify-center items-center gap-8 mb-8 text-gray-500 text-xl font-medium">
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  <span className="hidden sm:inline-block h-6 w-px bg-gray-300 mx-2"></span>
                  <span className="flex items-center gap-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" />
                    </svg>
                    Jul 4, 2025
                  </span>
                  <span className="hidden sm:inline-block h-6 w-px bg-gray-300 mx-2"></span>
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    Next Idea
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Featured Idea */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Idea of the Day</span>
                      <div className="flex space-x-2">
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Perfect Timing</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Massive Market</span>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">High Revenue</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    AI-Powered Tax Document Analyzer ($299/month)
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Small businesses struggle with tax compliance, spending hours manually reviewing documents and missing deductions. This AI tool automatically analyzes receipts, invoices, and financial documents to identify tax-saving opportunities, flag compliance issues, and generate audit-ready reports. The platform integrates with popular accounting software and provides real-time insights that help CPAs deliver more value to clients while reducing manual work by 70%.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">9.2</div>
                        <div className="text-xs text-gray-500">Opportunity</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600">8.5</div>
                        <div className="text-xs text-gray-500">Problem</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">7.8</div>
                        <div className="text-xs text-gray-500">Feasibility</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">Market Size</div>
                      <div className="text-lg font-semibold text-gray-900">$2.5B+</div>
                    </div>
                  </div>
                </div>

                {/* More Ideas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Subscription-Based Tax Planning Service",
                      description: "Monthly tax planning service for small businesses with quarterly reviews and year-end optimization.",
                      revenue: "$199/month",
                      market: "$1.8B",
                      score: 8.7
                    },
                    {
                      title: "Crypto Tax Compliance Platform",
                      description: "Specialized platform for cryptocurrency tax reporting and compliance for crypto investors.",
                      revenue: "$149/month",
                      market: "$3.2B",
                      score: 9.1
                    },
                    {
                      title: "Remote Work Tax Optimization Tool",
                      description: "Help remote workers optimize their tax situation across multiple states and countries.",
                      revenue: "$99/month",
                      market: "$1.2B",
                      score: 8.3
                    },
                    {
                      title: "E-commerce Tax Automation",
                      description: "Automated tax calculation and filing for e-commerce businesses across multiple platforms.",
                      revenue: "$299/month",
                      market: "$2.1B",
                      score: 8.9
                    },
                    {
                      title: "Real Estate Tax Advisory Service",
                      description: "Specialized tax advisory for real estate investors and property management companies.",
                      revenue: "$399/month",
                      market: "$1.5B",
                      score: 8.6
                    },
                    {
                      title: "Freelancer Tax Management Platform",
                      description: "Comprehensive tax management for freelancers including expense tracking and quarterly payments.",
                      revenue: "$79/month",
                      market: "$900M",
                      score: 8.4
                    }
                  ].map((idea, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900 text-lg">{idea.title}</h4>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{idea.description}</p>
                      <div className="flex justify-between items-center">
                        <div className="text-sm">
                          <div className="text-gray-500">Revenue: <span className="font-semibold text-green-600">{idea.revenue}</span></div>
                          <div className="text-gray-500">Market: <span className="font-semibold">{idea.market}</span></div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{idea.score}</div>
                          <div className="text-xs text-gray-500">Score</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "trends" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900">Market Trends</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-sm border">
                    <div className="px-6 py-4 border-b">
                      <h3 className="text-lg font-medium text-gray-900">Emerging Opportunities</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">AI-Powered Tax Software</span>
                          <span className="text-green-600 font-semibold">+45%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Crypto Tax Services</span>
                          <span className="text-green-600 font-semibold">+78%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Remote Work Tax Solutions</span>
                          <span className="text-green-600 font-semibold">+32%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">E-commerce Tax Automation</span>
                          <span className="text-green-600 font-semibold">+56%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-sm border">
                    <div className="px-6 py-4 border-b">
                      <h3 className="text-lg font-medium text-gray-900">Industry Insights</h3>
                    </div>
                    <div className="p-6">
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                          <h4 className="font-medium text-gray-900">Automation Demand</h4>
                          <p className="text-sm text-gray-600">73% of small businesses want automated tax solutions</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                          <h4 className="font-medium text-gray-900">Subscription Models</h4>
                          <p className="text-sm text-gray-600">Monthly services preferred over one-time payments</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                          <h4 className="font-medium text-gray-900">AI Integration</h4>
                          <p className="text-sm text-gray-600">AI tools can reduce manual work by 60-80%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="px-6 py-4 border-b">
                    <h3 className="text-lg font-medium text-gray-900">Weekly Trend Report</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 mb-4">
                      This week&apos;s analysis shows a significant increase in demand for automated tax solutions, 
                      particularly in the e-commerce and cryptocurrency sectors. Small businesses are increasingly 
                      looking for subscription-based services that provide ongoing value rather than one-time consultations.
                    </p>
                    <div className="flex space-x-4">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Download Full Report
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                        Share Insights
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "saved" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900">Saved Ideas</h2>
                  <div className="text-sm text-gray-500">12 saved ideas</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      title: "AI-Powered Tax Document Analyzer",
                      savedDate: "Jul 3, 2025",
                      category: "Automation",
                      score: 9.2
                    },
                    {
                      title: "Crypto Tax Compliance Platform",
                      savedDate: "Jul 2, 2025",
                      category: "Cryptocurrency",
                      score: 9.1
                    },
                    {
                      title: "Subscription-Based Tax Planning",
                      savedDate: "Jul 1, 2025",
                      category: "Services",
                      score: 8.7
                    },
                    {
                      title: "E-commerce Tax Automation",
                      savedDate: "Jun 30, 2025",
                      category: "E-commerce",
                      score: 8.9
                    },
                    {
                      title: "Remote Work Tax Optimization",
                      savedDate: "Jun 29, 2025",
                      category: "Remote Work",
                      score: 8.3
                    },
                    {
                      title: "Real Estate Tax Advisory",
                      savedDate: "Jun 28, 2025",
                      category: "Real Estate",
                      score: 8.6
                    }
                  ].map((idea, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-semibold text-gray-900">{idea.title}</h4>
                        <button className="text-red-400 hover:text-red-600">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Saved: {idea.savedDate}</span>
                          <span className="text-blue-600 font-semibold">{idea.score}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{idea.category}</span>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "profile" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900">Profile & Preferences</h2>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border">
                  <div className="px-6 py-4 border-b">
                    <h3 className="text-lg font-medium text-gray-900">Account Settings</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Profile Information</label>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm text-gray-600">Name</label>
                            <input 
                              type="text" 
                              defaultValue={session.user?.name || ""}
                              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-gray-600">Email</label>
                            <input 
                              type="email" 
                              defaultValue={session.user?.email || ""}
                              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Idea Preferences</label>
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <input type="checkbox" id="daily-ideas" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor="daily-ideas" className="ml-2 text-sm text-gray-700">Daily idea emails</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="trend-reports" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor="trend-reports" className="ml-2 text-sm text-gray-700">Weekly trend reports</label>
                          </div>
                          <div className="flex items-center">
                            <input type="checkbox" id="market-insights" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                            <label htmlFor="market-insights" className="ml-2 text-sm text-gray-700">Market insights</label>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Automation", "E-commerce", "Cryptocurrency", "Real Estate", "Remote Work", "AI/ML", "SaaS", "Consulting"].map((area) => (
                            <div key={area} className="flex items-center">
                              <input type="checkbox" id={area.toLowerCase()} className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                              <label htmlFor={area.toLowerCase()} className="ml-2 text-sm text-gray-700">{area}</label>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                          Save Preferences
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    );
  }

  // Landing page for unauthenticated users
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-playfair font-bold text-gray-900">CPA Firm Ideas</h1>
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
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Trusted by 2,500+ CPA firms nationwide
            </div>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-8 leading-tight">
              Discover Your Next
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block">Million-Dollar Idea</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Get <span className="font-semibold text-blue-600">daily business ideas</span>, market insights, and growth strategies specifically designed for accounting professionals and CPA firm owners.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">365</div>
                <div className="text-sm text-gray-600">Ideas Per Year</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">$2.5B+</div>
                <div className="text-sm text-gray-600">Market Opportunities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">94%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/auth/signup" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span className="relative z-10">Start Getting Daily Ideas</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <button className="group px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-all duration-300 font-semibold text-lg hover:bg-blue-50">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Sample Ideas
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Featured Idea Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium mb-6">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Today&apos;s Featured Opportunity
              </div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">See What You&apos;ll Discover Daily</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real business opportunities with detailed market analysis, revenue projections, and implementation strategies.</p>
            </div>
            
            <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>Jul 4, 2025</span>
                  </div>
                  <div className="flex space-x-2">
                    <span className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-medium">Perfect Timing</span>
                    <span className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">Massive Market</span>
                    <span className="bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 text-xs px-3 py-1 rounded-full font-medium">High Revenue</span>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-6 leading-tight">
                AI-Powered Tax Document Analyzer
                <span className="block text-2xl text-green-600 font-semibold mt-2">$299/month per client</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Problem</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Small businesses struggle with tax compliance, spending hours manually reviewing documents and missing deductions. CPAs waste valuable time on routine document analysis instead of high-value advisory work.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                  <p className="text-gray-700 leading-relaxed">
                    AI tool that automatically analyzes receipts, invoices, and financial documents to identify tax-saving opportunities, flag compliance issues, and generate audit-ready reports with 70% time savings.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">9.2</div>
                  <div className="text-sm text-gray-600 font-medium">Opportunity Score</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-red-600 mb-1">8.5</div>
                  <div className="text-sm text-gray-600 font-medium">Problem Severity</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-blue-600 mb-1">7.8</div>
                  <div className="text-sm text-gray-600 font-medium">Feasibility</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-100">
                  <div className="text-3xl font-bold text-purple-600 mb-1">$2.5B+</div>
                  <div className="text-sm text-gray-600 font-medium">Market Size</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">Everything You Need to Grow</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive tools and insights designed specifically for CPA firm owners and accounting professionals.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Daily Ideas</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Get fresh, validated business ideas delivered to your inbox every day. Each idea includes market analysis, revenue projections, and implementation strategies.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Curated for CPA firms
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Market validation included
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Revenue projections
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Market Trends</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Stay ahead of the curve with comprehensive market analysis, emerging opportunities, and industry insights that give you a competitive advantage.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Weekly trend reports
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Industry benchmarks
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Competitive analysis
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Growth Strategies</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">Proven tactics and strategies to expand your practice, increase revenue, and build a more profitable accounting business.</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Revenue optimization
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Client acquisition
                    </li>
                    <li className="flex items-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Operational efficiency
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{backgroundImage: 'radial-gradient(circle at 30px 30px, rgba(255,255,255,0.05) 2px, transparent 2px)', backgroundSize: '60px 60px'}}></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          
          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-8 border border-white/20">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Limited Time: Free 30-Day Trial
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
              Ready to Discover Your Next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">Million-Dollar Idea?</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join <span className="font-semibold text-white">2,500+ CPA firms</span> who are already discovering new opportunities and growing their businesses with our daily insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link 
                href="/auth/signup" 
                className="group relative px-10 py-5 bg-white text-blue-600 rounded-2xl hover:bg-gray-50 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center">
                  Start Getting Daily Ideas
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <button className="group px-10 py-5 border-2 border-white/30 text-white rounded-2xl hover:border-white/50 hover:bg-white/10 transition-all duration-300 font-semibold text-xl backdrop-blur-sm">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Watch Demo
                </span>
              </button>
            </div>
            
            {/* Social Proof */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">No credit card required</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">Instant access</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-playfair font-bold mb-4">CPA Firm Ideas</h3>
                <p className="text-gray-400">Empowering CPAs with innovative business solutions and growth strategies.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Daily Ideas</a></li>
                  <li><a href="#" className="hover:text-white">Market Trends</a></li>
                  <li><a href="#" className="hover:text-white">Growth Tools</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 CPA Firm Ideas. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
