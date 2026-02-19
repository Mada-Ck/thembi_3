import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';

const Pmtct: React.FC = () => {
    return (
        <Base>
            <main className="container mx-auto px-4 py-8">
                <section className="about-hero">
                    <img
                        src="/assets/images/pmtct-hero.jpg"
                        alt="PMTCT Hero Image"
                        className="about-hero-image"
                        loading="lazy"
                    />
                    <div className="about-hero-text animate-hero">
                        <h1>PMTCT & Support for HIV+ Women</h1>
                        <p>Dedicated Programs for Mothers and Children.</p>
                    </div>
                </section>

                <div className="get-help-content grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                    <aside className="about-sidebar col-span-1" role="navigation" aria-label="Get Help Navigation">
                        <h3 className="font-bold text-xl mb-4">In this section</h3>
                        <ul className="space-y-2">
                            <li><Link href="/child-clinic" className="hover:text-primary">Child Clinic</Link></li>
                            <li><Link href="/hiv-services" className="hover:text-primary">HIV Community Services</Link></li>
                            <li><Link href="/teen-club" className="hover:text-primary">Teen Club</Link></li>
                            <li><Link href="/pmtct" className="text-primary font-bold">PMTCT & HIV+ Women</Link></li>
                        </ul>
                    </aside>

                    <section className="main-content col-span-1 md:col-span-3">
                        <h2 className="text-3xl font-bold mb-4">PMTCT and Support for HIV+ Women</h2>
                        <p className="mb-4 text-gray-700">The Thembi Community Initiative offers comprehensive programs to prevent mother-to-child transmission (PMTCT) of HIV and provide holistic support for HIV-positive women. Our services empower mothers, protect infants, and strengthen families.</p>

                        <h3 className="text-2xl font-semibold mb-3">What is PMTCT?</h3>
                        <p className="mb-4 text-gray-700">Prevention of Mother-to-Child Transmission (PMTCT) is a set of interventions designed to prevent HIV transmission from an HIV-positive mother to her child during pregnancy, childbirth, or breastfeeding. Our PMTCT program ensures access to testing, treatment, and support for healthy outcomes.</p>

                        <h3 className="text-2xl font-semibold mb-3">Our Services</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                            <li><strong>Antiretroviral Therapy (ART):</strong> Providing ART to HIV-positive mothers to reduce viral load and prevent transmission.</li>
                            <li><strong>Counseling and Support:</strong> Offering individual and group counseling to address emotional and social challenges.</li>
                            <li><strong>Infant Feeding Guidance:</strong> Educating mothers on safe infant feeding practices to minimize HIV transmission risks.</li>
                            <li><strong>Partner Testing and Treatment:</strong> Encouraging HIV testing and linkage to care for partners to support family health.</li>
                            <li><strong>Early Infant Diagnosis:</strong> Conducting early HIV testing for infants to ensure timely intervention if needed.</li>
                        </ul>

                        <div className="info-card-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="info-card border p-4 rounded-lg bg-white shadow-sm">
                                <img
                                    src="/assets/images/pmtct-art.jpg"
                                    alt="Antiretroviral Therapy"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg text-primary">ART Access</h3>
                                <p className="text-gray-600">Ensuring mothers receive life-saving treatment.</p>
                            </div>
                            <div className="info-card border p-4 rounded-lg bg-white shadow-sm">
                                <img
                                    src="/assets/images/pmtct-counseling.jpg"
                                    alt="Counseling Support"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg text-primary">Counseling</h3>
                                <p className="text-gray-600">Supporting emotional and mental well-being.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">Support for HIV+ Women</h3>
                        <p className="mb-4 text-gray-700">Beyond PMTCT, we offer support groups, mental health services, and economic empowerment programs to help HIV-positive women thrive. Our peer-led initiatives foster community and resilience.</p>

                        <h3 className="text-2xl font-semibold mb-3">How to Access Services</h3>
                        <p className="mb-4 text-gray-700">Visit our office at [Address] or call [Phone Number] to enroll in our PMTCT program. Services are free and confidential. Contact us for eligibility details or to schedule a visit.</p>
                        <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded link-button mb-8 font-bold hover:bg-primary/90 transition">Contact Us</Link>

                        <h3 className="text-2xl font-semibold mb-3">Success Stories</h3>
                        <p className="mb-6 text-gray-700 italic border-l-4 border-primary pl-4">With consent, we share anonymized stories of mothers who have benefited from our programs, highlighting healthy births and empowered lives. [Add specific stories here.]</p>

                        <h3 className="text-2xl font-semibold mb-3">Frequently Asked Questions (FAQs)</h3>
                        <div className="faq-container space-y-4 mb-8">
                            <details className="faq-item border rounded-lg p-2 group">
                                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center p-2">
                                    What is the most effective way to prevent mother-to-child transmission of HIV?
                                    <span className="group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="p-2 text-gray-700">
                                    <p>The most effective way is through a combination of antiretroviral therapy (ART) for the mother, safe delivery practices, and appropriate infant feeding. ART reduces the mother’s viral load, significantly lowering transmission risk.</p>
                                </div>
                            </details>
                            <details className="faq-item border rounded-lg p-2 group">
                                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center p-2">
                                    Can I breastfeed my baby?
                                    <span className="group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="p-2 text-gray-700">
                                    <p>With proper ART and guidance, breastfeeding can be safe. We provide counseling on exclusive breastfeeding and other options to minimize risks. Consult our team for personalized advice.</p>
                                </div>
                            </details>
                            <details className="faq-item border rounded-lg p-2 group">
                                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center p-2">
                                    When should I visit the clinic?
                                    <span className="group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="p-2 text-gray-700">
                                    <p>Visit as soon as you know you’re pregnant or suspect you may be HIV-positive. Early intervention is key. We recommend regular check-ups throughout pregnancy and after delivery.</p>
                                </div>
                            </details>
                        </div>

                        <p className="text-gray-700">Learn more about our <Link href="/child-clinic" className="text-primary hover:underline font-semibold">Child Clinic services</Link> or <Link href="/hiv-services" className="text-primary hover:underline font-semibold">HIV Community Services</Link>.</p>
                    </section>
                </div>
            </main>
        </Base>
    );
};

export default Pmtct;

