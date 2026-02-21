import React from 'react';
import Base from '../../components/layout/Base';
import HivSidebar from '../../components/layout/HivSidebar';
import { Link } from 'wouter';
import { Target, ExternalLink } from "lucide-react";

const MalawiHivStatistics: React.FC = () => {
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
                                <h1 className="text-4xl font-bold text-primary-foreground mb-4">HIV/AIDS Statistics in Malawi</h1>
                                <p className="text-primary-foreground/90 text-lg">Key data from the National AIDS Commission (2023)</p>
                            </div>
                        </div>

                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold">Malawi’s Progress</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Malawi is recognized as a global leader in the HIV response. By 2024, the country has officially achieved the <span className="text-foreground font-bold">UNAIDS 95-95-95 targets</span>. This means 95% of people living with HIV know their status, 95% of those diagnosed are on treatment, and 95% of those on treatment are virally suppressed.
                            </p>
                            <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary mb-1">Target Achieved: 95-95-95</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Since 2010, Malawi has seen a <strong>79% decline</strong> in new HIV infections and a dramatic reduction in AIDS-related deaths.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold border-b pb-2">National Statistics (2023-2024)</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { label: "PLHIV", value: "~1.1 Million", note: "Total people living with HIV across all ages (2023)." },
                                    { label: "New Infections", value: "11,757", note: "Total annual new infections in 2024 (79% decline since 2010)." },
                                    { label: "AIDS-Related Deaths", value: "14,000", note: "Down from a peak of 80,000 in 2003." },
                                    { label: "Viral Suppression", value: "95%", note: "Percentage of those on ART achieving suppressed viral load." },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-card border border-border p-6 rounded-xl shadow-soft hover:shadow-md transition-shadow">
                                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                        <div className="font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                                        <div className="text-sm text-muted-foreground">{stat.note}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold border-b pb-2">Ongoing Challenges & Vulnerabilities</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500" />
                                        AGYW Vulnerability
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Adolescent girls and young women (15-24) represent <strong>26% of all new infections</strong>. Approximately 59 young women in this age group acquire HIV weekly in Malawi.
                                    </p>
                                </div>
                                <div className="bg-muted/30 p-6 rounded-2xl border border-border">
                                    <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                                        Pediatric Treatment Gap
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        While adult coverage is high, the ART coverage for children (0-14) remains at approximately <strong>58%</strong>, indicating a critical gap in pediatric services.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-muted/50 p-8 rounded-2xl border border-border relative overflow-hidden">
                            <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4">
                                <h2 className="text-2xl font-bold">Data Source: UNAIDS</h2>
                                <p className="text-muted-foreground">
                                    These statistics are based on the latest Malawi situation analysis provided by UNAIDS and the National AIDS Commission.
                                </p>
                                <a
                                    href="https://www.unaids.org/en/regionscountries/countries/malawi"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                                >
                                    Browse Full UNAIDS Data <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default MalawiHivStatistics;

