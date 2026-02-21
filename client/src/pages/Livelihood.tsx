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
            title: "Sustainable Agriculture & Nutrition",
            description: "Climate-smart farming techniques, high-quality seeds, and nutrition-focused agricultural training to ensure food security.",
            image: "/assets/images/agriculture-nutrition.jpg"
        },
        {
            icon: Coins,
            title: "Emergency Support & Maize",
            description: "Direct maize distributions and community grain banks to support vulnerable households during critical hunger seasons.",
            image: "/assets/images/maize-distribution.jpg"
        },
        {
            icon: Hammer,
            title: "Vocational & Life Skills",
            description: "Practical training in tailoring and carpentry, combined with life skills that foster long-term economic independence.",
            image: "/assets/images/vocational-training.jpg"
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
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
                        <div className="lg:col-span-2 prose prose-lg max-w-none text-center md:text-left">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Economic Independence</h2>
                            <p>
                                In rural Chitipa, many families depend on subsistence farming, which is highly vulnerable to climate shocks. TCI's livelihood programs aim to diversify income sources and build financial resilience.
                            </p>
                            <p>
                                We believe that when people have the tools and training to earn a fair living, they are better equipped to invest in their children's health and education, creating a ripple effect of prosperity across the community.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                                <TrendingUp className="w-12 h-12 text-primary mb-4 mx-auto md:mx-0" />
                                <h3 className="text-xl font-bold mb-2">Grow with Purpose</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    Our agricultural initiatives do more than provide food; they provide a lifeline to the most vulnerable members of our community.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Farming & Nutrition Section */}
                    <div className="bg-muted/50 rounded-3xl p-8 md:p-12 border border-border mb-20">
                        <div className="flex flex-col lg:flex-row gap-12">
                            <div className="flex-1 space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-4">Our Farms & Agricultural Impact</h2>
                                    <p className="text-muted-foreground leading-relaxed">
                                        TCI operates several farm plots to ensure a steady supply of nutritious food for our support programs. These farms serve as both production hubs and demonstration sites for sustainable techniques.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            Katutula Farm (Livestock)
                                        </h4>
                                        <p className="text-xs text-muted-foreground mb-3 italic">Empowering 2021 - 2023 Progress</p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex justify-between"><span>Goats Distributed</span> <span className="font-bold text-foreground">131</span></li>
                                            <li className="flex justify-between"><span>Pigs Distributed</span> <span className="font-bold text-foreground">119</span></li>
                                            <li className="flex justify-between"><span>Chickens & Eggs</span> <span className="font-bold text-foreground">1000+</span></li>
                                        </ul>
                                    </div>
                                    <div className="bg-background p-6 rounded-2xl shadow-sm border border-border">
                                        <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
                                            <Sprout className="w-4 h-4" />
                                            Namatubi Farm (Maize)
                                        </h4>
                                        <p className="text-xs text-muted-foreground mb-3 italic">Total Cultivated Area: 16.25 Acres</p>
                                        <ul className="space-y-2 text-sm text-muted-foreground">
                                            <li className="flex justify-between"><span>Main Maize Plot</span> <span className="font-bold text-foreground">11 Acres</span></li>
                                            <li className="flex justify-between"><span>Sub Plots</span> <span className="font-bold text-foreground">5.25 Acres</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border group relative">
                                    <img
                                        src="/assets/images/tci_livestock_farm.webp"
                                        alt="TCI Livestock Farm"
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=1200';
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                        <p className="text-white text-sm font-medium">Supporting children's health through sustainable farming.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-1/3 space-y-8">
                                <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-xl flex flex-col justify-center relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-bold mb-4">Feeding the Future</h3>
                                        <p className="text-primary-foreground/90 text-sm leading-relaxed mb-6">
                                            All produce from our farms is dedicated to our <strong>Nutrition Support Program</strong>. This includes:
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                Pass-on program for sustainable incomes
                                            </li>
                                            <li className="flex items-center gap-3 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                Nutritional rations for malnourished children
                                            </li>
                                            <li className="flex items-center gap-3 text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                Vital support for teens on ART program
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                                </div>

                                {/* Success Story Card */}
                                <Card className="border-primary/20 bg-primary/5 overflow-hidden">
                                    <div className="aspect-video bg-muted relative">
                                        <img
                                            src="/assets/images/youth_success_story.webp"
                                            alt="Youth Success Story"
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80&w=800';
                                            }}
                                        />
                                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">
                                            Success Story
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h4 className="font-bold text-lg mb-2 text-primary">From 1 to 15 Goats</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed italic">
                                            "I started with just one goat from TCI. Through the pass-on program and hard work, I now have over 15 goats and can fully support my family's needs."
                                        </p>
                                        <p className="text-xs font-bold text-primary mt-3">— Local Youth Participant</p>
                                    </CardContent>
                                </Card>
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
