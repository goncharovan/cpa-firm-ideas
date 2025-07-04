"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Discover innovative business ideas and solutions for CPA firms and accounting professionals.</p>
          </div>
          
          <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-100 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              AI-Powered Tax Document Analyzer
              <span className="block text-2xl text-green-600 font-semibold mt-2">$299/month per client</span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The Problem</h4>
                <p className="text-gray-700 leading-relaxed">
                  Small businesses struggle with tax compliance, spending hours manually reviewing documents and missing deductions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">The Solution</h4>
                <p className="text-gray-700 leading-relaxed">
                  AI tool that automatically analyzes receipts, invoices, and financial documents to identify tax-saving opportunities.
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
    </div>
  );
}
