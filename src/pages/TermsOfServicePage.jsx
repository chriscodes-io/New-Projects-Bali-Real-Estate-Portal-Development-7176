import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ChevronRight from 'lucide-react/dist/esm/icons/chevron-right';

const TermsOfServicePage = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      content: 'By accessing and using the New Projects Bali website and platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      id: 'use-license',
      title: '2. Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on New Projects Bali\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or "mirror" the materials on any other server\n• Violate any applicable laws or regulations in your jurisdiction'
    },
    {
      id: 'disclaimer',
      title: '3. Disclaimer',
      content: 'The materials on New Projects Bali\'s website are provided on an \'as is\' basis. New Projects Bali makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, New Projects Bali does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this website.'
    },
    {
      id: 'limitations',
      title: '4. Limitations',
      content: 'In no event shall New Projects Bali or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on New Projects Bali\'s website, even if New Projects Bali or a New Projects Bali authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      id: 'accuracy',
      title: '5. Accuracy of Materials',
      content: 'The materials appearing on New Projects Bali\'s website could include technical, typographical, or photographic errors. New Projects Bali does not warrant that any of the materials on its website are accurate, complete, or current. New Projects Bali may make changes to the materials contained on its website at any time without notice.'
    },
    {
      id: 'materials-links',
      title: '6. Materials and Links',
      content: 'New Projects Bali has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by New Projects Bali of the site. Use of any such linked website is at the user\'s own risk. If you believe any linked site violates your rights, please contact us immediately.'
    },
    {
      id: 'modifications',
      title: '7. Modifications',
      content: 'New Projects Bali may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      id: 'governing-law',
      title: '8. Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of Indonesia, and you irrevocably submit to the exclusive jurisdiction of the courts located in Bali, Indonesia.'
    },
    {
      id: 'user-contributions',
      title: '9. User Contributions',
      content: 'By submitting inquiries, messages, or any other content through our website, you grant New Projects Bali the right to use, reproduce, modify, and distribute such content in any media. You represent and warrant that you own or have the necessary rights to such content.'
    },
    {
      id: 'prohibited-conduct',
      title: '10. Prohibited Conduct',
      content: 'You agree not to:\n• Engage in any conduct that restricts or inhibits anyone\'s use or enjoyment of the website\n• Post or transmit hateful, abusive, defamatory, or otherwise objectionable material\n• Attempt to gain unauthorized access to our systems\n• Transmit any viruses, worms, or other malicious code\n• Engage in any form of harassment or abuse\n• Violate any applicable laws or regulations'
    },
    {
      id: 'investment-disclaimer',
      title: '11. Investment Disclaimer',
      content: 'New Projects Bali is a marketing platform for real estate developments. Information provided is for educational purposes only and should not be considered as investment advice. All real estate investments carry risk. Past performance is not indicative of future results. Investors should conduct their own due diligence and consult with qualified financial and legal advisors before making any investment decisions. New Projects Bali does not guarantee any returns or outcomes.'
    },
    {
      id: 'contact',
      title: '12. Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at:\n\nNew Projects Bali\nBali, Indonesia\nEmail: info@newprojectsbali.com\nPhone: +62 361 123 456'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
                Have questions about our Terms of Service? We're here to help.
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

export default TermsOfServicePage;