import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BoardMembers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
    <section className="about-hero">
        <img src="/assets/images/board-members-hero.jpg" alt="Board Members Hero Image" className="about-hero-image" loading="lazy">
        <div className="about-hero-text animate-hero">
            <h1>Board Members</h1>
            <p>Meet the dedicated leaders guiding TCI’s mission.</p>
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
                        <li><a href="/main:board_members" className="active">Board Members</a></li>
                        <li><a href="/main:board_committees">Board Committees</a></li>
                        <li><a href="/main:ceo_and_executive_team">CEO and Executive Team</a></li>
                    </ul>
                </li>
            </ul>
        </aside>

        <section className="about-main-content">
            {/* Board Overview */}
            <div className="content-section">
                <h2 className="toggle-header" data-toggle="board-content">Our Board <span className="toggle-icon">▼</span></h2>
                <div id="board-content" className="toggle-content">
                    <p>TCI’s Board of Directors provides strategic oversight, ensuring our programs align with our mission to empower communities and improve lives.</p>
                </div>
            </div>

            {/* Board Members List */}
            <div className="content-section">
                <h2>Board Members</h2>
                <div className="board-container">
                    <ul className="board-members">
                        <li className="member-card animate-card">
                            <img src="/assets/images/board/louise-laubscher.jpg" alt="Ms Louise Laubscher" className="member-image" loading="lazy">
                            <div className="member-name">Ms Louise Laubscher</div>
                            <div className="member-role">Chairperson</div>
                            <div className="member-desc">Leads with extensive community development experience.</div>
                        </li>
                        <li className="member-card animate-card">
                            <img src="/assets/images/board/kolezi-phiri.jpg" alt="Counsel Kolezi Phiri" className="member-image" loading="lazy">
                            <div className="member-name">Counsel Kolezi Phiri</div>
                            <div className="member-role">Vice Chairperson</div>
                            <div className="member-desc">Offers legal expertise and leadership support.</div>
                        </li>
                        <li className="member-card animate-card">
                            <img src="/assets/images/board/mphatso-chikhwaza.jpg" alt="Mrs Mphatso Chikhwaza" className="member-image" loading="lazy">
                            <div className="member-name">Mrs Mphatso Chikhwaza</div>
                            <div className="member-role">Executive Director & Secretary</div>
                            <div className="member-desc">Ensures mission alignment and operational oversight.</div>
                        </li>
                        <li className="member-card animate-card">
                            <img src="/assets/images/board/bornwell-kaunga.jpg" alt="Mr Bornwell Kaunga" className="member-image" loading="lazy">
                            <div className="member-name">Mr Bornwell Kaunga</div>
                            <div className="member-role">Member</div>
                            <div className="member-desc">Brings finance and engagement insights.</div>
                        </li>
                        <li className="member-card animate-card">
                            <img src="/assets/images/board/aston-gondwe.jpg" alt="Mr Aston Gondwe" className="member-image" loading="lazy">
                            <div className="member-name">Mr Aston Gondwe</div>
                            <div className="member-role">Member</div>
                            <div className="member-desc">Expert in sustainable development.</div>
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

export default BoardMembers;
