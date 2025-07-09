'use client'
import React from 'react'
import { BookOpen, Clock, Star, TrendingUp, PlayCircle, Users, Target, Lightbulb } from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function Guides() {
  const guides = [
    {
      id: 1,
      title: "Complete Beginner's Guide to Sneaker Reselling",
      description: "Learn the fundamentals of sneaker reselling from buying to selling",
      duration: "45 min",
      difficulty: "Beginner",
      rating: 4.8,
      students: 2450,
      thumbnail: "/images/air-jordan-black-cat.jpg",
      category: "Sneakers"
    },
    {
      id: 2,
      title: "Supreme Drop Strategy: How to Hit Every Time",
      description: "Master the art of copping Supreme drops with proven strategies",
      duration: "30 min",
      difficulty: "Advanced",
      rating: 4.9,
      students: 1890,
      thumbnail: "/images/supreme-hoodie.jpg",
      category: "Streetwear"
    },
    {
      id: 3,
      title: "Console Flipping: PlayStation & Xbox Guide",
      description: "Everything you need to know about console reselling",
      duration: "25 min",
      difficulty: "Intermediate",
      rating: 4.7,
      students: 1200,
      thumbnail: "/images/ps5-pro.jpg",
      category: "Electronics"
    },
    {
      id: 4,
      title: "Market Analysis: Finding the Next Big Drop",
      description: "Learn how to identify profitable opportunities before they happen",
      duration: "35 min",
      difficulty: "Intermediate",
      rating: 4.6,
      students: 980,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop&crop=center&q=80",
      category: "Strategy"
    },
    {
      id: 5,
      title: "Building Your Resell Business: From Side Hustle to Full-Time",
      description: "Scale your reselling operation into a sustainable business",
      duration: "60 min",
      difficulty: "Advanced",
      rating: 4.9,
      students: 1560,
      thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop&crop=center&q=80",
      category: "Business"
    },
    {
      id: 6,
      title: "Authentication & Avoiding Fakes",
      description: "Protect yourself from counterfeit products and learn authentication",
      duration: "40 min",
      difficulty: "Beginner",
      rating: 4.8,
      students: 2100,
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop&crop=center&q=80",
      category: "Safety"
    }
  ]

  const categories = [
    { name: "All", count: guides.length, active: true },
    { name: "Sneakers", count: 12, active: false },
    { name: "Streetwear", count: 8, active: false },
    { name: "Electronics", count: 6, active: false },
    { name: "Strategy", count: 10, active: false },
    { name: "Business", count: 4, active: false }
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="guides" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Guides & Tutorials</h1>
          <p className="text-gray-600">Learn from experts and master the art of profitable reselling</p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">40+</p>
            <p className="text-sm text-gray-600">Expert Guides</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">15k+</p>
            <p className="text-sm text-gray-600">Students</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">87%</p>
            <p className="text-sm text-gray-600">Success Rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 text-center">
            <Lightbulb className="h-8 w-8 text-orange-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">24/7</p>
            <p className="text-sm text-gray-600">Support</p>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={guide.thumbnail} alt={guide.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(guide.difficulty)}`}>
                    {guide.difficulty}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                  <PlayCircle className="h-12 w-12 text-white opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-blue-600 font-medium">{guide.category}</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{guide.rating}</span>
                  </div>
                </div>
                
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{guide.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {guide.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {guide.students.toLocaleString()}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  Start Guide
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Reselling Journey?</h2>
          <p className="text-blue-100 mb-6">Join thousands of successful resellers who learned with our guides</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Get Full Access
          </button>
        </div>
      </div>
    </div>
  )
}