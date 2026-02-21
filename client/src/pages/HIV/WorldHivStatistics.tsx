import React from 'react';
import Base from '../../components/layout/Base';
import HivSidebar from '../../components/layout/HivSidebar';
import { Link } from 'wouter';

const WorldHivStatistics: React.FC = () => {
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
                        <div className="relative h-64 rounded-xl overflow-hidden bg-primary flex items-center px-8">
                            <div className="relative z-10 max-w-2xl">
                                <h1 className="text-4xl font-bold text-primary-foreground mb-4">World HIV Statistics</h1>
                                <p className="text-primary-foreground/90 text-lg">Key data on the global HIV epidemic as of 2022.</p>
                            </div>
                        </div>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold">Global Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Approximately 39 million people worldwide are living with HIV. In 2022, 86% knew their status, while 5.5 million did not. Since the pandemic’s start, 85.6 million have acquired HIV, and 40.4 million have died of AIDS-related illnesses.
                            </p>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold border-b pb-2">Key Global Statistics (2022)</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold mb-1">New Infections:</h3>
                                    <p className="text-sm text-muted-foreground">1.3 million new HIV infections, a 59% decrease from 1995.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">AIDS-Related Deaths:</h3>
                                    <p className="text-sm text-muted-foreground">630,000 deaths, with 260,000 in eastern and southern Africa.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Access to Treatment:</h3>
                                    <p className="text-sm text-muted-foreground">29.8 million on ART; 86% know status, 89% access ART, 93% suppressed.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold mb-1">Access to PrEP:</h3>
                                    <p className="text-sm text-muted-foreground">2.5 million people in 86 countries used oral PrEP.</p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold border-b pb-2">HIV Among Key Populations</h2>
                            <div className="bg-muted p-6 rounded-lg">
                                <ul className="space-y-2">
                                    <li className="flex justify-between border-b pb-1"><span>MSM</span> <span className="font-bold">11x higher prevalence</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>People who inject drugs</span> <span className="font-bold">7x higher prevalence</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>Sex workers</span> <span className="font-bold">4x higher prevalence</span></li>
                                    <li className="flex justify-between border-b pb-1"><span>Transgender people</span> <span className="font-bold">14x higher prevalence</span></li>
                                </ul>
                                <p className="mt-4 text-sm text-muted-foreground">
                                    <strong>Adolescent Girls:</strong> 4,000 new infections weekly (3,100 in sub-Saharan Africa).
                                </p>
                            </div>
                        </section>

                        <section className="space-y-6 text-center">
                            <h2 className="text-2xl font-bold border-b pb-2">Learn More</h2>
                            <p className="text-lg">Explore more statistics and resources to understand the global HIV epidemic.</p>
                            <Link href="/about-hiv" className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium">Resources</Link>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default WorldHivStatistics;

