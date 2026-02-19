import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const YouthEmpowerment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/youth-empowerment-hero.jpg" alt="Youth Empowerment Hero" className="about-hero-image">
        <div className="about-hero-text">
            <h1>Youth Empowerment</h1>
            <p>Investing in the Future Leaders of Thembi.</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Empowering Youth for a Brighter Tomorrow</h2>
        <p>TCI's youth empowerment programs focus on providing young people with the skills, resources, and opportunities they need to succeed. We believe that investing in youth is essential for building a strong and vibrant community.</p>

        <h3>Our Initiatives</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/teen-club.jpg" alt="Teen Club">
                <h3>Teen Clubs</h3>
                <p>We support teen clubs that provide a safe and supportive space for adolescents to learn, socialize, and develop leadership skills.</p>
                <a href="#">Join a Club</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/mentorship.jpg" alt="Mentorship">
                <h3>Mentorship Programs</h3>
                <p>We connect young people with mentors who can provide guidance, support, and role modeling.</p>
                <a href="#">Become a Mentor</a>
            </div>
        </div>

        <h3>Get Involved</h3>
        <p>Support our youth empowerment programs by volunteering as a mentor, donating to our scholarship fund, or sponsoring a youth-led initiative.</p>
        <a href="#" className="button">Volunteer</a>
        <a href="#" className="button">Donate</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default YouthEmpowerment;
