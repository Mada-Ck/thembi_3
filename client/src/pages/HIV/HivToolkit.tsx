import React from 'react';
import Base from '../../components/layout/Base';
import HivSidebar from '../../components/layout/HivSidebar';
import { BookOpen, Lightbulb, PenTool, Layout, ArrowRight, ShieldCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'wouter';

const HivToolkit: React.FC = () => {
    return (
        <Base>
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <HivSidebar />
                    </aside>

                    {/* Content */}
                    <div className="flex-1 space-y-12">
                        {/* Hero Section */}
                        <div className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 md:p-12 shadow-2xl">
                            <div className="relative z-10 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold mb-6 border border-white/20 uppercase tracking-widest">
                                    <Target className="w-3 h-3" />
                                    Advancing 95-95-95 Goals
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">HIV Service Delivery Toolkit</h1>
                                <p className="text-primary-foreground/90 text-lg leading-relaxed mb-8">
                                    Evidence-based approaches for high-impact HIV service delivery, aligned with UNAIDS and World Health Organization (WHO) standards for ministries of health and implementing partners.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="secondary" className="font-bold">Download Full Toolkit</Button>
                                    <Button variant="outline" className="bg-transparent border-white hover:bg-white hover:text-primary">Learn About Our Impact</Button>
                                </div>
                            </div>
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                        </div>

                        {/* UNAIDS Callout */}
                        <section className="bg-muted/50 rounded-2xl p-8 border border-border relative overflow-hidden group">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                    Evidence-Based Excellence
                                </h2>
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    As countries work to fulfill the UNAIDS’ ambitious <span className="text-foreground font-bold italic">95-95-95 goals*</span>, there has been a call to share evidence-based approaches to reaching these goals. In response, we have combined our knowledge and experience from over ten years of implementation of HIV-related activities and programs into a comprehensive Toolkit composed of three key sections: Training and Education, Practical Strategies and Other Tools and Resources.
                                </p>
                                <div className="text-sm font-medium text-muted-foreground border-t pt-4 border-border/50">
                                    <p className="italic">*UNAIDS. Fast-Track - Ending the AIDS epidemic by 2030</p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-16 -translate-y-16 transition-transform group-hover:scale-110"></div>
                        </section>

                        {/* Toolkit Sections */}
                        <section className="space-y-8">
                            <div className="text-center md:text-left">
                                <h2 className="text-3xl font-bold mb-4">Core Toolkit Components</h2>
                                <p className="text-muted-foreground max-w-2xl">
                                    This toolkit is designed as a foundation for implementing HIV services that are relevant and effective across a variety of clinical and community settings, focusing on the UNAIDS Fast-Track approach.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Card className="border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl group">
                                    <CardContent className="p-8">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <BookOpen className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">Training & Education</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                            Curriculums and materials for building the capacity of health workers and community volunteers, aligned with international standards.
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Slide Decks</li>
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Trainer Guides</li>
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Case Studies</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl group">
                                    <CardContent className="p-8">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <Lightbulb className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">Practical Strategies</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                            Standardized protocols and methodologies for optimizing patient flow and treatment adherence based on evidence-based results.
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Clinical SOPs</li>
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Flow Mapping</li>
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> QA Checklists</li>
                                        </ul>
                                    </CardContent>
                                </Card>

                                <Card className="border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl group">
                                    <CardContent className="p-8">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                            <PenTool className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">Other Tools & Resources</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                            A collection of supportive tools, job aids, and monitoring frameworks to facilitate program implementation.
                                        </p>
                                        <ul className="space-y-2 mb-6">
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Job Aids</li>
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> M&E Tools</li>
                                            <li className="flex items-center gap-2 text-xs font-medium"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Templates</li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </section>

                        {/* Adaptation Section */}
                        <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 space-y-4">
                                <h2 className="text-2xl font-bold">Foundation for Implementation</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The HIV Service Delivery Toolkit is designed to be adapted and used by ministries of health, health care workers, and implementing partners who support HIV services. Each section provide procedures, tools and case studies to be used as a foundation and reference for the development and implementation of HIV programs.
                                </p>
                                <Button className="gap-2">
                                    Download Adaptation Guide <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                            <div className="w-full md:w-1/3 bg-background rounded-2xl shadow-inner p-6 border border-border">
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-primary" />
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full w-1/2 bg-primary" />
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full w-5/6 bg-primary" />
                                    </div>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    <Layout className="w-8 h-8 text-primary shadow-sm" />
                                    <span className="text-xs font-bold text-muted-foreground uppercase py-2">UNAIDS Goal Oriented</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default HivToolkit;
