import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Corporate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/corporate-hero.jpg" alt="Corporate Partnership Hero Image" className="about-hero-image">
        <div className="about-hero-text">
            <h1>Partner with TCI</h1>
            <p>Create Impact Together: Corporate Partnerships for a Better Thembi Community</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Making a Difference Through Corporate Partnership</h2>
        <p>The Thembi Community Initiative partners with businesses to create meaningful impact in the Thembi community. Together, we can address critical challenges and build a brighter future for all.</p>

        <h3>Partnership Opportunities</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/corporate-sponsorship.jpg" alt="Program Sponsorship">
                <h3>Program Sponsorship</h3>
                <p>Sponsor one of our vital programs in health, education, or livelihood development.</p>
                <a href="#">Explore Sponsorships</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/employee-giving.jpg" alt="Employee Giving">
                <h3>Employee Giving Campaigns</h3>
                <p>Engage your employees in fundraising and volunteer activities to support TCI.</p>
                <a href="#">Learn More</a>
            </div>
        </div>

        <h3>Benefits of Partnering with TCI</h3>
        <ul>
            <li><strong>Enhanced Brand Reputation:</strong> Align your brand with a respected and impactful organization.</li>
            <li><strong>Employee Engagement:</strong> Provide meaningful volunteer opportunities for your employees.</li>
            <li><strong>Community Impact:</strong> Directly contribute to the well-being of the Thembi community.</li>
            <li><strong>Tax Benefits:</strong> Receive tax deductions for your charitable contributions (where applicable).</li>
        </ul>

        <h3>Let's Discuss Partnership Opportunities</h3>
        <p>We are eager to discuss how your company can partner with TCI to achieve your corporate social responsibility goals. Contact us to explore opportunities.</p>

        <a href="#" className="button">Contact Us</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default Corporate;
