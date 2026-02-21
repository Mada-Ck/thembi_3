import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { Baby, Stethoscope, Utensils, Activity, ShieldPlus, HeartPulse, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ChildClinic: React.FC = () => {
    const services = [
        {
            icon: Baby,
            title: "M'mera mpoyamba",
            description: "Targeted support for our youngest members (0-9 years) focusing on early foundation.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: HeartPulse,
            title: "Guardian-Led Care",
            description: "Instructions and health education passed directly to guardians for home care.",
            color: "bg-pink-500/10 text-pink-600"
        },
        {
            icon: ShieldPlus,
            title: "Partial Status Disclosure",
            description: "Guided support for guardians in the gradual process of status disclosure.",
            color: "bg-orange-500/10 text-orange-600"
        },
        {
            icon: Activity,
            title: "Growth Monitoring",
            description: "Regular check-ups to ensure healthy developmental milestones are met.",
            color: "bg-purple-500/10 text-purple-600"
        }
    ];

    return (
        <Base>
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <ServicesSidebar />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 space-y-16">
                        {/* Hero Section */}
                        <section className="relative rounded-[2.5rem] overflow-hidden bg-[#0F172A] text-white p-8 md:p-16 shadow-2xl">
                            <div className="relative z-10 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold mb-6 border border-white/20 uppercase tracking-[0.2em]">
                                    <Baby className="w-3 h-3" />
                                    Ages 0 - 9
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">M'mera <br /><span className="text-secondary">mpoyamba</span></h1>
                                <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Nurturing the health and wellbeing of children under 9 years through integrated caregiver support.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" className="font-bold px-8 rounded-full shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90 text-white border-none">Guardian Support</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* Abstract background elements */}
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                        </section>

                        {/* Focus Section */}
                        <section className="max-w-4xl space-y-6">
                            <h2 className="text-3xl font-bold">Guardian-Centered Care</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed text-secondary-foreground">
                                At this stage, children usually visit with their guardians. We focus on passing clear, actionable instructions to caregivers to ensure adherence and health at home. This is also where the critical process of <strong>partial status disclosure</strong> begins.
                            </p>
                        </section>

                        {/* Services Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Our Approach</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Working with Caregivers</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {services.map((service, index) => (
                                    <Card key={index} className="border-none bg-muted/30 hover:bg-muted/50 transition-colors group cursor-default">
                                        <CardContent className="p-8 flex gap-6">
                                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", service.color)}>
                                                <service.icon className="w-7 h-7" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-bold">{service.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed text-sm">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Process Section */}
                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Status Disclosure</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    We provide a safe environment for guardians to learn how to communicate health status to their children effectively and appropriately for their age.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Guardian-led adherence support",
                                        "Structured partial disclosure counseling",
                                        "Regular pediatric check-ups (0-9 years)",
                                        "Caregiver education and empowerment"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-medium">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-muted">
                                <img
                                    src="/assets/images/well-child-checkup.jpg"
                                    alt="Caregiver Support"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1584362946045-121f8a9925e0?auto=format&fit=crop&q=80&w=800';
                                    }}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default ChildClinic;
