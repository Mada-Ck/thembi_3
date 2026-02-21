import React from 'react';
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import AboutSidebar from "@/components/layout/AboutSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExecutiveTeam: React.FC = () => {
    const team = [
        {
            name: "Mphatso Chikhwaza Ngurube",
            role: "Executive Director",
            email: "thembicommunityinitiatives@gmail.com",
            description: "Leading TCI's mission and strategic growth to empower communities across Malawi.",
            image: "/assets/images/executive/mphatso.jpg"
        },
        {
            name: "Patrick Ziba",
            role: "Director of Programs",
            email: "zibapatrick@yahoo.com",
            description: "Overseeing the implementation and impact of our core community programs.",
            image: "/assets/images/executive/patrick.jpg"
        },
        {
            name: "Madalitso Kalua",
            role: "Head of Finance and Administration",
            email: "madalitsokalua@gmail.com",
            description: "Ensuring financial transparency and operational efficiency within the organization.",
            image: "/assets/images/executive/madalitso.jpg"
        },
        {
            name: "Bester Msowoya",
            role: "Cordinating Health",
            email: "bestermsowoya@gmail.com",
            description: "Managing and coordinating health initiatives to improve community well-being.",
            image: "/assets/images/executive/bester.jpg"
        },
        {
            name: "Yamiko Mhone",
            role: "Health Officer",
            email: "kajalangako@gmail.com",
            description: "Supporting health program delivery and community outreach efforts.",
            image: "/assets/images/executive/yamiko.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="py-16 bg-muted">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-foreground mb-4">CEO and Executive Team</h1>
                        <p className="text-xl text-muted-foreground">
                            Driving TCI’s vision with expertise, passion, and a commitment to service.
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
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Our Leadership</h2>
                            <p>
                                The CEO and Executive Team lead TCI’s day-to-day operations, implementing the board’s strategic vision with a focus on community empowerment and sustainable development in rural Malawi.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {team.map((member, index) => (
                                <Card key={index} className="overflow-hidden hover:shadow-lg transition-smooth border-primary/10">
                                    <div className="aspect-[4/5] bg-muted relative">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=" + member.name.replace(" ", "+");
                                            }}
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{member.name}</CardTitle>
                                        <p className="text-primary font-medium text-sm">{member.role}</p>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <p className="text-muted-foreground text-sm">{member.description}</p>
                                        {member.email && (
                                            <div className="pt-2 border-t border-border">
                                                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-1">Contact</p>
                                                <a href={`mailto:${member.email}`} className="text-sm text-primary hover:underline break-all">
                                                    {member.email}
                                                </a>
                                            </div>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </Base>
    );
};

export default ExecutiveTeam;
