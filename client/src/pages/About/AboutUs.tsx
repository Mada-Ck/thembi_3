import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section with Animation */}
    <section id="hero">
        <div className="carousel">
            <img src="/assets/images/about-us-hero.jpg" alt="About Us Hero Image" className="hero-image" loading="lazy">
        </div>
        <div className="hero-content animate-hero">
            <h1>About Us</h1>
            <p>Discover how Thembi Community Initiative restores hope and empowers vulnerable communities.</p>
        </div>
    </section>

    {/* Main Content with Sidebar */}
    <div className="about-page-content">
        <aside className="about-sidebar" role="navigation" aria-label="About Us Navigation">
            <h3>In this section</h3>
            <ul>
                <li><a href="/main:about_us" className="active">About Us</a></li>
                <li><a href="/main:what_we_do">What We Do</a></li>
                <li><a href="/main:governance">Governance</a></li>
            </ul>
        </aside>

        <section className="about-main-content">
            {/* Introduction Section with Toggle */}
            <div className="content-section">
                <h2 className="toggle-header" data-toggle="background-content">Background <span className="toggle-icon">▼</span></h2>
                <div id="background-content" className="toggle-content">
                    <p>Thembi Community Initiative began in 2018, inspired by the struggles of children living with HIV and their elderly guardians in Chitipa, Malawi. After losing parents to HIV/AIDS, many children faced increased morbidity and mortality due to inadequate care.</p>
                    <p>A needs assessment by TCI volunteers revealed a community losing hope, with HIV-positive children often seen as burdens. This spurred the creation of TCI to provide holistic support—physical, psychosocial, and spiritual—focused on children and their families.</p>
                    <p>Unlike many organizations prioritizing adults, TCI bridges the gap for children, ensuring comprehensive care through community involvement and dedicated volunteers passionate about rural well-being.</p>
                </div>
            </div>

            {/* Mission, Vision, Goal in Cards */}
            <div className="info-card-row vision-mission-row">
                <div className="info-card">
                    <h3>Mission</h3>
                    <p>Partnering with communities to empower them, restore health, and renew hope.</p>
                </div>
                <div className="info-card">
                    <h3>Vision</h3>
                    <p>A thriving, healthy, and holistically empowered young generation.</p>
                </div>
                <div className="info-card">
                    <h3>Our Goal</h3>
                    <p>Reduce vulnerability and enhance quality of life, especially for women, children, and those with HIV/AIDS.</p>
                </div>
            </div>

            {/* Core Values with Structured List */}
            <div className="content-section">
                <h2 className="toggle-header" data-toggle="core-values-content">Core Values <span className="toggle-icon">▼</span></h2>
                <div id="core-values-content" className="toggle-content">
                    <ol className="structured-list">
                        <li><strong>Passion:</strong> Committed to our calling and service to humanity.</li>
                        <li><strong>Innovation:</strong> Continuously learning and adapting to transform communities.</li>
                        <li><strong>Empowerment:</strong> Enabling communities and staff to shape their futures.</li>
                        <li><strong>Stewardship:</strong> Acting as channels of God’s resources with responsibility.</li>
                        <li><strong>Control:</strong> Encouraging communities to lead sustainable change.</li>
                        <li><strong>Accountability:</strong> Transparent to our communities, supporters, and God.</li>
                        <li><strong>Love:</strong> Driven by the love of Christ in all we do.</li>
                    </ol>
                </div>
            </div>

            {/* Objectives with Structured List */}
            <div className="content-section">
                <h2 className="toggle-header" data-toggle="objectives-content">Objectives <span className="toggle-icon">▼</span></h2>
                <div id="objectives-content" className="toggle-content">
                    <ol className="structured-list">
                        <li>Ensure rights and support for children with HIV/AIDS and disabilities.</li>
                        <li>Provide treatment and care for children living with HIV/AIDS.</li>
                        <li>Reduce stigma and promote inclusion for those with HIV/AIDS.</li>
                        <li>Offer educational opportunities to young people.</li>
                        <li>Enhance understanding of Sexual and Reproductive Health Rights (SRHR).</li>
                        <li>Facilitate socio-economic skills for vulnerable communities.</li>
                        <li>Empower rural communities to meet their needs.</li>
                    </ol>
                </div>
            </div>

            {/* Info Cards with Dynamic Expansion */}
            <h2>Explore More</h2>
            <div className="info-card-row">
                <div className="info-card expandable-card">
                    <img src="/assets/images/what-we-do.jpg" alt="What We Do" loading="lazy">
                    <h3>What We Do</h3>
                    <p>Transforming lives through health, livelihood, and empowerment programs.</p>
                    <details>
                        <summary><span className="read-more">Learn More</span></summary>
                        <div className="details-content">
                            <p>Our comprehensive programs focus on sustainable solutions for HIV-positive children, teens, and women.</p>
                            <a href="/main:what_we_do" className="button">Visit What We Do</a>
                        </div>
                    </details>
                </div>
                <div className="info-card expandable-card">
                    <img src="/assets/images/how-we-work.jpg" alt="How We Work" loading="lazy">
                    <h3>How We Work</h3>
                    <p>Community-centered, evidence-based approaches for impactful development.</p>
                    <details>
                        <summary><span className="read-more">Learn More</span></summary>
                        <div className="details-content">
                            <p>We prioritize collaboration and innovation to address key challenges.</p>
                        </div>
                    </details>
                </div>
                <div className="info-card expandable-card">
                    <img src="/assets/images/governance-hero.jpg" alt="Governance" loading="lazy">
                    <h3>Governance</h3>
                    <p>Ensuring transparency and accountability in our mission.</p>
                    <details>
                        <summary><span className="read-more">Learn More</span></summary>
                        <div className="details-content">
                            <p>TCI operates with a robust structure for effective impact.</p>
                            <a href="/main:governance" className="button">Visit Governance</a>
                        </div>
                    </details>
                </div>
            </div>

            {/* Additional Info Cards */}
            <div className="info-card-row">
                <div className="info-card expandable-card">
                    <img src="/assets/images/what-we-stand-for.jpg" alt="What We Stand For" loading="lazy">
                    <h3>What We Stand For</h3>
                    <p>Guided by humanitarian principles in all our actions.</p>
                    <details>
                        <summary><span className="read-more">Learn More</span></summary>
                        <div className="details-content">
                            <p>We align with the Red Cross and Red Crescent Movement principles.</p>
                        </div>
                    </details>
                </div>
                <div className="info-card expandable-card">
                    <img src="/assets/images/inclusion-and-diversity.jpg" alt="Inclusion and diversity" loading="lazy">
                    <h3>Inclusion and Diversity</h3>
                    <p>Embracing diversity for a welcoming community.</p>
                    <details>
                        <summary><span className="read-more">Learn More</span></summary>
                        <div className="details-content">
                            <p>Our commitment to inclusivity drives our work.</p>
                        </div>
                    </details>
                </div>
            </div>

            {/* More Section with Accordions */}
            <div className="content-section">
                <h2>More Information</h2>
                <div className="accordion-container">
                    <details className="accordion-item">
                        <summary>Client Service Charter (PDF - 0.58 Mb)</summary>
                        <p>Details your rights and treatment in TCI programs.</p>
                    </details>
                    <details className="accordion-item">
                        <summary>Code of Conduct</summary>
                        <p>Our values and principles for all TCI members.</p>
                    </details>
                    <details className="accordion-item">
                        <summary>Safeguarding</summary>
                        <p>Protecting children and adults in our community.</p>
                    </details>
                    <details className="accordion-item">
                        <summary>Emissions Reduction Plan (PDF - 0.46 Mb)</summary>
                        <p>Our ESG commitment to sustainability.</p>
                    </details>
                </div>
            </div>
        </section>

        {/* Image with Text Section */}
        <section className="image-with-text">
            <div className="image-container">
                <img src="/assets/images/everyone-always.jpg" alt="Community Support" loading="lazy">
            </div>
            <div className="text-container">
                <h3>There When They Need Us</h3>
                <p>Supporting communities to rebuild and thrive.</p>
                <a href="/main:donate" className="button">Donate Now</a>
            </div>
        </section>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
