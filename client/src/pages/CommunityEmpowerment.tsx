import React from 'react';
import { Users, Lightbulb, Handshake, Globe, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CommunityEmpowerment: React.FC = () => {
    const initiatives = [
        {
            icon: Users,
            title: "Outreach & Sensitisation",
            description: "Mobilizing communities through village-to-village outreach and sensitisations on health, rights, and sustainable practices.",
            image: "/assets/images/community-outreach.jpg"
        },
        {
            icon: Lightbulb,
            title: "Community-Led Projects",
            description: "Supporting grassroots projects that address local priorities, from clean water access to infrastructure improvements.",
            image: "/assets/images/community-projects.jpg"
        },
        {
            icon: Handshake,
            title: "Leadership & Governance",
            description: "Facilitating dialogues between community members, local government, and traditional leaders to foster local ownership.",
            image: "/assets/images/leadership-governance.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Empowerment</h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                            At TCI, we believe that sustainable change starts with empowered communities. We build local capacity to foster leadership and self-reliance.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary">Partner With Us</Button>
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
                            <h2 className="text-3xl font-bold text-foreground mb-6 text-center md:text-left">Building a Stronger Chitipa, Together</h2>
                            <p>
                                Sustainable development is only possible when communities are the architects of their own progress. Our programs focus on identifying local strengths and providing the tools needed to overcome systemic challenges.
                            </p>
                            <p>
                                We work closely with traditional authorities and community committees to ensure that every project is culturally appropriate, locally owned, and built to last for generations.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="bg-muted p-8 rounded-2xl border border-border">
                                <Globe className="w-12 h-12 text-primary mb-4 mx-auto md:mx-0" />
                                <h3 className="text-xl font-bold mb-2">Sustainable Change</h3>
                                <p className="text-muted-foreground text-sm">
                                    Our model shifts from "giving help" to "building capacity," ensuring that community improvements remain even after our direct involvement concludes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Our Key Initiatives</h2>
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
                                        Learn about this work <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Story */}
            <section className="py-20 bg-muted">
                <div className="container">
                    <div className="max-w-4xl mx-auto bg-card rounded-3xl overflow-hidden shadow-xl border border-border">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Success Story</span>
                                <h2 className="text-2xl font-bold mb-6">Transforming a Local Market</h2>
                                <p className="text-muted-foreground mb-6 italic">
                                    "By organizing our local traders into a cooperative, TCI helped us secure better prices and improve sanitation. Today, we manage our own maintenance fund and our community is thriving."
                                </p>
                                <p className="font-bold">- Local Community Leader</p>
                            </div>
                            <div className="bg-primary/10 flex items-center justify-center p-12">
                                <Users className="w-24 h-24 text-primary opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
};

export default CommunityEmpowerment;
