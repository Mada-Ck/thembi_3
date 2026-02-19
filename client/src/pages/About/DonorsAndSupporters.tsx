import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DonorsAndSupporters: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
    <section className="about-hero">
        <img src="/assets/images/donors-hero.jpg" alt="Donors and Supporters Hero Image" className="about-hero-image" loading="lazy">
        <div className="about-hero-text animate-hero">
            <h1>Donors and Supporters</h1>
            <p>Our partners in creating lasting change for vulnerable communities.</p>
        </div>
    </section>

    {/* Main Content with Sidebar */}
    <div className="about-page-content">
        <aside className="about-sidebar" role="navigation" aria-label="Governance Navigation">
            <h3 className="sidebar-toggle">In this section <span className="toggle-icon">▼</span></h3>
            <ul className="sidebar-menu">
                <li><a href="/main:about_us">About Us</a></li>
                <li><a href="/main:what_we_do">What We Do</a></li>
                <li><a href="/main:governance" className="active">Governance</a>
                    <ul className="sub-menu">
                        <li><a href="/main:donors_and_supporters" className="active">Donors and Supporters</a></li>
                        <li><a href="/main:board_members">Board Members</a></li>
                        <li><a href="/main:board_committees">Board Committees</a></li>
                        <li><a href="/main:ceo_and_executive_team">CEO and Executive Team</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <section className="about-main-content">
            {/* Donors Overview */}
            <div className="content-section" id="donors">
                <h2 className="toggle-header" data-toggle="donors-content">Our Donors and Supporters <span className="toggle-icon">▼</span></h2>
                <div id="donors-content" className="toggle-content">
                    <p>Thembi Community Initiative (TCI) thrives thanks to the generous support of our donors and partners. Their contributions enable us to deliver holistic support to vulnerable communities, focusing on children, women, and those living with HIV/AIDS.</p>
                    <p>From individuals to organizations, our supporters share our vision of a healthier, empowered future. Their funding and resources help us implement programs, conduct outreach, and sustain our operations with transparency and accountability.</p>
                </div>
            </div>

            {/* Key Supporters */}
            <div className="content-section">
                <h2>Key Supporters</h2>
                <ul className="structured-list">
                    <li><strong>Global Health Foundation</strong> - Provides grants for HIV/AIDS care programs.</li>
                    <li><strong>Chitipa Community Fund</strong> - Supports local initiatives for youth education.</li>
                    <li><strong>Individual Donors</strong> - Countless contributors who fuel our mission daily.</li>
                </ul>
            </div>

            {/* Get Involved */}
            <div className="content-section">
                <h2 className="toggle-header" data-toggle="get-involved-content">Get Involved <span className="toggle-icon">▼</span></h2>
                <div id="get-involved-content" className="toggle-content">
                    <p>Join our community of supporters! Whether through donations, partnerships, or volunteering, your involvement makes a difference.</p>
                    <a href="/main:donate" className="button">Donate Now</a>
                </div>
            </div>
        </section>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonorsAndSupporters;
