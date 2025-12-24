import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      content: 'New Projects Bali ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.'
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      content: 'We may collect information about you in a variety of ways. The information we may collect on the site includes:\n\n• Personal Data: Name, email address, phone number, mailing address, and other contact information you voluntarily provide\n• Financial Information: Payment method details for processing transactions\n• Device Information: Browser type, IP address, operating system, and access times\n• Usage Information: Pages visited, time spent on pages, links clicked, and search queries\n• Location Data: General geographic information based on IP address\n• Cookies and Tracking Technologies: Data collected through cookies and similar tracking mechanisms'
    },
    {
      id: 'how-we-use',
      title: '3. How We Use Your Information',
      content: 'We use the information we collect for various purposes:\n\n• To provide and maintain our services\n• To process your inquiries and respond to your requests\n• To send you marketing and promotional communications (with your consent)\n• To improve our website and user experience\n• To comply with legal obligations\n• To detect and prevent fraudulent transactions\n• To conduct research and analytics\n• To personalize your experience\n• To communicate important updates about our services'
    },
    {
      id: 'data-sharing',
      title: '4. Data Sharing and Disclosure',
      content: 'We may share your information in the following circumstances:\n\n• With Development Partners: Your information may be shared with property developers and agents whose properties you inquire about\n• Service Providers: Third-party vendors who assist us in operating our website and conducting our business\n• Legal Requirements: When required by law or to protect our legal rights\n• Business Transfers: In connection with mergers, acquisitions, or asset sales\n• With Your Consent: Any other sharing with your explicit permission\n\nWe do not sell your personal information to third parties.'
    },
    {
      id: 'data-security',
      title: '5. Data Security',
      content: 'We implement comprehensive security measures to protect your personal information, including:\n\n• SSL encryption for data transmission\n• Secure password protection\n• Regular security audits and updates\n• Limited access to personal information\n• Compliance with international data protection standards\n\nHowever, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.'
    },
    {
      id: 'cookies',
      title: '6. Cookies and Tracking Technologies',
      content: 'We use cookies and similar tracking technologies to:\n\n• Remember your preferences\n• Understand how you use our site\n• Track advertising effectiveness\n• Provide personalized content\n• Improve user experience\n\nYou can control cookie settings through your browser. However, disabling cookies may limit certain website functionality.'
    },
    {
      id: 'third-party-links',
      title: '7. Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.'
    },
    {
      id: 'user-rights',
      title: '8. Your Privacy Rights',
      content: 'Depending on your location, you may have certain rights regarding your personal data:\n\n• Right to Access: Request a copy of your personal information\n• Right to Correction: Update or correct inaccurate information\n• Right to Deletion: Request removal of your data (subject to legal requirements)\n• Right to Opt-Out: Decline marketing communications\n• Right to Data Portability: Receive your data in a portable format\n\nTo exercise these rights, please contact us using the information provided below.'
    },
    {
      id: 'children',
      title: '9. Children\'s Privacy',
      content: 'Our website is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 18, we will take steps to delete such information and terminate the child\'s account.'
    },
    {
      id: 'international-transfers',
      title: '10. International Data Transfers',
      content: 'Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our services, you consent to the transfer of your information to countries outside your country of residence.'
    },
    {
      id: 'retention',
      title: '11. Data Retention',
      content: 'We retain personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You may request deletion of your data at any time, subject to legal and business requirements. Some information may be retained for legal compliance purposes.'
    },
    {
      id: 'updates',
      title: '12. Changes to This Privacy Policy',
      content: 'We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting the new Privacy Policy on our website and updating the "Last Updated" date. Your continued use of our website following the posting of changes constitutes your acceptance of the updated Privacy Policy.'
    },
    {
      id: 'contact-us',
      title: '13. Contact Us',
      content: 'If you have questions about this Privacy Policy or our privacy practices, please contact us at:\n\nNew Projects Bali\nBali, Indonesia\nEmail: privacy@newprojectsbali.com\nPhone: +62 361 123 456\n\nWe will respond to your inquiry within 30 days.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <div className="bg-premium-black text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-blue-100 text-lg">Last updated: March 2024</p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-8">
              <h3 className="font-bold text-premium-black mb-4">Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex items-center text-sm text-gray-600 hover:text-premium-blue transition-colors py-2"
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {section.title.split('.')[1].trim().split(' ').slice(0, 2).join(' ')}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-xl p-8 shadow-sm space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="scroll-mt-20"
                >
                  <h2 className="text-2xl font-bold text-premium-black mb-4">{section.title}</h2>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                  {index < sections.length - 1 && <div className="border-t border-gray-200 mt-8" />}
                </motion.div>
              ))}
            </div>

            {/* Footer CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100"
            >
              <p className="text-gray-700 mb-4">
                Have questions about how we handle your data? Contact our privacy team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-premium-blue hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;