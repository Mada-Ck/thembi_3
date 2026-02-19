import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Governance: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section with Animation */}
    <section className="about-hero">
        <img src="/assets/images/governance-hero.jpg" alt="Governance Hero Image" className="about-hero-image" loading="lazy">
        <div className="about-hero-text animate-hero">
            <h1>Governance</h1>
            <p>Ensuring integrity, transparency, and community-driven impact at Thembi Community Initiative.</p>
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
                        <li><a href="/main:donors_and_supporters">Donors and Supporters</a></li>
                        <li><a href="/main:board_members">Board Members</a></li>
                        <li><a href="/main:board_committees">Board Committees</a></li>
                        <li><a href="/main:ceo_and_executive_team">CEO and Executive Team</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <section className="about-main-content">
            {/* Governance Overview */}
            <div className="content-section" id="overview">
                <h2 className="toggle-header" data-toggle="governance-content">Governance at TCI <span className="toggle-icon">▼</span></h2>
                <div id="governance-content" className="toggle-content">
                    <p>Strong governance is the backbone of Thembi Community Initiative (TCI), ensuring integrity, transparency, and accountability in all we do. Our leadership upholds ethical standards, financial stewardship, and community-driven decisions.</p>
                    <p>TCI’s Board of Directors provides strategic oversight, aligning programs with our mission of empowerment and health. Working with a skilled management team, we ensure efficient implementation and lasting impact.</p>
                    <p>Financial transparency is key. We conduct annual audits, align budgets with priorities, and report regularly to stakeholders, building trust with our donors and partners.</p>
                    <p>Community voices shape our governance. By involving beneficiaries, we create sustainable, needs-based solutions that empower communities to thrive.</p>
                    <p>Explore the links on the left to learn more about our donors, board, committees, and executive team.</p>
                </div>
            </div>

            {/* Annual Reports */}
            <div className="content-section" id="reports">
                <h2 className="toggle-header" data-toggle="reports-content">Annual Reports <span className="toggle-icon">▼</span></h2>
                <div id="reports-content" className="toggle-content">
                    <ul className="structured-list">
                        <li><a href="#">Annual Report 2023 (PDF)</a></li>
                        <li><a href="#">Annual Report 2022 (PDF)</a></li>
                    </ul>
                </div>
            </div>

            {/* Policies */}
            <div className="content-section" id="policies">
                <h2 className="toggle-header" data-toggle="policies-content">Policies <span className="toggle-icon">▼</span></h2>
                <div id="policies-content" className="toggle-content">
                    <ul className="structured-list">
                        <li><a href="#">Code of Conduct</a></li>
                        <li><a href="#">Financial Transparency Policy</a></li>
                        <li><a href="#">Conflict of Interest Policy</a></li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default Governance;
