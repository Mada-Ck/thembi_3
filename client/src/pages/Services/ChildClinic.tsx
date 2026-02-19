import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';

const ChildClinic: React.FC = () => {
    return (
        <Base>
            <main className="container mx-auto px-4 py-8">
                <section className="about-hero">
                    <img
                        src="/assets/images/child-clinic-hero.jpg"
                        alt="Child Clinic Hero Image"
                        className="about-hero-image"
                        loading="lazy"
                    />
                    <div className="about-hero-text animate-hero">
                        <h1>Child Clinic & Counseling</h1>
                        <p>Supporting the Health and Well-being of Your Child.</p>
                    </div>
                </section>

                <div className="get-help-content grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                    <aside className="about-sidebar col-span-1" role="navigation" aria-label="Get Help Navigation">
                        <h3 className="font-bold text-xl mb-4">In this section</h3>
                        <ul className="space-y-2">
                            <li><Link href="/child-clinic" className="text-primary font-bold">Child Clinic</Link></li>
                            <li><Link href="/hiv-services" className="hover:text-primary">HIV Community Services</Link></li>
                            <li><Link href="/teen-club" className="hover:text-primary">Teen Club</Link></li>
                            <li><Link href="/pmtct" className="hover:text-primary">PMTCT & HIV+ Women</Link></li>
                        </ul>
                    </aside>

                    <section className="main-content col-span-1 md:col-span-3">
                        <h2 className="text-3xl font-bold mb-4">Child Clinic and Counseling Services</h2>
                        <p className="mb-4">The Thembi Community Initiative's Child Clinic provides comprehensive healthcare services and counseling support for children in our community. We are dedicated to ensuring the health and well-being of every child, from infancy through adolescence.</p>

                        <h3 className="text-2xl font-semibold mb-3">Our Services Include:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6">
                            <li><strong>Well-Child Check-ups:</strong> Regular check-ups to monitor growth and development, administer vaccinations, and provide preventive care.</li>
                            <li><strong>Sick Child Visits:</strong> Diagnosis and treatment of common childhood illnesses.</li>
                            <li><strong>Vaccinations:</strong> Administering all recommended childhood vaccinations to protect against infectious diseases.</li>
                            <li><strong>Nutritional Assessments:</strong> Assessing children's nutritional status and providing guidance on healthy eating habits.</li>
                            <li><strong>Developmental Screenings:</strong> Identifying potential developmental delays and providing early intervention services.</li>
                            <li><strong>Counseling Services:</strong> Individual and family counseling to address emotional, behavioral, and social challenges.</li>
                            <li><strong>Referrals:</strong> Connecting families with specialized medical care and social services when needed.</li>
                        </ul>

                        <div className="info-card-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="info-card border p-4 rounded-lg">
                                <img
                                    src="/assets/images/well-child-checkup.jpg"
                                    alt="Well-Child Checkup"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg">Regular Check-ups</h3>
                                <p>Ensure your child's healthy growth and development.</p>
                            </div>
                            <div className="info-card border p-4 rounded-lg">
                                <img
                                    src="/assets/images/child-counseling.jpg"
                                    alt="Child Counseling"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg">Counseling Support</h3>
                                <p>Address emotional and behavioral concerns in a safe and supportive environment.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">Who Can Access Our Services?</h3>
                        <p className="mb-4">Our Child Clinic services are available to all children in the Thembi community, from newborns through age 18. We welcome families from all backgrounds and income levels.</p>

                        <h3 className="text-2xl font-semibold mb-3">How to Access Services</h3>
                        <p className="mb-4">To schedule an appointment at the Child Clinic, please call us at [Phone Number] or visit our office at [Address]. Walk-ins are also welcome, but appointments are recommended. A small fee is charged for each visit, but no child will be turned away due to inability to pay. Scholarships are available.</p>
                        <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded link-button mb-6">Schedule an Appointment</Link>

                        <h3 className="text-2xl font-semibold mb-3">Our Team</h3>
                        <p className="mb-4">Our Child Clinic is staffed by a team of experienced and compassionate healthcare professionals, including pediatricians, nurses, and counselors. We are committed to providing high-quality care in a child-friendly environment.</p>

                        <p>Learn more about our <Link href="/teen-club" className="text-primary hover:underline">Teen Club</Link> or our <Link href="/pmtct" className="text-primary hover:underline">PMTCT & HIV Women programs</Link>.</p>
                    </section>
                </div>
            </main>
        </Base>
    );
};

export default ChildClinic;

