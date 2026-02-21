import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { HeartPulse, Search, ShieldCheck, Microscope, Utensils, Users, Info, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HivServices: React.FC = () => {
    const services = [
        {
            icon: Microscope,
            title: "Testing & Counseling",
            description: "Confidential, free HIV testing with professional pre and post-test support.",
            color: "bg-red-500/10 text-red-600"
        },
        {
            icon: ShieldCheck,
            title: "Prevention Education",
            description: "Workshops and outreach to promote safe practices and reduce transmission.",
            color: "bg-green-500/10 text-green-600"
        },
        {
            icon: Users,
            title: "Adherence Support",
            description: "Peer-led support groups to help individuals maintain their ART regimens.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: Utensils,
            title: "Nutritional Support",
            description: "Food packages and counseling to maintain health and strengthen the immune system.",
            color: "bg-orange-500/10 text-orange-600"
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
                        <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white p-8 md:p-16 shadow-2xl">
                            <div className="relative z-10 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold mb-6 border border-white/20 uppercase tracking-[0.2em]">
                                    <HeartPulse className="w-3 h-3" />
                                    Community Care
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">HIV Community <br /><span className="text-white/80">Services</span></h1>
                                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Comprehensive support focused on reducing stigma, promoting prevention, and ensuring dignified care for everyone.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" variant="secondary" className="font-bold px-8 rounded-full shadow-lg shadow-black/10">Get Support</Button>
                                    </Link>
                                    <Link href="/hiv-toolkit">
                                        <Button size="lg" variant="outline" className="font-bold px-8 rounded-full border-white/30 text-white hover:bg-white/10">Access Toolkit</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* Decorative background shapes */}
                            <div className="absolute -top-12 -right-12 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-1/4"></div>
                        </section>

                        {/* Intro Section */}
                        <section className="max-w-4xl space-y-6">
                            <h2 className="text-3xl font-bold">A Foundation of Dignity</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Our HIV programs go beyond medicine. We build communities of support, combat discrimination, and provide the essential nutritional and social resources needed for a healthy, fulfilling life.
                            </p>
                        </section>

                        {/* Services Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Our Impact</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Confidential & Compassionate</p>
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

                        {/* Linkage Section */}
                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
                                <img
                                    src="/assets/images/hiv-testing.jpg"
                                    alt="Testing Services"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent"></div>
                            </div>
                            <div className="order-1 md:order-2 space-y-6">
                                <h2 className="text-3xl font-bold">Who We Serve</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    All community members are welcome. We prioritize those most in need of specialized care and advocacy.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Individuals living with HIV/AIDS",
                                        "At-risk youth and vulnerable women",
                                        "Marginalized community groups",
                                        "Families affected by illness"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                                            <span className="text-sm font-medium">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-muted rounded-[3rem] p-8 md:p-12 border border-border flex flex-col md:flex-row items-center gap-12 overflow-hidden relative">
                            <div className="flex-1 space-y-4 text-center md:text-left relative z-10">
                                <h2 className="text-3xl font-bold">Break the Silence, End the Stigma.</h2>
                                <p className="text-muted-foreground">
                                    Our doors are open for everyone. Services are 100% confidential and provided free of charge to those in need.
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col gap-4 w-full md:w-auto relative z-10">
                                <Link href="/contact">
                                    <Button size="lg" className="w-full md:w-auto font-bold px-12 rounded-full py-6 bg-red-600 hover:bg-red-700">Find Help Now</Button>
                                </Link>
                                <div className="text-center text-xs font-bold text-red-600 flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-4 h-4" /> Secure & Anonymous
                                </div>
                            </div>
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-red-600/5 rounded-full blur-3xl"></div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default HivServices;
