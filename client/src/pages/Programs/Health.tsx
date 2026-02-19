import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Health: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/health-hero.jpg" alt="Health Hero" className="about-hero-image">
        <div className="about-hero-text">
            <h1>Health</h1>
            <p>Improving Health Outcomes in the Thembi Community.</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Comprehensive Healthcare for a Healthier Community</h2>
        <p>TCI is committed to providing access to essential healthcare services and promoting healthy lifestyles in the Thembi community. We focus on addressing critical health challenges and improving overall well-being.</p>

        <h3>Our Focus Areas</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/hiv-aids.jpg" alt="HIV/AIDS">
                <h3>HIV/AIDS Prevention and Care</h3>
                <p>We offer comprehensive HIV/AIDS prevention, testing, treatment, and support services, with a particular focus on children, adolescents, and women.</p>
                <a href="#">Learn More</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/child-health.jpg" alt="Child Health">
                <h3>Child and Maternal Health</h3>
                <p>We provide essential healthcare services for children and mothers, including immunizations, prenatal care, and postnatal support.</p>
                <a href="#">Learn More</a>
            </div>
        </div>

        <h3>Get Involved</h3>
        <p>Support our health programs by volunteering, donating medical supplies, or sponsoring a community health worker.</p>
        <a href="#" className="button">Volunteer</a>
        <a href="#" className="button">Donate</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default Health;
