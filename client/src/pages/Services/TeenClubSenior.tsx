import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { Users, Heart, Star, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TeenClubSenior: React.FC = () => {
    const services = [
        {
            icon: Heart,
            title: "Intensive SRH Sessions",
            description: "Deep-dive workshops on Sexual Reproductive Health tailored for late adolescence.",
            color: "bg-red-500/10 text-red-600"
        },
        {
            icon: Users,
            title: "Peer Counseling",
            description: "Vibrant support groups led by trained peers to navigate social and health challenges.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: Sparkles,
            title: "Youth Leadership",
            description: "Opportunities to lead club activities and mentor junior members.",
            color: "bg-orange-500/10 text-orange-600"
        },
        {
            icon: Star,
            title: "Adult Transition",
            description: "Preparation for movement to adult clinics and young adult environments.",
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
                        <section className="relative rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground p-8 md:p-16 shadow-2xl">
                            <div className="relative z-10 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold mb-6 border border-white/20 uppercase tracking-[0.2em]">
                                    <Users className="w-3 h-3" />
                                    Ages 14 - 19
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">Senior <br /><span className="text-secondary">Teen Club</span></h1>
                                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Empowering late adolescents with the knowledge and confidence to transition into healthy young adulthood.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" variant="secondary" className="font-bold px-8 rounded-full shadow-lg shadow-black/10">Join the Movement</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* Abstract background shapes */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/3"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
                        </section>

                        {/* Transition Section */}
                        <section className="max-w-4xl space-y-6">
                            <h2 className="text-3xl font-bold">Preparing for the Future</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                The Senior Teen Club is for those nearing adulthood. These teens cannot be mixed with children as their needs are fundamentally different. We deliver <strong>aggressive Sexual Reproductive Health (SRH) messages</strong> alongside peer leadership training, ensuring they have the tools to make informed decisions about their lives.
                            </p>
                        </section>

                        {/* Services Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Programs & Focus</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Leadership & Health</p>
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

                        {/* Who Can Join Section */}
                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Youth Empowerment</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The Senior Club is a high-energy environment for older teens who are ready to take charge of their health and community impact.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Ages 14 to 19 years old",
                                        "Full integration of SRH education",
                                        "Transition planning for young adult life",
                                        "Independent health management skills"
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
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=800"
                                    alt="Senior Teen Club"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default TeenClubSenior;
