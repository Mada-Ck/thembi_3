import React from 'react';
import { Building2, Users, Rocket, BarChart3, ArrowRight, Handshake } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Corporate: React.FC = () => {
    const opportunities = [
        {
            icon: Rocket,
            title: "Program Sponsorship",
            description: "Align your CSR goals with our vital programs in health, education, or livelihood development for high-impact visibility.",
            image: "/assets/images/corporate-sponsorship.jpg"
        },
        {
            icon: Users,
            title: "Employee Engagement",
            description: "Meaningful volunteer opportunities and employee giving campaigns that boost team morale while making a difference.",
            image: "/assets/images/employee-giving.jpg"
        },
        {
            icon: BarChart3,
            title: "Strategic Partnerships",
            description: "Co-creating innovative solutions to community challenges through long-term infrastructure or technology collaboration.",
            image: "/assets/images/corporate-partnership.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative py-24 bg-muted overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Partner with TCI</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Create impact together. Partner with Thembi Community Initiative to fulfill your CSR goals and build a better future for rural Malawi.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="px-8">Contact Partnerships Team</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform translate-x-1/4"></div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Making a Difference Through Corporate Partnership</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground">
                                <p>
                                    TCI partners with businesses that share our commitment to human dignity and sustainable development. Together, we can scale our impact far beyond what we could achieve alone.
                                </p>
                                <p>
                                    Our corporate partners benefit from transparent reporting, meaningful engagement stories, and the knowledge that their investment is driving real change in one of the most vulnerable regions of Malawi.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {[
                                { title: "Brand Reputation", desc: "Align with a respected, high-impact organization." },
                                { title: "Employee Pride", desc: "Boost retention through meaningful social impact." },
                                { title: "Direct Impact", desc: "Measurable results for community well-being." },
                                { title: "Tax Efficiency", desc: "Optimize your charitable contributions." }
                            ].map((benefit, i) => (
                                <div key={i} className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                    <h3 className="font-bold text-primary mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Partnership Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {opportunities.map((opt, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth group border-primary/5">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <img
                                        src={opt.image}
                                        alt={opt.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${opt.title.replace(" ", "+")}`;
                                        }}
                                    />
                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <CardHeader>
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                        <opt.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-xl">{opt.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                        {opt.description}
                                    </p>
                                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        Get Started <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container text-center">
                    <Handshake className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl font-bold mb-6">Let's Discuss Your CSR Vision</h2>
                    <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
                        We are eager to discuss how your company can partner with TCI to achieve shared goals of community transformation.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="secondary" className="px-12">Talk to a Partnerships Manager</Button>
                    </Link>
                </div>
            </section>
        </Base>
    );
};

export default Corporate;
