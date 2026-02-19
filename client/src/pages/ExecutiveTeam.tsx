import React from 'react';
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExecutiveTeam: React.FC = () => {
    const team = [
        {
            name: "Jane Doe",
            role: "Chief Executive Officer",
            description: "Guides TCI with a vision for sustainable impact and community transformation.",
            image: "/assets/images/executive/jane-doe.jpg"
        },
        {
            name: "John Smith",
            role: "Chief Operating Officer",
            description: "Oversees program execution and ensures operational excellence across all initiatives.",
            image: "/assets/images/executive/john-smith.jpg"
        },
        {
            name: "Mary Jones",
            role: "Chief Financial Officer",
            description: "Manages financial strategy, ensuring transparency and accountability to our donors.",
            image: "/assets/images/executive/mary-jones.jpg"
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
                        <div className="sticky top-24 space-y-4">
                            <h3 className="text-xl font-bold border-b pb-2">In this section</h3>
                            <nav className="flex flex-col space-y-2">
                                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
                                <Link href="/what-we-do" className="text-muted-foreground hover:text-primary transition-colors">What We Do</Link>
                                <Link href="/governance" className="text-muted-foreground hover:text-primary transition-colors">Governance</Link>
                                <Link href="/board-members" className="text-muted-foreground hover:text-primary transition-colors">Board Members</Link>
                                <Link href="/board-committees" className="text-muted-foreground hover:text-primary transition-colors">Board Committees</Link>
                                <Link href="/executive-team" className="text-primary font-bold">Executive Team</Link>
                                <Link href="/donors" className="text-muted-foreground hover:text-primary transition-colors">Donors & Supporters</Link>
                            </nav>
                        </div>
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
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm">{member.description}</p>
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
