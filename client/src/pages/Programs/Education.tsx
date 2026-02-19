import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Education: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/education-hero.jpg" alt="Education Hero" className="about-hero-image">
        <div className="about-hero-text">
            <h1>Education</h1>
            <p>Empowering the Next Generation Through Learning.</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Opening Doors Through Education</h2>
        <p>TCI is committed to improving access to quality education for children and youth in the Thembi community. We believe that education is a fundamental right and a key driver of individual and community development.</p>

        <h3>Our Programs</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/early-childhood.jpg" alt="Early Childhood">
                <h3>Early Childhood Development</h3>
                <p>We support early childhood development programs to ensure children have a strong foundation for future learning.</p>
                <a href="#">Learn More</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/scholarships.jpg" alt="Scholarships">
                <h3>Scholarships and Bursaries</h3>
                <p>We provide scholarships and bursaries to help students from disadvantaged backgrounds access secondary and tertiary education.</p>
                <a href="#">Apply Now</a>
            </div>
        </div>

        <h3>Get Involved</h3>
        <p>Support our education programs by volunteering as a tutor, donating school supplies, or sponsoring a student's education.</p>
        <a href="#" className="button">Volunteer</a>
        <a href="#" className="button">Donate</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
