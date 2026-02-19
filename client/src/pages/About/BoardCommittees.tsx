import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BoardCommittees: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
    <section className="about-hero">
        <img src="/assets/images/committees-hero.jpg" alt="Board Committees Hero Image" className="about-hero-image" loading="lazy">
        <div className="about-hero-text animate-hero">
            <h1>Board Committees</h1>
            <p>Specialized teams driving TCI’s strategic goals.</p>
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
                        <li><a href="/main:board_committees" className="active">Board Committees</a></li>
                        <li><a href="/main:ceo_and_executive_team">CEO and Executive Team</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <section className="about-main-content">
            {/* Committees Overview */}
            <div className="content-section">
                <h2 className="toggle-header" data-toggle="committees-content">Our Committees <span className="toggle-icon">▼</span></h2>
                <div id="committees-content" className="toggle-content">
                    <p>TCI’s Board Committees focus on key areas to support our mission. Comprising board members and experts, they ensure effective governance and program success.</p>
                </div>
            </div>

            {/* Committee List */}
            <div className="content-section">
                <h2>Committees</h2>
                <ul className="structured-list">
                    <li>
                        <strong>Finance Committee</strong>
                        <p>Oversees budgeting, financial transparency, and audits.</p>
                    </li>
                    <li>
                        <strong>Program Committee</strong>
                        <p>Guides the development and evaluation of community programs.</p>
                    </li>
                    <li>
                        <strong>Governance Committee</strong>
                        <p>Ensures board performance and ethical standards.</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default BoardCommittees;
