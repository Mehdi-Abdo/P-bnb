import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import PropertyCard from '../components/PropertyCard';
import { mockProperties } from '../data/mockData';
import { Crown, TrendingUp, Shield, Award, ArrowRight, Users, Star, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  const [properties, setProperties] = useState(mockProperties);
  const featuredProperties = properties.filter(property => property.featured);

  const handleFavoriteToggle = (propertyId: string) => {
    // Force re-render by updating state
    setProperties([...properties]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg)'
        }}
      >
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your next premium stay
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Discover exceptional places to stay around the world
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <SearchBar showLabels={false} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Properties */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Premium stays
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProperties.map(property => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onFavoriteToggle={handleFavoriteToggle}
              />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Browse by property type
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { type: 'Apartments', image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg' },
              { type: 'Houses', image: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg' },
              { type: 'Villas', image: 'https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg' },
              { type: 'Cabins', image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg' }
            ].map(category => (
              <div key={category.type} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
                  <img
                    src={category.image}
                    alt={category.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{category.type}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Try Hosting Section */}
        <section className="mt-20">
          <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 rounded-3xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
            </div>
            
            <div className="relative px-8 md:px-12 py-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="text-white">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                      <Crown className="h-8 w-8 text-white" />
                    </div>
                    <span className="text-lg font-semibold text-purple-100">Pro Hosting</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Become a premium host
                  </h2>
                  
                  <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                    Join our exclusive community of premium hosts and unlock exceptional earning potential while providing world-class experiences.
                  </p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="h-5 w-5 text-purple-200" />
                      <span className="text-purple-100">Higher earnings</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-purple-200" />
                      <span className="text-purple-100">Premium protection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Award className="h-5 w-5 text-purple-200" />
                      <span className="text-purple-100">Elite status</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-5 w-5 text-purple-200" />
                      <span className="text-purple-100">24/7 support</span>
                    </div>
                  </div>
                  
                  <Link 
                    to="/host-guide"
                    className="inline-flex items-center space-x-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
                
                {/* Stats/Visual */}
                <div className="relative">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                    <h3 className="text-2xl font-bold text-white mb-6">Why hosts choose Pro</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                            <TrendingUp className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">Average earnings</p>
                            <p className="text-purple-200 text-sm">Per month</p>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-white">$3,200</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                            <Star className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">Guest satisfaction</p>
                            <p className="text-purple-200 text-sm">Average rating</p>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-white">4.9★</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center">
                            <MapPin className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">Global reach</p>
                            <p className="text-purple-200 text-sm">Countries served</p>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-white">195+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;