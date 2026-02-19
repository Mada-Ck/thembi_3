import React from 'react';
import { Gift, Megaphone, Target, Lightbulb, Download, Mail, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Fundraise: React.FC = () => {
    const waysToGetStarted = [
        {
            icon: Target,
            title: "Personal Challenges",
            description: "Run a marathon, cycle, or host a game night—turn your passion or hobbies into a fundraising mission.",
            image: "/assets/images/personal-challenge.jpg"
        },
        {
            icon: Megaphone,
            title: "Online Campaigns",
            description: "Launch a personalized fundraising page and share your connection to TCI with friends and family online.",
            image: "/assets/images/online-campaign.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden text-center md:text-left">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 italic">Fundraise for TCI</h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                            Unlock your potential to create change. Turn your energy and creativity into vital support for the most vulnerable in Chitipa, Malawi.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <Button size="lg" variant="secondary" className="px-8">Start a Campaign</Button>
                            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">Download Fundraising Kit</Button>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center text-center md:text-left">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Your Passion, Their Progress</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                <p>
                                    Every dollar you raise goes directly toward our life-changing programs in health, education, and community empowerment. Whether you're a student, a professional, or a community group, your efforts make a tangible difference.
                                </p>
                                <p>
                                    We provide you with all the resources you need to succeed—from social media templates to printable flyers and storytelling kits.
                                </p>
                            </div>
                        </div>
                        <div className="bg-muted p-8 rounded-3xl border border-border">
                            <h3 className="text-xl font-bold mb-6">Fundraising Tips</h3>
                            <ul className="space-y-4">
                                {[
                                    { icon: Target, text: "Set a clear, achievable goal." },
                                    { icon: Heart, text: "Share your personal 'why' for supporting TCI." },
                                    { icon: Globe, text: "Spread the handle on social media and WhatsApp." },
                                    { icon: Lightbulb, text: "Get creative with events—host a dinner or a tournament." }
                                ].map((tip, i) => (
                                    <li key={i} className="flex items-center gap-4">
                                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <tip.icon className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-foreground font-medium">{tip.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Ways to Get Started</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {waysToGetStarted.map((way, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth group border-primary/5">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <img
                                        src={way.image}
                                        alt={way.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${way.title.replace(" ", "+")}`;
                                        }}
                                    />
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-2">
                                        <way.icon className="w-5 h-5 text-primary" /> {way.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {way.description}
                                    </p>
                                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        Get Inspired <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Section */}
            <section className="py-20 bg-muted">
                <div className="container text-center">
                    <h2 className="text-2xl font-bold mb-6">Need Support With Your Campaign?</h2>
                    <p className="text-muted-foreground mb-10">Our community team is here to help you maximize your impact.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button variant="outline" className="flex items-center gap-2">
                            <Download className="w-4 h-4" /> Download Kit
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" /> Contact Support
                        </Button>
                    </div>
                </div>
            </section>
        </Base>
    );
};
import { Heart, Globe } from "lucide-react";

export default Fundraise;
