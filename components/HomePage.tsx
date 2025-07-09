import React from 'react';
import { Clock, CheckCircle, TrendingUp, Users, Zap, Target } from 'lucide-react';
import Navigation from './Navigation';

const HomePage = () => {
  // Mock data for featured drops
  const featuredDrops = [
    {
      id: 1,
      name: "Air Jordan 4 'Black Cat'",
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300&h=300&fit=crop&crop=center&q=80",
      dropDate: "2025-06-15T10:00:00Z",
      description: "Classic retro colorway, high resale value",
      difficulty: "Beginner",
      expectedProfit: "$120-180"
    },
    {
      id: 2,
      name: "PlayStation 5 Pro",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=300&h=300&fit=crop&crop=center&q=80",
      dropDate: "2025-06-20T12:00:00Z",
      description: "Limited console release",
      difficulty: "Intermediate", 
      expectedProfit: "$200-350"
    },
    {
      id: 3,
      name: "Supreme Box Logo Hoodie",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop&crop=center&q=80",
      dropDate: "2025-06-18T11:00:00Z", 
      description: "Weekly Supreme drop",
      difficulty: "Advanced",
      expectedProfit: "$300-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      text: "Made $800 profit in my first month. The guides made it so easy!",
      profit: "$800"
    },
    {
      name: "Mike R.", 
      text: "Finally broke into sneaker reselling thanks to the alerts.",
      profit: "$1,200"
    },
    {
      name: "Jessica L.",
      text: "From complete beginner to consistent profits in 3 weeks.",
      profit: "$650"
    }
  ];

  const getTimeUntilDrop = (dropDate: string) => {
    const now = new Date().getTime();
    const drop = new Date(dropDate).getTime();
    const difference = drop - now;
    
    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      
      if (days > 0) return `${days}d ${hours}h`;
      if (hours > 0) return `${hours}h ${minutes}m`;
      return `${minutes}m`;
    }
    return "Live Now!";
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'; 
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Never Miss a <span className="text-blue-600">Drop</span> Again
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Real-time alerts, easy guides, and effortless reselling. 
              Join thousands making consistent profits from the comfort of home.
            </p>
            <a href="/guides" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              Start Flipping Now →
            </a>
            <p className="text-sm text-gray-500 mt-4">No experience needed • 7-day free trial</p>
          </div>
        </div>
      </section>

      {/* Featured Drops */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Drops</h2>
            <p className="text-gray-600">Don't miss these high-profit opportunities</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDrops.map((drop) => (
              <div key={drop.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative">
                  <img src={drop.image} alt={drop.name} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(drop.difficulty)}`}>
                      {drop.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{drop.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{drop.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">{getTimeUntilDrop(drop.dropDate)}</span>
                    </div>
                    <span className="text-green-600 font-medium text-sm">{drop.expectedProfit}</span>
                  </div>
                  
                  <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                    Learn How to Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
            <p className="text-gray-600">From complete beginner to consistent profits</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Real-time Alerts</h3>
              <p className="text-gray-600 text-sm">Get notified the second drops go live. Never miss another opportunity.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Step-by-step Guides</h3>
              <p className="text-gray-600 text-sm">Detailed tutorials for every drop. Know exactly what to do and when.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Market Insights</h3>
              <p className="text-gray-600 text-sm">Data-driven analytics to maximize your profits and minimize risks.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Expert Community</h3>
              <p className="text-gray-600 text-sm">Learn from successful resellers and get support when you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600">Real results from real users</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{testimonial.profit}</span>
                  <p className="text-sm text-gray-600">in profits</p>
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-medium text-gray-900">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Making Money?</h2>
          <p className="text-blue-100 mb-8 text-lg">Join thousands of successful resellers. Start your 7-day free trial today.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg">
            Get Started Free
          </button>
          <p className="text-blue-200 text-sm mt-4">Cancel anytime • No credit card required</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-lg font-bold">upsell</span>
              </div>
              <p className="text-gray-400 text-sm">Making reselling accessible to everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/drops">Drops</a></li>
                <li><a href="/guides">Guides</a></li>
                <li><a href="/analytics">Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/help">Help Center</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/community">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/about">About</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;