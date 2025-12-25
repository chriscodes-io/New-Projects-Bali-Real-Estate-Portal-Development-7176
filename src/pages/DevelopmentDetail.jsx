import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LeadCaptureForm from '../components/development/LeadCaptureForm';
import SafeIcon from '../common/SafeIcon';
import OptimizedImage from '../components/common/OptimizedImage';
import { Helmet } from 'react-helmet-async';
import * as FaIcons from 'react-icons/fa';

const {
  FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined, FaCalendarAlt, FaCheckCircle,
  FaSwimmingPool, FaDumbbell, FaUmbrellaBeach, FaWifi, FaCar, FaShieldAlt, FaEye,
  FaFileDownload, FaPhone, FaEnvelope, FaShare, FaChevronLeft, FaChevronRight
} = FaIcons;

import { PROJECTS } from '../constants/projects';

const DevelopmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const development = PROJECTS.find(p => p.id === id);

  if (!development) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <button
            onClick={() => navigate('/developments')}
            className="text-premium-blue hover:underline"
          >
            Back to Developments
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Off-plan':
        return 'bg-premium-blue/10 text-premium-blue border-premium-blue/20';
      case 'Under Construction':
        return 'bg-indigo-50 text-indigo-600 border border-indigo-100';
      case 'Completed':
        return 'bg-green-50 text-green-600 border border-green-100';
      case 'Now Selling':
        return 'bg-purple-50 text-purple-600 border border-purple-100';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  // Map features to amenities structure with icons
  const mapFeaturesToAmenities = (features) => {
    const iconMap = {
      'Pool': FaSwimmingPool,
      'Gym': FaDumbbell,
      'Beach': FaUmbrellaBeach,
      'WiFi': FaWifi,
      'Parking': FaCar,
      'Security': FaShieldAlt,
      'View': FaEye
    };

    return features?.map(feature => ({
      icon: Object.values(iconMap).find((_, i) => feature.toLowerCase().includes(Object.keys(iconMap)[i].toLowerCase())) || FaCheckCircle,
      name: feature,
      description: "Premium feature included"
    })) || [];
  };

  const displayAmenities = mapFeaturesToAmenities(development.features);

  const paymentPlan = {
    reservation: "10% - Reservation fee",
    contract: "20% - Upon contract signing",
    construction: "50% - During construction milestones",
    completion: "20% - Upon handover"
  };

  const investmentHighlights = [
    `Prime location in ${development.location}`,
    `High rental yield potential: ${development.yield}`,
    "Professional management available",
    "Strong capital appreciation forecast",
    "Turnkey investment opportunity"
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? development.images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === development.images.length - 1 ? 0 : prev + 1));
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'floorplans', label: 'Floor Plans' },
    { id: 'payment', label: 'Payment Plan' },
    { id: 'investment', label: 'Investment Info' }
  ];

  return (
    <div className="min-h-screen bg-premium-slate-50 pt-8 pb-24">
      <Helmet>
        <title>{development.title} - New Projects Bali</title>
        <meta name="description" content={`Exclusive investment opportunity at ${development.title} in ${development.location}. ${development.type} starting from ${development.priceDisplay} with ${development.yield} yield.`} />
        <link rel="canonical" href={`https://newprojectsbali.com/development/${id}`} />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={handleGoBack}
          className="mb-8 flex items-center gap-2 text-premium-blue hover:text-blue-700 font-bold transition-colors"
        >
          <SafeIcon icon={FaChevronLeft} />
          Back to Developments
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(development.status)}`}>
                  {development.status}
                </span>
                <div className="bg-gradient-to-r from-premium-blue to-premium-periwinkle text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-md">
                  <SafeIcon icon={FaCalendarAlt} />
                  <span>{development.yield} Yield</span>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-premium-black mb-2">
                {development.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-premium-charcoal">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FaMapMarkerAlt} className="text-premium-blue" />
                  <span>{development.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FaBed} className="text-premium-blue" />
                  <span>{development.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FaCheckCircle} className="text-premium-blue" />
                  <span>{development.developer}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="text-3xl font-bold text-premium-black">{development.priceDisplay}</div>
              <div className="text-premium-charcoal font-medium">Limited availability</div>
              <button className="flex items-center space-x-2 text-premium-blue hover:text-blue-700 font-bold text-sm bg-white px-4 py-2 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer min-h-[44px]">
                <SafeIcon icon={FaShare} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative aspect-video bg-gray-200 overflow-hidden">
                <OptimizedImage
                  src={development.images[currentImageIndex]}
                  alt={`${development.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                {/* Navigation Buttons */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-premium-black p-3 rounded-full shadow-lg transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <SafeIcon icon={FaChevronLeft} className="text-xl" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-premium-black p-3 rounded-full shadow-lg transition-all cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <SafeIcon icon={FaChevronRight} className="text-xl" />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {development.images.length}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 p-4 bg-gray-50 overflow-x-auto">
                {development.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${idx === currentImageIndex ? 'border-premium-blue' : 'border-gray-200'
                      }`}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-xl font-bold text-premium-black mb-4">About This Development</h2>
              <p className="text-premium-charcoal leading-relaxed text-lg">{development.description}</p>
            </motion.div>

            {/* Key Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            >
              <h2 className="text-xl font-bold text-premium-black mb-6">Key Facts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-between items-center p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-sm">Bedrooms</span>
                  <span className="font-bold text-premium-black">{development.beds || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-sm">Bathrooms</span>
                  <span className="font-bold text-premium-black">{development.baths || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-sm">Building Size</span>
                  <span className="font-bold text-premium-black">{development.size}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-sm">Land Size</span>
                  <span className="font-bold text-premium-black">{development.landSize}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-sm">Completion</span>
                  <span className="font-bold text-premium-black">{development.completion}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-sm">Status</span>
                  <span className="font-bold text-premium-black">{development.status}</span>
                </div>
              </div>
            </motion.div>

            {/* Tabs Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              {/* Tab Navigation */}
              <div className="border-b border-gray-100">
                <nav className="flex space-x-8 px-8 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-bold text-sm transition-colors whitespace-nowrap cursor-pointer ${activeTab === tab.id
                        ? 'border-premium-blue text-premium-blue'
                        : 'border-transparent text-gray-400 hover:text-premium-charcoal'
                        }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-8">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-lg font-bold text-premium-black mb-4">Project Overview</h3>
                    <p className="text-premium-charcoal leading-relaxed mb-6">{development.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-premium-black mb-3">Location Highlights</h4>
                        <ul className="space-y-2 text-premium-charcoal">
                          <li>• 5 minutes to Uluwatu Beach</li>
                          <li>• 15 minutes to Ngurah Rai Airport</li>
                          <li>• Walking distance to restaurants</li>
                          <li>• Near world-class surf breaks</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold text-premium-black mb-3">Investment Benefits</h4>
                        <ul className="space-y-2 text-premium-charcoal">
                          <li>• High rental demand area</li>
                          <li>• Strong capital appreciation</li>
                          <li>• Professional management</li>
                          <li>• Tax-efficient structure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div>
                    <h3 className="text-lg font-bold text-premium-black mb-6">Resort Amenities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {displayAmenities.map((amenity, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm text-premium-blue">
                            <SafeIcon icon={amenity.icon} className="text-lg" />
                          </div>
                          <div>
                            <h4 className="font-bold text-premium-black">{amenity.name}</h4>
                            <p className="text-premium-charcoal text-sm">{amenity.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'floorplans' && (
                  <div>
                    <h3 className="text-lg font-bold text-premium-black mb-6">Floor Plans & Layouts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-premium-slate-50 rounded-xl border border-gray-100 p-6 text-center">
                        <h4 className="font-bold text-premium-black mb-2">2 Bedroom Villa</h4>
                        <p className="text-premium-charcoal mb-4">120 sqm • 200 sqm plot</p>
                        <button className="flex items-center space-x-2 mx-auto bg-premium-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all font-medium text-sm shadow-lg cursor-pointer min-h-[44px]">
                          <SafeIcon icon={FaFileDownload} />
                          <span>Download PDF</span>
                        </button>
                      </div>
                      <div className="bg-premium-slate-50 rounded-xl border border-gray-100 p-6 text-center">
                        <h4 className="font-bold text-premium-black mb-2">4 Bedroom Villa</h4>
                        <p className="text-premium-charcoal mb-4">280 sqm • 500 sqm plot</p>
                        <button className="flex items-center space-x-2 mx-auto bg-premium-purple hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all font-medium text-sm shadow-lg cursor-pointer min-h-[44px]">
                          <SafeIcon icon={FaFileDownload} />
                          <span>Download PDF</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'payment' && (
                  <div>
                    <h3 className="text-lg font-bold text-premium-black mb-6">Payment Schedule</h3>
                    <div className="space-y-4">
                      {Object.entries(paymentPlan).map(([stage, description]) => (
                        <div key={stage} className="flex justify-between items-center p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                          <span className="font-bold text-premium-charcoal capitalize">{stage}</span>
                          <span className="font-bold text-premium-black">{description}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                      <p className="text-blue-800 text-sm flex items-start gap-2">
                        <SafeIcon icon={FaCheckCircle} className="mt-1 flex-shrink-0" />
                        <span><strong>Note:</strong> Flexible payment terms available. Contact us to discuss customized payment plans suited to your investment goals.</span>
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'investment' && (
                  <div>
                    <h3 className="text-lg font-bold text-premium-black mb-6">Investment Highlights</h3>
                    <div className="space-y-4 mb-6">
                      {investmentHighlights.map((highlight, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <SafeIcon icon={FaCheckCircle} className="text-premium-blue flex-shrink-0" />
                          <span className="text-premium-charcoal font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Rental Yield</h4>
                        <div className="text-3xl font-bold text-premium-blue mb-1">{development.yield}</div>
                        <p className="text-blue-800 text-sm">Annual rental returns</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-100">
                        <h4 className="font-bold text-green-900 mb-2">Capital Growth</h4>
                        <div className="text-3xl font-bold text-green-700 mb-1">8-12%</div>
                        <p className="text-green-800 text-sm">Annual appreciation</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar - Lead Capture Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <LeadCaptureForm development={development} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentDetail;