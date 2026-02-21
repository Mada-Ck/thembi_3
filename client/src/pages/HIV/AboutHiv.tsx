import React from 'react';
import Base from '../../components/layout/Base';
import HivSidebar from '../../components/layout/HivSidebar';
import { Link } from 'wouter';

const AboutHiv: React.FC = () => {
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
                                <h1 className="text-4xl font-bold text-primary-foreground mb-4">About HIV/AIDS</h1>
                                <p className="text-primary-foreground/90 text-lg">Exploring the basics and impact of HIV/AIDS globally.</p>
                            </div>
                        </div>

                        {/* Basic Facts Section */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold">Understanding HIV/AIDS</h2>
                            <p className="text-muted-foreground text-lg">Since the pandemic began, 85.6 million people have acquired HIV, and over 40 million have died of AIDS-related illnesses. Here’s an overview of what HIV and AIDS are.</p>
                            <div className="grid gap-6">
                                <div className="bg-muted p-6 rounded-lg">
                                    <h3 className="font-bold text-xl mb-2">What is HIV?</h3>
                                    <p>Human Immunodeficiency Virus is a retrovirus that infects human cells, using their energy to grow and reproduce, ultimately causing AIDS. <Link href="/basic-facts" className="text-primary hover:underline ml-2">Learn More →</Link></p>
                                </div>
                                <div className="bg-muted p-6 rounded-lg">
                                    <h3 className="font-bold text-xl mb-2">What is AIDS?</h3>
                                    <p>Acquired Immunodeficiency Syndrome is the stage where the immune system fails, leaving the body vulnerable to opportunistic infections and diseases.</p>
                                </div>
                            </div>
                        </section>

                        {/* Statistics Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">HIV/AIDS Statistics</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="border border-border p-6 rounded-lg">
                                    <h3 className="font-bold mb-2">HIV/AIDS in Malawi</h3>
                                    <p className="text-muted-foreground mb-4">Malawi faces significant challenges with HIV prevalence.</p>
                                    <Link href="/malawi-statistics" className="text-primary font-medium hover:underline">Read More</Link>
                                </div>
                                <div className="border border-border p-6 rounded-lg">
                                    <h3 className="font-bold mb-2">HIV/AIDS in the World</h3>
                                    <p className="text-muted-foreground mb-4">Approximately 39 million people live with HIV globally.</p>
                                    <Link href="/world-statistics" className="text-primary font-medium hover:underline">Read More</Link>
                                </div>
                            </div>
                        </section>

                        {/* Timeline Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold">HIV/AIDS Timeline</h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center bg-card border border-border rounded-xl p-6">
                                <div className="w-full md:w-1/3 aspect-video bg-muted rounded-lg flex items-center justify-center">
                                    <span className="text-muted-foreground italic">Timeline Image</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-lg text-muted-foreground">Our chronicle of the HIV/AIDS pandemic begins in 1981, when the first cases of a mysterious and deadly new pathogen emerged.</p>
                                </div>
                            </div>
                        </section>

                        {/* Resources Section */}
                        <section className="bg-primary/5 p-8 rounded-xl border border-primary/20">
                            <h2 className="text-2xl font-bold mb-4">HIV Resources</h2>
                            <p className="text-lg mb-6">A wide range of local, national, and international organizations conduct research and provide services, information, and advocacy for those affected by HIV.</p>
                            <div className="flex gap-4">
                                <Link href="/hiv-services" className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium">Explore Services</Link>
                                <Link href="/donate" className="px-6 py-2 bg-outline border border-primary text-primary rounded-lg font-medium">Support Our Work</Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default AboutHiv;

