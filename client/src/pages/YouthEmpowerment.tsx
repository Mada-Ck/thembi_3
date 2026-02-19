import React from 'react';
import { Rocket, Target, Users, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const YouthEmpowerment: React.FC = () => {
    const initiatives = [
        {
            icon: Users,
            title: "Teen Clubs",
            description: "Safe spaces for adolescents to learn about sexual health, life skills, and leadership while building supportive peer networks.",
            image: "/assets/images/teen-club.jpg"
        },
        {
            icon: Target,
            title: "Mentorship Programs",
            description: "Connecting young people with local professionals and community leaders to provide guidance and career role modeling.",
            image: "/assets/images/mentorship.jpg"
        },
        {
            icon: Rocket,
            title: "Skills Development",
            description: "Vocational workshops and digital literacy training to prepare youth for the modern job market in Malawi.",
            image: "/assets/images/skills.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Youth Empowerment</h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                            Investing in the future leaders of Chitipa. We provide young people with the skills, resources, and confidence they need to succeed.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/volunteer">
                                <Button size="lg" variant="secondary">Become a Mentor</Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">Support Youth Initiatives</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
                        <div className="lg:col-span-2 prose prose-lg max-w-none text-center md:text-left">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Investing in Potential</h2>
                            <p>
                                In Malawi, youth represent the largest segment of the population. TCI believes that by empowering young people today, we are securing the prosperity of our community for decades to come.
                            </p>
                            <p>
                                Our approach is youth-led and youth-centered. We don't just create programs for young people; we create them *with* young people, ensuring our initiatives address the real-world challenges they face.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                                <BookOpen className="w-12 h-12 text-primary mb-4 mx-auto md:mx-0" />
                                <h3 className="text-xl font-bold mb-2">Holistic Growth</h3>
                                <p className="text-muted-foreground text-sm">
                                    We focus on the intersection of health, education, and economic opportunity to ensure every young person has a path to success.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Our Flagship Initiatives</h2>
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
                                    <div className="absolute top-4 left-4">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                                            <item.icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl text-center md:text-left">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center md:text-left">
                                        {item.description}
                                    </p>
                                    <div className="flex justify-center md:justify-start">
                                        <Button variant="link" className="p-0 text-primary h-auto group-hover:gap-2 transition-all">
                                            Learn more <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold mb-2">1,200+</p>
                            <p className="text-sm opacity-80 uppercase tracking-widest">Club Members</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">15</p>
                            <p className="text-sm opacity-80 uppercase tracking-widest">Teen Clubs</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">85</p>
                            <p className="text-sm opacity-80 uppercase tracking-widest">Active Mentors</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">250+</p>
                            <p className="text-sm opacity-80 uppercase tracking-widest">Workshops Held</p>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
};

export default YouthEmpowerment;
