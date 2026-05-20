import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Crown, 
  TrendingUp, 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  DollarSign,
  Home,
  Star,
  Calendar,
  MessageCircle,
  Camera,
  BookOpen,
  Headphones
} from 'lucide-react';

const HostGuidePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-purple-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Crown className="h-10 w-10 text-purple-200" />
                <span className="text-xl font-semibold">Pro Hosting</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Start your hosting journey
              </h1>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                Join thousands of successful hosts who earn premium income by sharing their exceptional spaces with travelers worldwide.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
                  Start hosting today
                </button>
                <button className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
                  Watch demo
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg"
                alt="Premium hosting"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">$3,200</p>
                    <p className="text-sm text-gray-600">Avg. monthly earnings</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why choose Pro hosting?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to become a successful premium host
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <TrendingUp className="h-8 w-8 text-green-600" />,
              title: "Higher Earnings",
              description: "Premium hosts earn 40% more than standard listings with our optimization tools"
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: "Premium Protection",
              description: "Comprehensive insurance coverage up to $2M and 24/7 security monitoring"
            },
            {
              icon: <Award className="h-8 w-8 text-purple-600" />,
              title: "Elite Status",
              description: "Join our exclusive Pro Host community with special badges and recognition"
            },
            {
              icon: <Users className="h-8 w-8 text-orange-600" />,
              title: "Dedicated Support",
              description: "Personal host advisor and priority customer support whenever you need help"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to get started</h2>
            <p className="text-xl text-gray-600">Simple steps to launch your premium hosting business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Home className="h-8 w-8 text-purple-600" />,
                title: "List your space",
                description: "Create a stunning listing with professional photos and detailed descriptions"
              },
              {
                step: "02",
                icon: <Star className="h-8 w-8 text-purple-600" />,
                title: "Set your standards",
                description: "Define your house rules, pricing, and availability to attract quality guests"
              },
              {
                step: "03",
                icon: <Calendar className="h-8 w-8 text-purple-600" />,
                title: "Welcome guests",
                description: "Start hosting and earning while providing exceptional experiences"
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 left-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resources & Support</h2>
          <p className="text-xl text-gray-600">Everything you need to succeed as a Pro host</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Camera className="h-8 w-8 text-blue-600" />,
              title: "Professional Photography",
              description: "Free professional photo shoots to showcase your property at its best"
            },
            {
              icon: <BookOpen className="h-8 w-8 text-green-600" />,
              title: "Host Academy",
              description: "Comprehensive training courses and certification programs"
            },
            {
              icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
              title: "Community Forum",
              description: "Connect with other Pro hosts and share experiences and tips"
            },
            {
              icon: <Headphones className="h-8 w-8 text-orange-600" />,
              title: "24/7 Support",
              description: "Round-the-clock assistance from our dedicated host support team"
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-red-600" />,
              title: "Analytics Dashboard",
              description: "Detailed insights and recommendations to optimize your earnings"
            },
            {
              icon: <Shield className="h-8 w-8 text-indigo-600" />,
              title: "Insurance Coverage",
              description: "Comprehensive protection for your property and peace of mind"
            }
          ].map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 text-sm">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success stories</h2>
            <p className="text-xl text-gray-600">Hear from our top-performing Pro hosts</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Malibu, CA",
                earnings: "$8,500/month",
                image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
                quote: "Pro hosting transformed my beachfront property into a thriving business. The support team is incredible!"
              },
              {
                name: "Mike Chen",
                location: "Aspen, CO",
                earnings: "$6,200/month",
                image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
                quote: "The premium protection and higher earnings make Pro hosting worth every penny. Highly recommended!"
              },
              {
                name: "Emma Wilson",
                location: "New York, NY",
                earnings: "$4,800/month",
                image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
                quote: "From listing to guest management, Pro hosting made everything seamless. My occupancy rate is 95%!"
              }
            ].map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.location}</p>
                    <p className="text-green-600 font-semibold text-sm">{story.earnings}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Crown className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to become a Pro host?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join our exclusive community and start earning premium income today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors">
              Get started now
            </button>
            <button className="border border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-purple-600 transition-colors">
              Schedule consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostGuidePage;