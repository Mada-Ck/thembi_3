import React from 'react';
import Base from '../../components/layout/Base';
import HivSidebar from '../../components/layout/HivSidebar';
import { Link } from 'wouter';

const BasicFactsAboutHiv: React.FC = () => {
    return (
        <Base>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <HivSidebar />
                    </aside>

                    {/* Content */}
                    <div className="flex-1 space-y-12">
                        {/* Hero Section */}
                        <div className="relative h-64 rounded-xl overflow-hidden bg-primary flex items-center px-8">
                            <div className="relative z-10 max-w-2xl">
                                <h1 className="text-4xl font-bold text-primary-foreground mb-4">Basic Facts About HIV/AIDS</h1>
                                <p className="text-primary-foreground/90 text-lg">Understanding the essentials of HIV and AIDS globally and locally.</p>
                            </div>
                        </div>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold">Understanding HIV/AIDS</h2>
                            <p className="text-muted-foreground text-lg">Since the beginning of the pandemic, millions have been affected by HIV/AIDS. This section provides key facts to help you understand HIV/AIDS, its transmission, and prevention.</p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold border-b pb-2">What is HIV/AIDS?</h2>
                            <div className="grid gap-6">
                                <div>
                                    <h3 className="text-xl font-bold mb-1">HIV:</h3>
                                    <p className="text-muted-foreground">Human Immunodeficiency Virus weakens the immune system by attacking white blood cells. <Link href="/about-hiv" className="text-primary hover:underline ml-1">Learn More →</Link></p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-1">AIDS:</h3>
                                    <p className="text-muted-foreground">Acquired Immunodeficiency Syndrome is the advanced stage of HIV, leading to severe immune system damage and opportunistic infections.</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold border-b pb-2">Key Questions</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">How do I know if I’m infected?</h4>
                                    <p className="text-sm">Testing is the only way to confirm HIV status, as early symptoms may be mild or absent.</p>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Can I tell if someone has HIV/AIDS?</h4>
                                    <p className="text-sm">No, HIV/AIDS cannot be diagnosed by appearance alone.</p>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">How quickly does HIV progress to AIDS?</h4>
                                    <p className="text-sm">Progression varies, but antiretroviral therapy (ART) can delay AIDS significantly.</p>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">How many people are affected?</h4>
                                    <p className="text-sm">Globally, over 39 million live with HIV, with significant impact in Malawi. <Link href="/malawi-statistics" className="text-primary hover:underline">See Malawi Stats</Link></p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold border-b pb-2">Transmission of HIV</h2>
                            <p>HIV is transmitted through:</p>
                            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                <li>Unprotected sexual intercourse with an infected person.</li>
                                <li>Sharing needles or injection equipment.</li>
                                <li>Mother-to-child transmission during pregnancy, childbirth, or breastfeeding.</li>
                                <li>Blood transfusions with infected blood (rare in screened systems).</li>
                            </ul>
                            <p className="bg-blue-50 p-4 border border-blue-100 rounded-lg text-sm text-blue-800">
                                HIV is <strong>not</strong> spread through casual contact, air, water, or insects.
                            </p>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold border-b pb-2">HIV Testing and Prevention</h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="w-full md:w-1/2 aspect-video bg-muted rounded-lg flex items-center justify-center">
                                    <span className="text-muted-foreground italic">Testing Image</span>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <div>
                                        <h3 className="text-xl font-bold">Testing</h3>
                                        <p className="text-muted-foreground">Rapid tests and home kits are available. Early detection is key. <Link href="/hiv-services" className="text-primary hover:underline">Find Services</Link></p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Prevention</h3>
                                        <p className="text-muted-foreground">Use condoms, limit partners, avoid sharing needles, and consider PrEP or PEP.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-primary/5 p-8 rounded-xl border border-primary/20 text-center">
                            <h2 className="text-2xl font-bold mb-4">Resources and Support</h2>
                            <p className="text-lg mb-6">Support our HIV/AIDS programs through donations or volunteering.</p>
                            <div className="flex justify-center gap-4">
                                <Link href="/donate" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium">Donate Now</Link>
                                <Link href="/volunteer" className="px-8 py-3 bg-outline border border-primary text-primary rounded-lg font-medium">Volunteer</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default BasicFactsAboutHiv;

