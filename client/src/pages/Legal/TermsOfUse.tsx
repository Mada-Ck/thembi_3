import React from 'react';
import Base from '../../components/layout/Base';

const TermsOfUse: React.FC = () => {
  return (
    <Base>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
            <p>Last Updated: October 2023</p>
            <p>Welcome to the Thembi Community Initiative website. By accessing or using our website, you agree to be bound by these Terms of Use.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">1. Use of Content</h2>
            <p>All content provided on this website is for informational purposes only. You may not reproduce, distribute, or modify any content without our prior written consent.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">2. User Conduct</h2>
            <p>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclaimers</h2>
            <p>We do not guarantee the accuracy or completeness of any information on our website. We are not liable for any errors or omissions.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">4. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Use at any time. Your continued use of the website after such changes constitutes your acceptance of the new terms.</p>
          </div>
        </div>
      </main>
    </Base>
  );
};

export default TermsOfUse;

