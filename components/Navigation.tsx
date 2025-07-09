'use client'
import React, { useState } from 'react'
import { TrendingUp, User, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from './AuthModal'

interface NavigationProps {
  currentPage?: string
}

export default function Navigation({ currentPage = '' }: NavigationProps) {
  const { user, signOut } = useAuth()
  const [showAuthModal, setShowAuthModal] = useState(false)

  const handleSignOut = async () => {
    try {
      await signOut()
    } catch (error) {
      console.error('Sign out error:', error)
    }
  }

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">upsell</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a 
                href="/" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Home
              </a>
              <a 
                href="/drops" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'drops' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Drops
              </a>
              <a 
                href="/resell" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'resell' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Resell Hub
              </a>
              <a 
                href="/guides" 
                className={`px-3 py-2 text-sm font-medium ${
                  currentPage === 'guides' ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Guides
              </a>
              
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-600 mr-1" />
                    <span className="text-sm text-gray-700">{user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </nav>
  )
}