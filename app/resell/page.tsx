'use client'
import React from 'react'
import { TrendingUp, DollarSign, BarChart3, Package, Search, Filter } from 'lucide-react'
import Navigation from '../../components/Navigation'

export default function ResellHub() {
  const marketData = [
    {
      id: 1,
      name: "Air Jordan 4 'Black Cat'",
      image: "/images/air-jordan-black-cat.jpg",
      avgPrice: "$380",
      priceChange: "+12%",
      sales: "2,450",
      trend: "up"
    },
    {
      id: 2,
      name: "PlayStation 5 Pro",
      image: "/images/ps5-pro.jpg",
      avgPrice: "$1,050",
      priceChange: "+8%",
      sales: "890",
      trend: "up"
    },
    {
      id: 3,
      name: "Supreme Box Logo Hoodie",
      image: "/images/supreme-hoodie.jpg",
      avgPrice: "$520",
      priceChange: "-5%",
      sales: "1,200",
      trend: "down"
    }
  ]

  const myInventory = [
    {
      id: 1,
      name: "Air Jordan 1 High 'Chicago'",
      size: "10.5",
      purchasePrice: "$170",
      currentValue: "$450",
      profit: "$280",
      status: "Listed"
    },
    {
      id: 2,
      name: "Travis Scott Jordan 1 Low",
      size: "9",
      purchasePrice: "$150",
      currentValue: "$1,200",
      profit: "$1,050",
      status: "Sold"
    }
  ]

  const topCategories = [
    { name: "Sneakers", volume: "45%", trend: "+15%" },
    { name: "Streetwear", volume: "30%", trend: "+8%" },
    { name: "Electronics", volume: "15%", trend: "+22%" },
    { name: "Collectibles", volume: "10%", trend: "+5%" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage="resell" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resell Hub</h1>
          <p className="text-gray-600">Market insights, inventory management, and selling tools</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Profit</p>
                <p className="text-2xl font-bold text-green-600">$3,240</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-sm text-green-600 mt-2">+18% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Items Sold</p>
                <p className="text-2xl font-bold text-blue-600">24</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-sm text-blue-600 mt-2">+12% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Profit</p>
                <p className="text-2xl font-bold text-purple-600">$135</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-sm text-purple-600 mt-2">+8% from last month</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Success Rate</p>
                <p className="text-2xl font-bold text-orange-600">89%</p>
              </div>
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <p className="text-sm text-orange-600 mt-2">+3% from last month</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Market Data */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Market Data</h2>
              <div className="flex gap-2">
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Search className="h-4 w-4" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-900">
                  <Filter className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {marketData.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-lg object-cover mr-4" />
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{item.avgPrice}</p>
                    <p className={`text-sm ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {item.priceChange}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Inventory */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Inventory</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {myInventory.map((item) => (
                <div key={item.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Sold' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Size: {item.size}</p>
                      <p className="text-gray-600">Purchase: {item.purchasePrice}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Current: {item.currentValue}</p>
                      <p className="text-green-600 font-medium">Profit: {item.profit}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Categories */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {topCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.volume} of sales</p>
                <p className="text-sm text-green-600 font-medium">{category.trend}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}