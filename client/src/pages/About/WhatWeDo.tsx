import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const WhatWeDo: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section with Animation */}
    <section className="about-hero">
        <img src="/assets/images/what-we-do-hero.jpg" alt="What We Do Hero Image" className="about-hero-image" loading="lazy">
        <div className="about-hero-text animate-hero">
            <h1>What We Do</h1>
            <p>Delivering impactful solutions locally and globally to empower communities.</p>
        </div>
    </section>

    {/* Main Content with Sidebar */}
    <div className="about-page-content">
        <aside className="about-sidebar" role="navigation" aria-label="What We Do Navigation">
            <h3>In this section</h3>
            <ul>
                <li><a href="/main:about_us">About Us</a></li>
                <li><a href="/main:what_we_do" className="active">What We Do</a></li>
                <li><a href="/main:governance">Governance</a></li>
            </ul>
        </aside>

        <section className="about-main-content">
            <div className="content-section intro-text">
                <p>With over a century of experience and a dedicated community of 16,000+ members and volunteers, Thembi Community Initiative acts locally and connects globally to deliver critical support when it’s needed most.</p>
            </div>

            {/* Programs Section */}
            <div className="content-section">
                <h2>Our Programs</h2>
                <div className="info-card-row">
                    <div className="info-card expandable-card">
                        <img src="/assets/images/emergency-services.jpg" alt="Emergency Services" loading="lazy">
                        <h3>Emergency Services & Disasters</h3>
                        <p>Building resilient communities to handle disasters and climate emergencies.</p>
                        <details>
                            <summary><span className="read-more">Learn How We Do It</span></summary>
                            <div className="details-content">
                                <p>We strengthen community preparedness and recovery through training, resources, and rapid response initiatives.</p>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </details>
                    </div>
                    <div className="info-card expandable-card">
                        <img src="/assets/images/migration.jpg" alt="Migration" loading="lazy">
                        <h3>Migration Support</h3>
                        <p>Creating safe, inclusive spaces for migrants to thrive.</p>
                        <details>
                            <summary><span className="read-more">Learn How We Do It</span></summary>
                            <div className="details-content">
                                <p>We provide humanitarian aid, legal support, and integration programs for migrants.</p>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </details>
                    </div>
                    <div className="info-card expandable-card">
                        <img src="/assets/images/community-activities.jpg" alt="Community Activities" loading="lazy">
                        <h3>Community Programs</h3>
                        <p>Fostering connection and resilience through local initiatives.</p>
                        <details>
                            <summary><span className="read-more">Learn How We Do It</span></summary>
                            <div className="details-content">
                                <p>Volunteering opportunities and tailored programs address local humanitarian needs.</p>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </details>
                    </div>
                </div>

                <div className="info-card-row">
                    <div className="info-card expandable-card">
                        <img src="/assets/images/international-programs.jpg" alt="International Programs" loading="lazy">
                        <h3>International Programs</h3>
                        <p>Enhancing global resilience against crises and climate change.</p>
                        <details>
                            <summary><span className="read-more">Learn How We Do It</span></summary>
                            <div className="details-content">
                                <p>We partner with international communities to build capacity and recovery systems.</p>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </details>
                    </div>
                    <div className="info-card expandable-card">
                        <img src="/assets/images/international-humanitarian-law.jpg" alt="International Humanitarian Law" loading="lazy">
                        <h3>International Humanitarian Law</h3>
                        <p>Improving outcomes in conflict-affected regions.</p>
                        <details>
                            <summary><span className="read-more">Learn How We Do It</span></summary>
                            <div className="details-content">
                                <p>We advocate for adherence to humanitarian laws to protect vulnerable populations.</p>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </details>
                    </div>
                    <div className="info-card expandable-card">
                        <img src="/assets/images/first-nations.jpg" alt="First Nations Centrality" loading="lazy">
                        <h3>First Nations Centrality</h3>
                        <p>Working with First Nations for cultural safety and equity.</p>
                        <details>
                            <summary><span className="read-more">Learn How We Do It</span></summary>
                            <div className="details-content">
                                <p>We prioritize First Nations voices to foster inclusion and cultural respect.</p>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </details>
                    </div>
                </div>

                <div className="info-card-row">
                    <div className="info-card expandable-card">
                        <img src="/assets/images/lifeblood.jpg" alt="Lifeblood" loading="lazy">
                        <h3>Lifeblood</h3>
                        <p>Boosting blood and plasma supplies for emergencies and treatments.</p>
                        <details>
                            <summary><span className="read-more">Learn How We Do It</span></summary>
                            <div className="details-content">
                                <p>We enhance collection and distribution to improve patient outcomes.</p>
                                <a href="#" className="button">Explore More</a>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    </div>

    {/* Call-to-Action Section */}
    <section className="image-with-text">
        <div className="image-container">
            <img src="/assets/images/everyone-always.jpg" alt="Community Support" loading="lazy">
        </div>
        <div className="text-container">
            <h3>There When They Need Us</h3>
            <p>Help us support communities in rebuilding and thriving.</p>
            <a href="/main:donate" className="button">Donate Now</a>
        </div>
    </section>

    {/* Subscription Form Section */}
    <section className="subscription-section">
        <form className="subscription-form" action="#" method="post">
            {% csrf_token %}
            <h3>Stay Connected</h3>
            <p>Subscribe to receive updates on our work and ways to get involved.</p>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="First Name" required>
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Last Name" required>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required>
            </div>
            <button type="submit">Subscribe</button>
            <p className="privacy-note">We respect your privacy. Learn more in our <a href="#">Privacy Policy</a> and <a href="#">Privacy Collection Notice</a>.</p>
        </form>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhatWeDo;
