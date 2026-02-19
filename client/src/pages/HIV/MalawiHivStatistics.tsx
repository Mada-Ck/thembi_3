import React from 'react';
import Base from '../../components/layout/Base';
import { Link } from 'wouter';

const MalawiHivStatistics: React.FC = () => {
    return (
        <Base>
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4" role="navigation" aria-label="HIV/AIDS Navigation">
                        <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                            <h3 className="font-bold mb-4">In this section</h3>
                            <ul className="space-y-2">
                                <li><Link href="/about-hiv">About HIV/AIDS</Link></li>
                                <li><Link href="/malawi-statistics" className="text-primary font-medium">Malawi Statistics</Link></li>
                                <li><Link href="/basic-facts">Basic Facts</Link></li>
                                <li><Link href="/world-statistics">World Statistics</Link></li>
                            </ul>
                        </div>
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
                                Malawi has made significant strides in combating HIV/AIDS, reducing new infections by 76% since 2010 through a coordinated national response. In 2023, the country recorded 13,875 new HIV infections across all ages, with 991,600 people living with HIV.
                            </p>
                            <div className="p-4 bg-muted rounded-lg border-l-4 border-primary">
                                Progress toward the <a href="https://www.unaids.org/en/resources/959595" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">UNAIDS 95-95-95 targets</a> shows 95% of PLHIV knowing their status.
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold border-b pb-2">Key Statistics (2023)</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {[
                                    { label: "PLHIV", value: "991,600", note: "People living with HIV across all ages." },
                                    { label: "New Infections", value: "13,875", note: "Recorded new infections in 2023." },
                                    { label: "People on ART", value: "927,310", note: " PLHIV taking ARVs by Dec 2023." },
                                    { label: "Viral Suppression", value: "852,301", note: "PLHIV on ART with suppressed load." },
                                    { label: "AIDS Deaths", value: "11,265", note: "Total AIDS deaths in 2023." },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-card border border-border p-6 rounded-xl shadow-soft">
                                        <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                        <div className="font-bold text-sm uppercase tracking-wider mb-2">{stat.label}</div>
                                        <div className="text-sm text-muted-foreground">{stat.note}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold border-b pb-2">Key Demographics (2022)</h2>
                            <div className="space-y-4">
                                <div className="grid gap-4">
                                    <div className="flex justify-between items-center p-3 border-b">
                                        <span className="font-medium">Men who have sex with men (MSM)</span>
                                        <span className="font-bold text-primary">5%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 border-b">
                                        <span className="font-medium">Transgender People</span>
                                        <span className="font-bold text-primary">~1%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 border-b">
                                        <span className="font-medium">Women</span>
                                        <span className="font-bold text-primary">60%</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 border-b">
                                        <span className="font-medium">Youth (13-24)</span>
                                        <span className="font-bold text-primary">20%</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold border-b pb-2">Challenges and Focus Areas</h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center border border-border p-6 rounded-xl">
                                <div className="w-full md:w-1/3 aspect-video bg-muted rounded-lg flex items-center justify-center">
                                    <span className="text-muted-foreground italic">Challenge Image</span>
                                </div>
                                <div className="flex-1 space-y-4">
                                    <p><strong className="text-primary">Focus on Prevention:</strong> Malawi prioritizes services for adolescent girls, young women, and workplace HIV programs to address higher risks.</p>
                                    <p><strong className="text-primary">Challenges Remain:</strong> Adolescents, girls, young women, and key populations face persistent risks, requiring ongoing efforts.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default MalawiHivStatistics;

