import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <Crown className="h-6 w-6 text-purple-600" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Pro</span>
            </div>
            <p className="text-gray-600 text-sm">
              Discover premium places to stay and unique experiences around the world.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/help-center" className="hover:text-gray-900">Help Center</Link></li>
              <li><Link to="/safety" className="hover:text-gray-900">Safety Information</Link></li>
              <li><Link to="/cancellation" className="hover:text-gray-900">Cancellation Options</Link></li>
              <li><Link to="/neighborhood-support" className="hover:text-gray-900">Neighborhood Support</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/diversity" className="hover:text-gray-900">Diversity & Belonging</Link></li>
              <li><Link to="/anti-discrimination" className="hover:text-gray-900">Against Discrimination</Link></li>
              <li><Link to="/accessibility" className="hover:text-gray-900">Accessibility</Link></li>
              <li><Link to="/frontline-stays" className="hover:text-gray-900">Frontline Stays</Link></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/host-home" className="hover:text-gray-900">Host your home</Link></li>
              <li><Link to="/host-experience" className="hover:text-gray-900">Host an Experience</Link></li>
              <li><Link to="/responsible-hosting" className="hover:text-gray-900">Responsible hosting</Link></li>
              <li><Link to="/resource-center" className="hover:text-gray-900">Resource Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2024 Pro Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
              <Link to="/sitemap" className="text-sm text-gray-600 hover:text-gray-900">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;