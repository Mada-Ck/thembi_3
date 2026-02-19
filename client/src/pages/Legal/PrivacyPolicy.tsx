import React from 'react';
import Base from '../../components/layout/Base';

const PrivacyPolicy: React.FC = () => {
  return (
    <Base>
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="container">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4">
            <p>Last Updated: October 2023</p>
            <p>Thembi Community Initiative ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p>We may collect personal information that you provide to us, such as your name, email address, and phone number when you contact us or register for our services.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to provide and improve our services, communicate with you, and process your requests.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at [Phone Number] or [Email Address].</p>
          </div>
        </div>
      </main>
    </Base>
  );
};

export default PrivacyPolicy;

