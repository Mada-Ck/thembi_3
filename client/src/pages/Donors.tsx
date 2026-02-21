import React from 'react';
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import AboutSidebar from "@/components/layout/AboutSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Globe, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Donors: React.FC = () => {
    const supporters = [
        {
            title: "Holfman Family",
            description: "Dedicated supporters of our community health initiatives and youth programs.",
            category: "Family Partner"
        },
        {
            title: "Nicolai Family",
            description: "Long-standing partners in our mission to provide education and hope to children.",
            category: "Family Partner"
        },
        {
            title: "Greenwel Street Church",
            description: "A community of faith committed to transforming lives through social support.",
            category: "Church Partner"
        },
        {
            title: "Beard Family",
            description: "Supporting our core programs with passion and commitment to service.",
            category: "Family Partner"
        },
        {
            title: "Louise Laubscher",
            description: "An individual donor whose generosity fuels our daily outreach and impact.",
            category: "Individual Donor"
        },
        {
            title: "Ballygrainey Church",
            description: "An international partner church providing essential resources for our community work.",
            category: "Church Partner"
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
                        <AboutSidebar />
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
