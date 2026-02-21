import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { Users, BookOpen, Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const TeenClubJunior: React.FC = () => {
    const services = [
        {
            icon: Users,
            title: "Developmental Support",
            description: "Activities focused on the unique behavioral and physical changes during early adolescence.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: ShieldCheck,
            title: "Full Status Disclosure",
            description: "A sensitive and structured process where teens become fully aware of their health status.",
            color: "bg-pink-500/10 text-pink-600"
        },
        {
            icon: BookOpen,
            title: "Peer Learning",
            description: "Group education focusing on health, education, and social interactions without SRH content.",
            color: "bg-orange-500/10 text-orange-600"
        },
        {
            icon: Star,
            title: "Skill Building",
            description: "Introductory workshops to build confidence and communication skills in a safe space.",
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
                                    Ages 9 - 14
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">Junior <br /><span className="text-secondary">Teen Club</span></h1>
                                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Empowering early adolescents through full disclosure and peer support during critical developmental stages.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" variant="secondary" className="font-bold px-8 rounded-full shadow-lg shadow-black/10">Register Interest</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* Abstract background shapes */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/3"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
                        </section>

                        {/* Developmental Section */}
                        <section className="max-w-4xl space-y-6">
                            <h2 className="text-3xl font-bold">The Bridge to Independence</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                The 9-14 age group is a vital developmental period. Here, our focus shift towards the teen themselves. In this club, <strong>teens become fully disclosed</strong> regarding their health status in a supportive environment. We prioritize education and peer interaction while intentionally excluding sexual reproductive health messages until they reach the senior group.
                            </p>
                        </section>

                        {/* Services Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Club Activities</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Safe & Supportive Environment</p>
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
                                <h2 className="text-3xl font-bold">Eligibility & Focus</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    The Junior Teen Club is designed for children entering their teenage years who need a space that respects their stage of growth.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Ages 9 to 14 years old",
                                        "Focus on complete health status awareness",
                                        "Peer-to-peer social development",
                                        "Age-appropriate educational themes"
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
                                    src="https://images.unsplash.com/photo-1523240715630-991f2e81230c?auto=format&fit=crop&q=80&w=800"
                                    alt="Junior Teen Club"
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

export default TeenClubJunior;
