import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="container">
    <h1>Privacy Policy</h1>
    <p>This is the Privacy Policy page for Thembi Community Initiative. Add your privacy policy details here.</p>
</div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
