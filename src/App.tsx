import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import ExperiencesPage from './pages/ExperiencesPage';
import RestaurantsPage from './pages/RestaurantsPage';
import InfoPage from './pages/InfoPage';
import HostGuidePage from './pages/HostGuidePage';
import SitemapPage from './pages/SitemapPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/property/:id" element={<PropertyDetailPage />} />
            <Route path="/experiences" element={<ExperiencesPage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
            
            {/* Hosting Pages */}
            <Route path="/host-guide" element={<HostGuidePage />} />
            
            {/* Sitemap */}
            <Route path="/sitemap" element={<SitemapPage />} />
            
            {/* Footer Link Pages */}
            <Route path="/help-center" element={<InfoPage title="Help Center" />} />
            <Route path="/safety" element={<InfoPage title="Safety Information" />} />
            <Route path="/cancellation" element={<InfoPage title="Cancellation Options" />} />
            <Route path="/neighborhood-support" element={<InfoPage title="Neighborhood Support" />} />
            <Route path="/diversity" element={<InfoPage title="Diversity & Belonging" />} />
            <Route path="/anti-discrimination" element={<InfoPage title="Against Discrimination" />} />
            <Route path="/accessibility" element={<InfoPage title="Accessibility" />} />
            <Route path="/frontline-stays" element={<InfoPage title="Frontline Stays" />} />
            <Route path="/host-home" element={<InfoPage title="Host Your Home" />} />
            <Route path="/host-experience" element={<InfoPage title="Host an Experience" />} />
            <Route path="/responsible-hosting" element={<InfoPage title="Responsible Hosting" />} />
            <Route path="/resource-center" element={<InfoPage title="Resource Center" />} />
            <Route path="/privacy" element={<InfoPage title="Privacy Policy" />} />
            <Route path="/terms" element={<InfoPage title="Terms of Service" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;