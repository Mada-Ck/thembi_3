import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HivServices: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="about-hero">
        <img src="/assets/images/hiv-services-hero.jpg" alt="HIV Services Hero Image" className="about-hero-image" loading="lazy">
        <div className="about-hero-text animate-hero">
            <h1>HIV Community Services</h1>
            <p>Support for Individuals and Communities Affected by HIV.</p>
        </div>
    </section>

    <div className="get-help-content">
        <aside className="about-sidebar" role="navigation" aria-label="Get Help Navigation">
            <h3>In this section</h3>
            <ul>
                <li><a href="/main:child_clinic">Child Clinic</a></li>
                <li><a href="/main:hiv_services" className="active">HIV Community Services</a></li>
                <li><a href="/main:join_teen_club">Teen Club</a></li>
                <li><a href="/main:pmtct">PMTCT & HIV+ Women</a></li>
            </ul>
        </aside>

        <section className="main-content">
            <h2>HIV Community Services</h2>
            <p>The Thembi Community Initiative provides a range of services to support individuals and communities affected by HIV. We are committed to reducing stigma, promoting prevention, and ensuring access to care and treatment for all.</p>

            <h3>Our Services Include:</h3>
            <ul>
                <li><strong>HIV Testing and Counseling:</strong> Confidential and free HIV testing services with pre- and post-test counseling.</li>
                <li><strong>Prevention Education:</strong> Workshops and outreach programs to promote safe sex practices and prevent the spread of HIV.</li>
                <li><strong>ART Adherence Support:</strong> Counseling and support groups to help individuals adhere to their antiretroviral therapy (ART) regimens.</li>
                <li><strong>Support Groups:</strong> Peer support groups for people living with HIV to share experiences and build community.</li>
                <li><strong>Nutritional Support:</strong> Food packages and nutritional counseling to help individuals maintain a healthy diet.</li>
                <li><strong>Linkage to Care:</strong> Assistance with connecting to medical care and social services.</li>
                <li><strong>Stigma Reduction Programs:</strong> Initiatives to combat stigma and discrimination against people living with HIV.</li>
            </ul>

            <div className="info-card-row">
                <div className="info-card">
                    <img src="/assets/images/hiv-testing.jpg" alt="HIV Testing" loading="lazy">
                    <h3>Confidential HIV Testing</h3>
                    <p>Know your status. Get tested in a safe and confidential environment.</p>
                </div>
                <div className="info-card">
                    <img src="/assets/images/hiv-support-group.jpg" alt="HIV Support Group" loading="lazy">
                    <h3>Support and Community</h3>
                    <p>Connect with others and find strength in shared experiences.</p>
                </div>
            </div>

            <h3>Who Can Access Our Services?</h3>
            <p>Our HIV community services are available to all members of the Thembi community, regardless of their HIV status. We prioritize serving vulnerable populations, including:</p>
            <ul>
                <li>People living with HIV</li>
                <li>Youth</li>
                <li>Women</li>
                <li>Marginalized communities</li>
            </ul>

            <h3>How to Access Services</h3>
            <p>To access our HIV community services, please visit our office at [Address] or call us at [Phone Number]. You can also send us an email at [Email Address]. All services are confidential and provided free of charge.</p>
            <a href="/main:contact" className="button">Contact Us for More Information</a>
            <p>Learn more about our <a href="/main:pmtct">PMTCT & HIV Women programs</a>.</p>
        </section>
    </div>
      </main>
      <Footer />
    </div>
  );
};

export default HivServices;
