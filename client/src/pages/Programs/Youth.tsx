import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Youth: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/youth-hero.jpg" alt="Youth Hero Image" className="about-hero-image">
        <div className="about-hero-text">
            <h1>It Starts with YOUth</h1>
            <p>Empowering the Next Generation of Leaders.</p>
        </div>
    </section>

    <section className="get-help-content">
        <h2>Investing in Our Future: Youth Empowerment at TCI</h2>
        <p>The Thembi Community Initiative believes that investing in youth is investing in the future. We are committed to empowering young people with the skills, resources, and opportunities they need to thrive and become leaders in their communities.</p>

        <h3>Our Youth Empowerment Programs</h3>
        <div className="info-card-row">
            <div className="info-card">
                <img src="/assets/images/youth-leadership.jpg" alt="Youth Leadership Program">
                <h3>Leadership Development</h3>
                <p>Develop leadership skills through workshops, training, and mentorship.</p>
                <a href="#">Learn More</a>
            </div>
            <div className="info-card">
                <img src="/assets/images/youth-skills.jpg" alt="Skills Training">
                <h3>Skills Training</h3>
                <p>Gain vocational and life skills to increase employability and economic independence.</p>
                <a href="#">Learn More</a>
            </div>
        </div>

        <h3>Youth-Led Initiatives</h3>
        <p>We support youth-led initiatives that address community challenges and promote positive change. If you have an idea for a project, we can help you develop it and secure funding.</p>

        <h3>Success Stories</h3>
        <p>[Include inspiring success stories of young people who have benefited from TCI's youth empowerment programs.]</p>

        <h3>Get Involved</h3>
        <p>Are you a young person looking to make a difference? Contact us to learn more about how you can get involved in our youth empowerment programs. Parents and community members are also welcome to volunteer their time and expertise.</p>
        <a href="#" className="button">Contact Us</a>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default Youth;
