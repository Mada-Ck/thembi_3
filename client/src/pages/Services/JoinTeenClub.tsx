import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';

const JoinTeenClub: React.FC = () => {
    return (
        <Base>
            <main className="container mx-auto px-4 py-8">
                <section className="about-hero">
                    <img
                        src="/assets/images/teen-club-hero.jpg"
                        alt="Join Teen Club Hero Image"
                        className="about-hero-image"
                        loading="lazy"
                    />
                    <div className="about-hero-text animate-hero">
                        <h1>Join Teen Club</h1>
                        <p>Connect, Learn, and Grow with TCI.</p>
                    </div>
                </section>

                <div className="get-help-content grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                    <aside className="about-sidebar col-span-1" role="navigation" aria-label="Get Help Navigation">
                        <h3 className="font-bold text-xl mb-4">In this section</h3>
                        <ul className="space-y-2">
                            <li><Link href="/child-clinic" className="hover:text-primary">Child Clinic</Link></li>
                            <li><Link href="/hiv-services" className="hover:text-primary">HIV Community Services</Link></li>
                            <li><Link href="/teen-club" className="text-primary font-bold">Teen Club</Link></li>
                            <li><Link href="/pmtct" className="hover:text-primary">PMTCT & HIV+ Women</Link></li>
                        </ul>
                    </aside>

                    <section className="main-content col-span-1 md:col-span-3">
                        <h2 className="text-3xl font-bold mb-4">Join the TCI Teen Club!</h2>
                        <p className="mb-4 text-gray-700">The Thembi Community Initiative Teen Club is a safe and supportive space for teenagers in our community to connect with peers, develop valuable life skills, and access resources that help them thrive. We offer a variety of activities and programs designed to empower teens and help them reach their full potential.</p>

                        <h3 className="text-2xl font-semibold mb-3">What We Offer</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                            <li><strong>Workshops:</strong> Attend workshops on topics like leadership, communication, financial literacy, and healthy relationships.</li>
                            <li><strong>Mentorship:</strong> Get paired with a positive adult role model who can provide guidance and support.</li>
                            <li><strong>Social Events:</strong> Participate in fun social events, including movie nights, game nights, and community outings.</li>
                            <li><strong>Community Service Projects:</strong> Give back to the community through meaningful volunteer opportunities.</li>
                            <li><strong>Educational Support:</strong> Access tutoring, study groups, and resources to help you succeed in school.</li>
                            <li><strong>Guest Speakers:</strong> Hear from inspiring guest speakers who share their experiences and offer valuable advice.</li>
                        </ul>

                        <div className="info-card-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="info-card border p-4 rounded-lg bg-white shadow-sm">
                                <img
                                    src="/assets/images/teen-club-activities.jpg"
                                    alt="Teen Club Activities"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg text-primary">Fun Activities</h3>
                                <p className="text-gray-600">We have a wide variety of activities to suit every interest!</p>
                            </div>
                            <div className="info-card border p-4 rounded-lg bg-white shadow-sm">
                                <img
                                    src="/assets/images/teen-club-support.jpg"
                                    alt="Teen Club Support"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg text-primary">Peer Support</h3>
                                <p className="text-gray-600">Connect with friends who understand what you're going through.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">Who Can Join?</h3>
                        <p className="mb-4 text-gray-700">The TCI Teen Club is open to all teenagers aged 13-19 who live in the Thembi community. We welcome teens from all backgrounds and experiences.</p>

                        <h3 className="text-2xl font-semibold mb-3">How to Join</h3>
                        <p className="mb-4 text-gray-700">Joining the Teen Club is easy! Simply fill out our online registration form or visit the TCI office to register in person. There is a small annual membership fee to help cover the cost of activities and resources. Scholarships are available for those who need financial assistance. Contact us for more information.</p>
                        <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded link-button mb-6 font-bold hover:bg-primary/90 transition">Register Online Now</Link>

                        <h3 className="text-2xl font-semibold mb-3">Contact Us</h3>
                        <p className="mb-4 text-gray-700">Have questions? Contact our Teen Club Coordinator at [Phone Number] or [Email Address].</p>
                        <p className="text-gray-700">Learn more about our <Link href="/child-clinic" className="text-primary hover:underline font-semibold">Child Clinic services</Link> or our <Link href="/hiv-services" className="text-primary hover:underline font-semibold">HIV Community Services</Link>.</p>
                    </section>
                </div>
            </main>
        </Base>
    );
};

export default JoinTeenClub;

