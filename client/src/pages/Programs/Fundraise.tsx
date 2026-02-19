import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Fundraise: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/fundraise-hero.jpg" alt="Fundraise Hero Image" className="about-hero-image">
        <div className="about-hero-text">
            <h1>Fundraise for TCI</h1>
            <p>Help Us Make a Difference Through Fundraising.</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Unlock Your Potential: Fundraise for Thembi Community Initiative</h2>
        <p>Passionate about making a difference? Turn your passion into action by fundraising for TCI! Your efforts will directly support our vital programs in the Thembi community.</p>

        <h3>Easy Ways to Get Started</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/personal-challenge.jpg" alt="Personal Challenge">
                <h3>Take on a Personal Challenge</h3>
                <p>Run a marathon, cycle across town, or host a game night—turn your hobbies into fundraising opportunities.</p>
                <a href="#">Get Inspired</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/online-campaign.jpg" alt="Online Fundraising">
                <h3>Launch an Online Campaign</h3>
                <p>Create a personalized fundraising page and share your story with friends and family.</p>
                <a href="#">Start a Campaign</a>
            </div>
        </div>

        <h3>Fundraising Tips and Resources</h3>
        <ul>
            <li><strong>Set a Goal:</strong> Define a clear fundraising goal to stay motivated.</li>
            <li><strong>Share Your Story:</strong> Explain why you're passionate about TCI's mission.</li>
            <li><strong>Spread the Word:</strong> Use social media, email, and word-of-mouth to reach your network.</li>
            <li><strong>Get Creative:</strong> Organize unique events or activities to engage donors.</li>
            <li><strong>Make it Personal:</strong> Add videos, photos, and personal stories to make your campaign more relatable.</li>
        </ul>

        <h3>Ready to Start Fundraising?</h3>
        <p>We're here to support you every step of the way. Contact us for fundraising resources and guidance.</p>
        <a href="#" className="button">Download Fundraising Kit</a>
        <a href="#" className="button">Contact Us for Support</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fundraise;
