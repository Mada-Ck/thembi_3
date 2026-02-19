import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BasicFactsAboutHiv: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="page-container">
    {/* Sidebar */}
    <aside className="about-sidebar" role="navigation" aria-label="HIV/AIDS Navigation">
        <h3>In this section</h3>
        <ul>
            <li><a href="/main:about_hiv">About HIV/AIDS</a></li>
            <li><a href="/main:malawi_statistics">Malawi Statistics</a></li>
            <li><a href="/main:basic_facts" className="active">Basic Facts</a></li>
            <li><a href="/main:world_hiv_statistics">World Statistics</a></li>
        </ul>
    </aside>

    {/* Hero Section */}
    <div className="hero" style="background-image: url('/assets/images/malawi_hiv_hero.jpg');">
        <div className="hero-content">
            <h1>Basic Facts About HIV/AIDS</h1>
            <p>Understanding the essentials of HIV and AIDS globally and locally.</p>
        </div>
    </div>

    {/* Introduction Section */}
    <div className="stats-section">
        <h1>Understanding HIV/AIDS</h1>
        <p>Since the beginning of the pandemic, millions have been affected by HIV/AIDS. This section provides key facts to help you understand HIV/AIDS, its transmission, and prevention.</p>
    </div>

    {/* Basic Facts Section */}
    <div className="stats-section">
        <h2>What is HIV/AIDS?</h2>
        <dl>
            <dt>HIV:</dt>
            <dd>Human Immunodeficiency Virus weakens the immune system by attacking white blood cells. <a href="/main:about_hiv">Learn More →</a></dd>
            <dt>AIDS:</dt>
            <dd>Acquired Immunodeficiency Syndrome is the advanced stage of HIV, leading to severe immune system damage and opportunistic infections.</dd>
        </dl>

        <h2>Key Questions</h2>
        <dl>
            <dt>How do I know if I’m infected?</dt>
            <dd>Testing is the only way to confirm HIV status, as early symptoms may be mild or absent.</dd>
            <dt>Can I tell if someone has HIV/AIDS?</dt>
            <dd>No, HIV/AIDS cannot be diagnosed by appearance alone.</dd>
            <dt>How quickly does HIV progress to AIDS?</dt>
            <dd>Progression varies, but antiretroviral therapy (ART) can delay AIDS significantly.</dd>
            <dt>How many people are affected?</dt>
            <dd>Globally, over 39 million live with HIV, with significant impact in Malawi. <a href="/main:malawi_statistics">See Malawi Stats</a></dd>
        </dl>
    </div>

    {/* Transmission Section */}
    <div className="stats-section">
        <h2>Transmission of HIV</h2>
        <p>HIV is transmitted through:</p>
        <ul>
            <li>Unprotected sexual intercourse with an infected person.</li>
            <li>Sharing needles or injection equipment.</li>
            <li>Mother-to-child transmission during pregnancy, childbirth, or breastfeeding.</li>
            <li>Blood transfusions with infected blood (rare in screened systems).</li>
        </ul>
        <p>HIV is <strong>not</strong> spread through casual contact, air, water, or insects.</p>
    </div>

    {/* Image and Text Section */}
    <div className="stats-section">
        <h2>HIV Testing and Prevention</h2>
        <div className="image-text-content">
            <div className="image-container">
                <img src="/assets/images/adolescent_girls_hiv.jpg" alt="HIV Testing and Prevention" loading="lazy">
            </div>
            <div className="text-container">
                <div className="text-item">
                    <h3>Testing</h3>
                    <p>Rapid tests and home kits are available. Early detection is key. <a href="/main:hiv_services">Find Services</a></p>
                </div>
                <div className="text-item">
                    <h3>Prevention</h3>
                    <p>Use condoms, limit partners, avoid sharing needles, and consider PrEP or PEP.</p>
                </div>
            </div>
        </div>
    </div>

    {/* Resources Section */}
    <div className="stats-section">
        <h2>Resources and Support</h2>
        <div className="resources-item">
            <p>Support our HIV/AIDS programs through donations or volunteering.</p>
            <a href="/main:donate">Donate Now</a>
            <a href="/main:volunteer">Volunteer</a>
        </div>
    </div>
</div>
      </main>
      <Footer />
    </div>
  );
};

export default BasicFactsAboutHiv;
