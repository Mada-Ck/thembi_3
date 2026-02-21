import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { Users, Star, Gift, BookOpen, Heart, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const JoinTeenClub: React.FC = () => {
    const benefits = [
        {
            icon: BookOpen,
            title: "Workshops",
            description: "Leadership, communication, and life skills to build a bright future.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: Heart,
            title: "Peer Support",
            description: "A safe space to connect with friends who truly understand you.",
            color: "bg-pink-500/10 text-pink-600"
        },
        {
            icon: Star,
            title: "Mentorship",
            description: "Guidance from positive adult role models to help you navigate life.",
            color: "bg-yellow-500/10 text-yellow-600"
        },
        {
            icon: Gift,
            title: "Social Events",
            description: "Movie nights, games, and community outings full of joy and laughter.",
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
                                    TCI Youth Community
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">Join the <span className="text-secondary">Teen Club!</span></h1>
                                <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    A vibrant, supportive space for teenagers to connect, learn, and grow together in rural Chitipa.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/teen-club-junior">
                                        <Button size="lg" variant="secondary" className="font-bold px-8 rounded-full shadow-lg shadow-black/10">Junior (9-14)</Button>
                                    </Link>
                                    <Link href="/teen-club-senior">
                                        <Button size="lg" variant="outline" className="font-bold px-8 rounded-full border-white/30 text-white hover:bg-white/10">Senior (14-19)</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* Abstract background shapes */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-1/3"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
                        </section>

                        {/* Intro Section */}
                        <section className="max-w-4xl">
                            <h2 className="text-3xl font-bold mb-6">Safe, Support, and Fun</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                The Thembi Community Initiative Teen Club is more than just a club—it's a <strong>movement of empowered youth</strong>. We provide a sanctuary where you can truly be yourself, share your experiences, and build the future you deserve.
                            </p>
                        </section>

                        {/* What We Offer Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Why Join Us?</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Empowering youth since 2011</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {benefits.map((benefit, index) => (
                                    <Card key={index} className="border-none bg-muted/30 hover:bg-muted/50 transition-colors group cursor-default">
                                        <CardContent className="p-8 flex gap-6">
                                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", benefit.color)}>
                                                <benefit.icon className="w-7 h-7" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-bold">{benefit.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed text-sm">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default JoinTeenClub;
