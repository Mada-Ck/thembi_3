import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';

const HivServices: React.FC = () => {
    return (
        <Base>
            <main className="container mx-auto px-4 py-8">
                <section className="about-hero">
                    <img
                        src="/assets/images/hiv-services-hero.jpg"
                        alt="HIV Services Hero Image"
                        className="about-hero-image"
                        loading="lazy"
                    />
                    <div className="about-hero-text animate-hero">
                        <h1>HIV Community Services</h1>
                        <p>Support for Individuals and Communities Affected by HIV.</p>
                    </div>
                </section>

                <div className="get-help-content grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
                    <aside className="about-sidebar col-span-1" role="navigation" aria-label="Get Help Navigation">
                        <h3 className="font-bold text-xl mb-4">In this section</h3>
                        <ul className="space-y-2">
                            <li><Link href="/child-clinic" className="hover:text-primary">Child Clinic</Link></li>
                            <li><Link href="/hiv-services" className="text-primary font-bold">HIV Community Services</Link></li>
                            <li><Link href="/teen-club" className="hover:text-primary">Teen Club</Link></li>
                            <li><Link href="/pmtct" className="hover:text-primary">PMTCT & HIV+ Women</Link></li>
                        </ul>
                    </aside>

                    <section className="main-content col-span-1 md:col-span-3">
                        <h2 className="text-3xl font-bold mb-4">HIV Community Services</h2>
                        <p className="mb-4 text-gray-700">The Thembi Community Initiative provides a range of services to support individuals and communities affected by HIV. We are committed to reducing stigma, promoting prevention, and ensuring access to care and treatment for all.</p>

                        <h3 className="text-2xl font-semibold mb-3">Our Services Include:</h3>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
                            <li><strong>HIV Testing and Counseling:</strong> Confidential and free HIV testing services with pre- and post-test counseling.</li>
                            <li><strong>Prevention Education:</strong> Workshops and outreach programs to promote safe sex practices and prevent the spread of HIV.</li>
                            <li><strong>ART Adherence Support:</strong> Counseling and support groups to help individuals adhere to their antiretroviral therapy (ART) regimens.</li>
                            <li><strong>Support Groups:</strong> Peer support groups for people living with HIV to share experiences and build community.</li>
                            <li><strong>Nutritional Support:</strong> Food packages and nutritional counseling to help individuals maintain a healthy diet.</li>
                            <li><strong>Linkage to Care:</strong> Assistance with connecting to medical care and social services.</li>
                            <li><strong>Stigma Reduction Programs:</strong> Initiatives to combat stigma and discrimination against people living with HIV.</li>
                        </ul>

                        <div className="info-card-row grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="info-card border p-4 rounded-lg bg-white shadow-sm">
                                <img
                                    src="/assets/images/hiv-testing.jpg"
                                    alt="HIV Testing"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg text-primary">Confidential HIV Testing</h3>
                                <p className="text-gray-600">Know your status. Get tested in a safe and confidential environment.</p>
                            </div>
                            <div className="info-card border p-4 rounded-lg bg-white shadow-sm">
                                <img
                                    src="/assets/images/hiv-support-group.jpg"
                                    alt="HIV Support Group"
                                    loading="lazy"
                                    className="w-full h-48 object-cover rounded-md mb-4"
                                />
                                <h3 className="font-bold text-lg text-primary">Support and Community</h3>
                                <p className="text-gray-600">Connect with others and find strength in shared experiences.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-3">Who Can Access Our Services?</h3>
                        <p className="mb-4 text-gray-700">Our HIV community services are available to all members of the Thembi community, regardless of their HIV status. We prioritize serving vulnerable populations, including:</p>
                        <ul className="list-disc pl-10 space-y-1 mb-6 text-gray-700">
                            <li>People living with HIV</li>
                            <li>Youth</li>
                            <li>Women</li>
                            <li>Marginalized communities</li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-3">How to Access Services</h3>
                        <p className="mb-4 text-gray-700">To access our HIV community services, please visit our office at [Address] or call us at [Phone Number]. You can also send us an email at [Email Address]. All services are confidential and provided free of charge.</p>
                        <Link href="/contact" className="inline-block bg-primary text-white px-6 py-2 rounded link-button mb-6 font-bold hover:bg-primary/90 transition">Contact Us for More Information</Link>
                        <p className="text-gray-700">Learn more about our <Link href="/pmtct" className="text-primary hover:underline font-semibold">PMTCT & HIV Women programs</Link>.</p>
                    </section>
                </div>
            </main>
        </Base>
    );
};

export default HivServices;

