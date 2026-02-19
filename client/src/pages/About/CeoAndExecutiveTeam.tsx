import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CeoAndExecutiveTeam: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
    <section className="about-hero">
        <img src="/assets/images/executive-hero.jpg" alt="CEO and Executive Team Hero Image" className="about-hero-image" loading="lazy">
        <div className="about-hero-text animate-hero">
            <h1>CEO and Executive Team</h1>
            <p>Driving TCI’s vision with expertise and passion.</p>
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
                        <li><a href="/main:ceo_and_executive_team" className="active">CEO and Executive Team</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <section className="about-main-content">
            {/* Executive Overview */}
            <div className="content-section">
                <h2 className="toggle-header" data-toggle="executive-content">Our Leadership <span className="toggle-icon">▼</span></h2>
                <div id="executive-content" className="toggle-content">
                    <p>The CEO and Executive Team lead TCI’s day-to-day operations, implementing the board’s strategic vision with a focus on community empowerment and health.</p>
                </div>
            </div>

            {/* Executive Team List */}
            <div className="content-section">
                <h2>Executive Team</h2>
                <div className="board-container">
                    <ul className="board-members">
                        <li className="member-card animate-card">
                            <img src="/assets/images/executive/jane-doe.jpg" alt="Jane Doe" className="member-image" loading="lazy">
                            <div className="member-name">Jane Doe</div>
                            <div className="member-role">Chief Executive Officer</div>
                            <div className="member-desc">Guides TCI with a vision for sustainable impact.</div>
                        </li>
                        <li className="member-card animate-card">
                            <img src="/assets/images/executive/john-smith.jpg" alt="John Smith" className="member-image" loading="lazy">
                            <div className="member-name">John Smith</div>
                            <div className="member-role">Chief Operating Officer</div>
                            <div className="member-desc">Oversees program execution and operations.</div>
                        </li>
                        <li className="member-card animate-card">
                            <img src="/assets/images/executive/mary-jones.jpg" alt="Mary Jones" className="member-image" loading="lazy">
                            <div className="member-name">Mary Jones</div>
                            <div className="member-role">Chief Financial Officer</div>
                            <div className="member-desc">Manages financial strategy and transparency.</div>
                        </li>
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

export default CeoAndExecutiveTeam;
