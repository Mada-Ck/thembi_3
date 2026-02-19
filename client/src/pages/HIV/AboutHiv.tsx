import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AboutHiv: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="page-container">
    {/* Sidebar */}
    <aside className="about-sidebar" role="navigation" aria-label="HIV/AIDS Navigation">
        <h3>In this section</h3>
        <ul>
            <li><a href="/main:about_hiv" className="active">About HIV/AIDS</a></li>
            <li><a href="/main:malawi_statistics">Malawi Statistics</a></li>
            <li><a href="/main:basic_facts">Basic Facts</a></li>
            <li><a href="/main:world_hiv_statistics">World Statistics</a></li>
        </ul>
    </aside>

    {/* Hero Section */}
    <div className="hero" style="background-image: url('/assets/images/malawi_hiv_hero.jpg');">
        <div className="hero-content">
            <h1>About HIV/AIDS</h1>
            <p>Exploring the basics and impact of HIV/AIDS globally.</p>
        </div>
    </div>

    {/* Basic Facts Section */}
    <div className="stats-section">
        <h1>Understanding HIV/AIDS</h1>
        <p>Since the pandemic began, 85.6 million people have acquired HIV, and over 40 million have died of AIDS-related illnesses. Here’s an overview of what HIV and AIDS are.</p>
        <dl>
            <dt>What is HIV?</dt>
            <dd>Human Immunodeficiency Virus is a retrovirus that infects human cells, using their energy to grow and reproduce, ultimately causing AIDS. <a href="/main:basic_facts">Learn More →</a></dd>
            <dt>What is AIDS?</dt>
            <dd>Acquired Immunodeficiency Syndrome is the stage where the immune system fails, leaving the body vulnerable to opportunistic infections and diseases.</dd>
        </dl>
    </div>

    {/* Statistics Section */}
    <div className="stats-section">
        <h2>HIV/AIDS Statistics</h2>
        <div className="stats-item">
            <h3>HIV/AIDS in Malawi</h3>
            <p>Malawi faces significant challenges with HIV prevalence. <a href="/main:malawi_statistics">Read More</a></p>
        </div>
        <div className="stats-item">
            <h3>HIV/AIDS in the World</h3>
            <p>Approximately 39 million people live with HIV globally. <a href="/main:world_hiv_statistics">Read More</a></p>
        </div>
    </div>

    {/* Timeline Section */}
    <div className="stats-section">
        <h2>HIV/AIDS Timeline</h2>
        <div className="image-text-content">
            <div className="image-container">
                <img src="/assets/images/adolescent_girls_hiv.jpg" alt="HIV/AIDS Timeline" loading="lazy">
            </div>
            <div className="text-container">
                <p>Our chronicle of the HIV/AIDS pandemic begins in 1981, when the first cases of a mysterious and deadly new pathogen emerged.</p>
            </div>
        </div>
    </div>

    {/* Resources Section */}
    <div className="stats-section">
        <h2>HIV Resources</h2>
        <div className="resources-item">
            <p>A wide range of local, national, and international organizations conduct research and provide services, information, and advocacy for those affected by HIV.</p>
            <a href="/main:hiv_services">Explore Services</a>
            <a href="/main:donate">Support Our Work</a>
        </div>
    </div>
</div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutHiv;
