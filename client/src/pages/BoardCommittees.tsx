import React from 'react';
import { ShieldCheck, PieChart, Users, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BoardCommittees: React.FC = () => {
    const committees = [
        {
            icon: PieChart,
            title: "Finance Committee",
            description: "Oversees budgeting, financial transparency, and audits to ensure responsible stewardship of our resources.",
        },
        {
            icon: Users,
            title: "Program Committee",
            description: "Guides the development and evaluation of community programs to maximize our impact on the ground.",
        },
        {
            icon: ShieldCheck,
            title: "Governance Committee",
            description: "Ensures board performance, ethical standards, and adherence to our organizational bylaws.",
        },
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="py-16 bg-muted">
                <div className="container">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold text-foreground mb-4">Board Committees</h1>
                        <p className="text-xl text-muted-foreground">
                            Specialized teams driving TCI’s strategic goals and ensuring excellence in governance.
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
                                <Link href="/board-committees" className="text-primary font-bold">Board Committees</Link>
                                <Link href="/executive-team" className="text-muted-foreground hover:text-primary transition-colors">Executive Team</Link>
                                <Link href="/donors" className="text-muted-foreground hover:text-primary transition-colors">Donors & Supporters</Link>
                            </nav>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <main className="lg:col-span-3">
                        <div className="prose prose-lg max-w-none mb-12">
                            <p>
                                TCI’s Board Committees focus on key areas to support our mission. Comprising board members and subject matter experts, they ensure effective oversight, strategic alignment, and the long-term success of our community initiatives.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {committees.map((committee, index) => (
                                <Card key={index} className="hover:shadow-lg transition-smooth border-primary/10">
                                    <CardHeader className="bg-primary/5">
                                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                                            <committee.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl">{committee.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-6">
                                        <p className="text-muted-foreground mb-4">{committee.description}</p>
                                        <div className="flex items-center text-primary font-medium text-sm">
                                            Governance Focus <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10">
                            <h2 className="text-2xl font-bold mb-4">Committee Accountability</h2>
                            <p className="text-muted-foreground">
                                All committees report directly to the Board of Directors and are governed by specific terms of reference. This structure ensures that our specialized work remains transparent and fully aligned with TCI's core values and strategic priorities.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        </Base>
    );
};

export default BoardCommittees;
