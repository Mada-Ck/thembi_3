import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CommunityEmpowerment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/community-empowerment-hero.jpg" alt="Community Empowerment Hero" className="about-hero-image">
        <div className="about-hero-text">
            <h1>Community Empowerment</h1>
            <p>Building a Stronger Thembi, Together.</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Empowering Communities for Sustainable Change</h2>
        <p>At TCI, we believe that sustainable change starts with empowered communities. Our community empowerment programs focus on building local capacity, fostering leadership, and promoting self-reliance.</p>

        <h3>Key Initiatives</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/community-leadership.jpg" alt="Community Leadership">
                <h3>Community Leadership Development</h3>
                <p>We provide training and resources to local leaders, helping them effectively address community needs and advocate for positive change.</p>
                <a href="#">Learn More</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/community-projects.jpg" alt="Community-Led Projects">
                <h3>Community-Led Projects</h3>
                <p>We support community-led projects that address local priorities, such as infrastructure development, resource management, and conflict resolution.</p>
                <a href="#">Get Involved</a>
            </div>
        </div>

        <h3>Success Stories</h3>
        <p>[Include inspiring success stories of how TCI's community empowerment programs have made a positive impact.]</p>

        <h3>Get Involved</h3>
        <p>We welcome volunteers, partners, and donors who share our commitment to community empowerment. Contact us to learn how you can contribute.</p>
        <a href="#" className="button">Contact Us</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default CommunityEmpowerment;
