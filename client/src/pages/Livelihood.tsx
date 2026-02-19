import React from 'react';
import { Briefcase, Sprout, Hammer, Coins, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Livelihood: React.FC = () => {
    const initiatives = [
        {
            icon: Sprout,
            title: "Sustainable Agriculture",
            description: "Training in climate-smart farming techniques, providing high-quality seeds, and establishing community grain banks.",
            image: "/assets/images/skills-training.jpg"
        },
        {
            icon: Coins,
            title: "Microfinance & Village Savings",
            description: "Supporting Village Savings and Loan Associations (VSLA) to provide community members with access to small-scale capital.",
            image: "/assets/images/microfinance.jpg"
        },
        {
            icon: Hammer,
            title: "Vocational Skills",
            description: "Practical training in tailoring, carpentry, and masonry to provide youth and women with marketable trade skills.",
            image: "/assets/images/carpentry.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Sustainable Livelihoods</h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                            Empowering families to break the cycle of poverty through economic opportunity, skills development, and financial inclusion.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/donate">
                                <Button size="lg" variant="secondary">Support a Small Business</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
            </section>

            {/* Main Content */}
            <section className="py-20 text-center md:text-left">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
                        <div className="lg:col-span-2 prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Economic Independence</h2>
                            <p>
                                In rural Chitipa, many families depend on subsistence farming, which is highly vulnerable to climate shocks. TCI's livelihood programs aim to diversify income sources and build financial resilience.
                            </p>
                            <p>
                                We believe that when people have the tools and training to earn a fair living, they are better equipped to invest in their children's health and education, creating a ripple effect of prosperity across the community.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="bg-muted p-8 rounded-2xl border border-border">
                                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto md:mx-0" />
                                <h3 className="text-xl font-bold mb-2">Measurable Growth</h3>
                                <p className="text-muted-foreground text-sm">
                                    Starting with small-scale interventions, we help families scale their enterprises into sustainable businesses that serve local markets.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Livelihood Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {initiatives.map((item, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth group border-primary/5">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${item.title.replace(" ", "+")}`;
                                        }}
                                    />
                                </div>
                                <CardHeader>
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    <Button variant="link" className="p-0 text-primary h-auto group-hover:gap-2 transition-all">
                                        Explore this program <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Microfinance Spotlight */}
            <section className="py-20 bg-muted">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">The Power of Choice</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            "When I received my first micro-loan, I bought a sewing machine. Today, I employ two other women from my village and we are building a brick home for my family."
                        </p>
                        <p className="font-bold text-primary">— Mary, VSLA Participant</p>
                    </div>
                </div>
            </section>
        </Base>
    );
};

export default Livelihood;
