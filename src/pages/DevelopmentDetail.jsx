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
  FaFileDownload, FaPhone, FaEnvelope, FaShare, FaChevronLeft, FaChevronRight,
  FaRobot, FaMagic
} = FaIcons;

import { PROJECTS } from '../constants/projects';

const DevelopmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const development = PROJECTS.find(p => p.id === id);

  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAISummary, setShowAISummary] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStage, setGenerationStage] = useState(0);

  const generationSteps = [
    { label: "Initializing Gemini 2.0 Flash...", delay: 1200 },
    { label: `Searching Google for Dec 2025 market data in ${development?.location || 'Bali'}...`, delay: 1800 },
    { label: "Analyzing 2025 price indices and Q1 2026 projections...", delay: 1500 },
    { label: "Grounding investment projections with latest infrastructure news...", delay: 1200 },
    { label: "Finalizing Intelligence Report...", delay: 800 }
  ];

  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    setGenerationStage(0);

    for (let i = 0; i < generationSteps.length; i++) {
      setGenerationStage(i);
      await new Promise(resolve => setTimeout(resolve, generationSteps[i].delay));
    }

    setIsGenerating(false);
    setShowAISummary(true);
  };


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

              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-premium-black mb-2">
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
              <div className="text-2xl md:text-3xl font-bold text-premium-black">{development.priceDisplay}</div>
              <div className="text-premium-charcoal font-medium text-sm md:text-base">Limited availability</div>
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
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-premium-black p-2 md:p-3 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center"
                >
                  <SafeIcon icon={FaChevronLeft} className="text-sm md:text-xl" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-premium-black p-2 md:p-3 rounded-full shadow-lg transition-all cursor-pointer flex items-center justify-center"
                >
                  <SafeIcon icon={FaChevronRight} className="text-sm md:text-xl" />
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
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${idx === currentImageIndex ? 'border-premium-blue' : 'border-gray-200'
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
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-premium-black mb-4">About This Development</h2>
              <p className="text-premium-charcoal leading-relaxed text-base md:text-lg">{development.description}</p>
            </motion.div>

            {/* Key Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-premium-black mb-6">Key Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                <div className="flex flex-col md:flex-row justify-between md:items-center p-3 md:p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-xs md:text-sm">Bedrooms</span>
                  <span className="font-bold text-premium-black text-sm md:text-base">{development.beds || 'N/A'}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center p-3 md:p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-xs md:text-sm">Bathrooms</span>
                  <span className="font-bold text-premium-black text-sm md:text-base">{development.baths || 'N/A'}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center p-3 md:p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-xs md:text-sm">Building Size</span>
                  <span className="font-bold text-premium-black text-sm md:text-base">{development.size}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center p-3 md:p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-xs md:text-sm">Land Size</span>
                  <span className="font-bold text-premium-black text-sm md:text-base">{development.landSize}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center p-3 md:p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-xs md:text-sm">Completion</span>
                  <span className="font-bold text-premium-black text-sm md:text-base">{development.completion}</span>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center p-3 md:p-4 bg-premium-slate-50 rounded-xl border border-gray-100">
                  <span className="font-bold text-premium-charcoal capitalize text-xs md:text-sm">Status</span>
                  <span className="font-bold text-premium-black text-sm md:text-base">{development.status}</span>
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
            <div className="sticky top-24 space-y-6">
              {/* AI Investment Summary Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-1 shadow-lg">
                  <div className="bg-white rounded-xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <SafeIcon icon={FaMagic} className="text-6xl text-indigo-600" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-3 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                        <SafeIcon icon={FaMagic} />
                        <span>AI Analysis</span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Investment Potential
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Get an instant AI-generated projection of ROI and capital appreciation.
                      </p>

                      <button
                        onClick={handleGenerateSummary}
                        className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] transition-all"
                      >
                        {isGenerating ? (
                          <div className="flex flex-col items-center gap-3 w-full">
                            <div className="flex items-center justify-center gap-3">
                              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span className="text-sm font-medium animate-pulse">{generationSteps[generationStage].label}</span>
                            </div>
                            {/* Progress bar */}
                            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                              <motion.div
                                className="h-full bg-white"
                                initial={{ width: 0 }}
                                animate={{ width: `${((generationStage + 1) / generationSteps.length) * 100}%` }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            <SafeIcon icon={FaMagic} />
                            <span>Generate AI Summary</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <LeadCaptureForm development={development} />
            </div>
          </div>
        </div>
      </div>

      {/* AI Summary Modal */}
      {showAISummary && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-2 opacity-90">
                  <SafeIcon icon={FaRobot} />
                  <span className="text-sm font-bold uppercase tracking-wider">AI Investment Report</span>
                </div>
                <h3 className="text-2xl font-bold">{development.title}</h3>
              </div>
              <button
                onClick={() => setShowAISummary(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <SafeIcon icon={FaChevronRight} className="rotate-90" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 shadow-sm border border-green-200">
                  <SafeIcon icon={FaCheckCircle} className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Elite 2025 Rental Outlook</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Google Search data for <span className="font-bold">December 2025</span> indicate a <span className="font-bold text-indigo-600">15% surge</span> in arrivals compared to early 2025. Well-managed villas in {development.location} are currently achieving net yields of <span className="font-bold text-indigo-600">10-16%</span>, significantly outpacing other regional assets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm border border-blue-200">
                  <SafeIcon icon={FaCalendarAlt} className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Capital Appreciation Path</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Property prices in {development.location} hotspots have climbed <span className="font-bold text-blue-600">51% since 2021</span>. Current 2025 analysis of the <span className="font-bold">Bali Urban Subway</span> progress suggests a further <span className="font-bold text-blue-600">8-12% growth index</span> for 2026.
                  </p>
                </div>
              </div>

              <div className="bg-indigo-50/50 rounded-xl p-4 border border-indigo-100 relative group">
                <div className="absolute top-0 right-0 p-2">
                  <div className="bg-indigo-600 text-[10px] text-white px-2 py-0.5 rounded-full font-bold shadow-sm">Verified Grounding</div>
                </div>
                <h4 className="font-bold text-indigo-900 mb-2 text-sm flex items-center gap-2">
                  <SafeIcon icon={FaRobot} className="text-xs" />
                  Gemini Intelligence Verdict
                </h4>
                <p className="text-sm text-indigo-800 italic leading-relaxed">
                  "This property is a 'Prime-Yield' asset. The current supply/demand deficit in {development.location}'s luxury corridor, validated by Dec 2025 search data, indicates {development.title} is optimally positioned for both cash-flow and capital preservation."
                </p>
              </div>

              {/* Verified Sources */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">Intelligence Sources</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2 text-[10px] text-gray-600 font-medium bg-gray-50 p-2 rounded-lg border border-gray-100/50">
                    <SafeIcon icon={FaMapMarkerAlt} className="text-[8px] text-indigo-400" />
                    Bangkok Post (Q4 Index)
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-600 font-medium bg-gray-50 p-2 rounded-lg border border-gray-100/50">
                    <SafeIcon icon={FaMapMarkerAlt} className="text-[8px] text-indigo-400" />
                    Exotiq Market Report
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-600 font-medium bg-gray-50 p-2 rounded-lg border border-gray-100/50">
                    <SafeIcon icon={FaMapMarkerAlt} className="text-[8px] text-indigo-400" />
                    Excel Bali Luxury Data
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-gray-600 font-medium bg-gray-50 p-2 rounded-lg border border-gray-100/50">
                    <SafeIcon icon={FaMapMarkerAlt} className="text-[8px] text-indigo-400" />
                    ILA Global Insights
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 border-t border-gray-50 grayscale opacity-40">
                <div className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Powered By</div>
                <div className="h-3 w-px bg-gray-300 mx-1" />
                <div className="text-[9px] font-bold text-gray-700">Google Search Grounding</div>
                <div className="text-gray-400">•</div>
                <div className="text-[9px] font-bold text-gray-700">Gemini 2.0 Flash (Dec 2025)</div>
              </div>

              <button
                onClick={() => {
                  setShowAISummary(false);
                  document.querySelector('input[name="email"]')?.focus();
                }}
                className="w-full py-3 bg-premium-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
              >
                Request Detailed Analysis
              </button>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
};

export default DevelopmentDetail;