import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Livelihood: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/livelihood-hero.jpg" alt="Livelihood Hero" className="about-hero-image">
        <div className="about-hero-text">
            <h1>Livelihood</h1>
            <p>Building Sustainable Livelihoods for a Brighter Future.</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Empowering Families Through Sustainable Livelihoods</h2>
        <p>TCI's livelihood programs aim to improve economic opportunities and reduce poverty in the Thembi community. We provide skills training, access to resources, and support for entrepreneurship.</p>

        <h3>Our Approach</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/skills-training.jpg" alt="Skills Training">
                <h3>Skills Training</h3>
                <p>We offer vocational training in various fields, such as agriculture, tailoring, and carpentry, to equip individuals with marketable skills.</p>
                <a href="#">Learn More</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/microfinance.jpg" alt="Microfinance">
                <h3>Microfinance and Entrepreneurship</h3>
                <p>We provide access to microfinance loans and business development support to help individuals start and grow their own businesses.</p>
                <a href="#">Learn More</a>
            </div>
        </div>

        <h3>Success Stories</h3>
        <p>[Include inspiring success stories of individuals and families who have benefited from TCI's livelihood programs.]</p>

        <h3>Get Involved</h3>
        <p>Support our livelihood programs by volunteering your expertise, donating to our microfinance fund, or sponsoring a skills training program.</p>
        <a href="#" className="button">Volunteer</a>
        <a href="#" className="button">Donate</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default Livelihood;
