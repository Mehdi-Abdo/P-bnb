import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Globe, Search, Zap } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationName, setLocationName] = useState<string>('');

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          
          // Reverse geocoding to get location name (mock implementation)
          // In a real app, you'd use a geocoding service like Google Maps API
          const mockLocationNames = [
            'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
            'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA',
            'Dallas, TX', 'San Jose, CA', 'Austin, TX', 'Jacksonville, FL'
          ];
          const randomLocation = mockLocationNames[Math.floor(Math.random() * mockLocationNames.length)];
          setLocationName(randomLocation);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocationName('Location unavailable');
        }
      );
    }
  }, []);

  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', path: '/', description: 'Discover premium stays worldwide' },
        { name: 'Search', path: '/search', description: 'Find your perfect accommodation' },
        { name: 'Experiences', path: '/experiences', description: 'Unique local experiences' },
        { name: 'Restaurants', path: '/restaurants', description: 'Discover amazing dining' }
      ]
    },
    {
      category: 'User Account',
      pages: [
        { name: 'Login', path: '/login', description: 'Sign in to your account' },
        { name: 'Sign Up', path: '/signup', description: 'Create a new account' },
        { name: 'Dashboard', path: '/dashboard', description: 'Manage your account' },
        { name: 'My Trips', path: '/dashboard/trips', description: 'View your bookings' },
        { name: 'My Listings', path: '/dashboard/listings', description: 'Manage your properties' },
        { name: 'Profile', path: '/dashboard/profile', description: 'Update your profile' }
      ]
    },
    {
      category: 'Hosting',
      pages: [
        { name: 'Host Guide', path: '/host-guide', description: 'Learn how to become a host' },
        { name: 'Host Your Home', path: '/host-home', description: 'List your property' },
        { name: 'Host Experience', path: '/host-experience', description: 'Create unique experiences' },
        { name: 'Responsible Hosting', path: '/responsible-hosting', description: 'Best practices for hosts' },
        { name: 'Resource Center', path: '/resource-center', description: 'Tools and resources for hosts' }
      ]
    },
    {
      category: 'Support & Information',
      pages: [
        { name: 'Help Center', path: '/help-center', description: 'Get help and support' },
        { name: 'Safety Information', path: '/safety', description: 'Safety guidelines and policies' },
        { name: 'Cancellation Options', path: '/cancellation', description: 'Cancellation policies' },
        { name: 'Neighborhood Support', path: '/neighborhood-support', description: 'Community guidelines' }
      ]
    },
    {
      category: 'Community',
      pages: [
        { name: 'Diversity & Belonging', path: '/diversity', description: 'Our commitment to inclusion' },
        { name: 'Against Discrimination', path: '/anti-discrimination', description: 'Anti-discrimination policy' },
        { name: 'Accessibility', path: '/accessibility', description: 'Accessibility features' },
        { name: 'Frontline Stays', path: '/frontline-stays', description: 'Support for frontline workers' }
      ]
    },
    {
      category: 'Legal',
      pages: [
        { name: 'Privacy Policy', path: '/privacy', description: 'How we protect your privacy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }
      ]
    }
  ];

  const popularDestinations = [
    { name: 'New York', properties: 1250 },
    { name: 'Los Angeles', properties: 980 },
    { name: 'Paris', properties: 850 },
    { name: 'London', properties: 720 },
    { name: 'Tokyo', properties: 650 },
    { name: 'Barcelona', properties: 580 },
    { name: 'Rome', properties: 520 },
    { name: 'Amsterdam', properties: 480 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center">
            <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Navigate through all pages and discover everything Pro has to offer
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Location Detection */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white mb-12">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-8 w-8" />
                <h2 className="text-2xl font-bold">Your Location</h2>
              </div>
              <p className="text-purple-100 mb-2">
                {userLocation ? 'We detected your location:' : 'Detecting your location...'}
              </p>
              <p className="text-xl font-semibold">
                {locationName || 'Loading...'}
              </p>
              {userLocation && (
                <p className="text-sm text-purple-200 mt-2">
                  Coordinates: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
                </p>
              )}
            </div>
            <div className="hidden md:block">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Globe className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* World Map Visualization */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Global Presence</h2>
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 h-64 flex items-center justify-center">
            <div className="text-center">
              <Globe className="h-16 w-16 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive World Map</h3>
              <p className="text-gray-600 mb-4">
                Explore our global network of premium properties
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-600">195+</p>
                  <p className="text-gray-600">Countries</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-600">10,000+</p>
                  <p className="text-gray-600">Cities</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-600">500K+</p>
                  <p className="text-gray-600">Properties</p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-600">50M+</p>
                  <p className="text-gray-600">Guests</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Destinations */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularDestinations.map((destination, index) => (
              <Link
                key={index}
                to={`/search?location=${destination.name}`}
                className="p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600 group-hover:text-purple-700" />
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-purple-600">
                      {destination.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {destination.properties} properties
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Site Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {siteStructure.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-purple-600" />
                <span>{section.category}</span>
              </h2>
              <div className="space-y-4">
                {section.pages.map((page, pageIndex) => (
                  <Link
                    key={pageIndex}
                    to={page.path}
                    className="block p-4 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 mb-1">
                          {page.name}
                        </h3>
                        <p className="text-sm text-gray-600">{page.description}</p>
                      </div>
                      <Search className="h-4 w-4 text-gray-400 group-hover:text-purple-600 flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <p className="text-purple-100 mb-6">
            Jump to the most popular sections of our platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/search"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 hover:bg-white/30 transition-colors"
            >
              <Search className="h-6 w-6 mx-auto mb-2" />
              <p className="font-semibold">Find Properties</p>
            </Link>
            <Link
              to="/host-guide"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 hover:bg-white/30 transition-colors"
            >
              <MapPin className="h-6 w-6 mx-auto mb-2" />
              <p className="font-semibold">Become a Host</p>
            </Link>
            <Link
              to="/help-center"
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg p-4 hover:bg-white/30 transition-colors"
            >
              <Zap className="h-6 w-6 mx-auto mb-2" />
              <p className="font-semibold">Get Help</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;