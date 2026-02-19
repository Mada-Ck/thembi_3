import React from 'react';
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Globe, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Donors: React.FC = () => {
    const supporters = [
        {
            title: "Global Health Foundation",
            description: "Provides essential grants for our HIV/AIDS care programs and medical supplies.",
            category: "Institutional Partner"
        },
        {
            title: "Chitipa Community Fund",
            description: "Supports local initiatives for youth education and primary school literacy programs.",
            category: "Local Partner"
        },
        {
            title: "Individual Donors",
            description: "Countless contributors from around the world who fuel our mission through monthly giving.",
            category: "Community"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="py-16 bg-muted">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-foreground mb-4">Donors and Supporters</h1>
                        <p className="text-xl text-muted-foreground">
                            Our partners in creating lasting change and restoring hope for vulnerable communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="sticky top-24 space-y-4">
                            <h3 className="text-xl font-bold border-b pb-2">In this section</h3>
                            <nav className="flex flex-col space-y-2">
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                                <Link href="/what-we-do" className="text-muted-foreground hover:text-primary transition-colors">What We Do</Link>
                                <Link href="/governance" className="text-muted-foreground hover:text-primary transition-colors">Governance</Link>
                                <Link href="/board-members" className="text-muted-foreground hover:text-primary transition-colors">Board Members</Link>
                                <Link href="/board-committees" className="text-muted-foreground hover:text-primary transition-colors">Board Committees</Link>
                                <Link href="/executive-team" className="text-muted-foreground hover:text-primary transition-colors">Executive Team</Link>
                                <Link href="/donors" className="text-primary font-bold">Donors & Supporters</Link>
                            </nav>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="lg:col-span-3">
                        <div className="prose prose-lg max-w-none mb-12">
                            <h2 className="text-2xl font-bold mb-4 text-foreground">A Legacy of Partnership</h2>
                            <p>
                                Thembi Community Initiative (TCI) thrives thanks to the generous support of our donors and partners. Their contributions enable us to deliver holistic support to vulnerable communities, focusing on children, women, and those living with HIV/AIDS in rural Malawi.
                            </p>
                            <p>
                                From individuals to international organizations, our supporters share our vision of a healthier, empowered future. Their funding and resources help us implement life-saving programs with transparency and accountability.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {supporters.map((supporter, index) => (
                                <Card key={index} className="hover:shadow-lg transition-smooth border-primary/10">
                                    <CardHeader>
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                                                {supporter.category}
                                            </span>
                                        </div>
                                        <CardTitle className="text-xl">{supporter.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{supporter.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="bg-primary text-primary-foreground border-none overflow-hidden">
                            <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-1">
                                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                                    <p className="text-primary-foreground/90 text-lg mb-6">
                                        Whether through a one-time gift, a monthly partnership, or institutional collaboration, your involvement makes a direct impact on lives in Chitipa.
                                    </p>
                                    <Link href="/donate">
                                        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                                            Donate Now <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                                <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <Heart className="w-10 h-10" />
                                    </div>
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <Globe className="w-10 h-10" />
                                    </div>
                                    <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center">
                                        <Users className="w-10 h-10" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </main>
                </div>
            </div>
        </Base>
    );
};

export default Donors;
