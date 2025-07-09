'use client'
import React from 'react'
import { Clock, Bell, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function Drops() {
  const upcomingDrops = [
    {
      id: 1,
      name: "Air Jordan 4 'Black Cat'",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300&h=300&fit=crop&crop=center&q=80",
      dropDate: "2025-07-15T10:00:00Z",
      retailPrice: "$200",
      estimatedResale: "$320-480",
      difficulty: "Beginner",
      status: "upcoming"
    },
    {
      id: 2,
      name: "PlayStation 5 Pro",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop&crop=center&q=80",
      dropDate: "2025-07-20T12:00:00Z",
      retailPrice: "$700",
      estimatedResale: "$900-1200",
      difficulty: "Intermediate",
      status: "upcoming"
    },
    {
      id: 3,
      name: "Supreme Box Logo Hoodie",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop&crop=center&q=80",
      dropDate: "2025-07-18T11:00:00Z",
      retailPrice: "$168",
      estimatedResale: "$400-700",
      difficulty: "Advanced",
      status: "live"
    }
  ]

  const getTimeUntilDrop = (dropDate: string) => {
    const now = new Date().getTime()
    const drop = new Date(dropDate).getTime()
    const difference = drop - now
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      
      if (days > 0) return `${days}d ${hours}h`
      if (hours > 0) return `${hours}h ${minutes}m`
      return `${minutes}m`
    }
    return "Live Now!"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'live': return <AlertTriangle className="h-4 w-4 text-red-500" />
      case 'upcoming': return <Clock className="h-4 w-4 text-blue-500" />
      case 'ended': return <CheckCircle className="h-4 w-4 text-gray-500" />
      default: return <Clock className="h-4 w-4 text-blue-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="drops" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Drops</h1>
          <p className="text-gray-600">Never miss a profitable opportunity again</p>
        </div>

        {/* Alert Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bell className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-semibold text-gray-900">Drop Alerts</h2>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
              Manage Alerts
            </button>
          </div>
          <p className="text-gray-600 mt-2">Get notified 15 minutes before each drop goes live</p>
        </div>

        {/* Drops Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingDrops.map((drop) => (
            <div key={drop.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <img src={drop.image} alt={drop.name} className="w-full h-48 object-cover" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(drop.difficulty)}`}>
                    {drop.difficulty}
                  </span>
                  <div className="bg-white rounded-full p-1 shadow-sm">
                    {getStatusIcon(drop.status)}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2">{drop.name}</h3>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Drop Time</span>
                    <div className="flex items-center text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{getTimeUntilDrop(drop.dropDate)}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Retail Price</span>
                    <span className="text-sm font-medium text-gray-900">{drop.retailPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Resale Est.</span>
                    <span className="text-sm font-medium text-green-600">{drop.estimatedResale}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Set Alert
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    View Guide
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Drops Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Drops</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                <h3 className="text-lg font-semibold text-red-900">Supreme Box Logo Hoodie</h3>
              </div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-red-700">
                Buy Now
              </button>
            </div>
            <p className="text-red-700 mt-2">Drop is live! Limited stock available.</p>
          </div>
        </div>
      </div>
    </div>
  )
}