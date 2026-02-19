import React from 'react';
import { BookOpen, Award, GraduationCap, Heart, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Education: React.FC = () => {
    const programs = [
        {
            icon: BookOpen,
            title: "Early Childhood Development",
            description: "Supporting community-based childcare centers to ensure children have a strong nutritional and educational foundation for primary school.",
            image: "/assets/images/early-childhood.jpg"
        },
        {
            icon: GraduationCap,
            title: "Scholarships and Bursaries",
            description: "Providing financial support for secondary and tertiary education to high-achieving students from low-income households.",
            image: "/assets/images/scholarships.jpg"
        },
        {
            icon: Award,
            title: "Literacy & Numeracy",
            description: "Extra-curricular support for primary school students to improve basic reading and math skills in rural schools.",
            image: "/assets/images/literacy.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Through Learning</h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                            TCI is committed to breaking the cycle of poverty by improving access to quality education for children and youth in rural Malawi.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/volunteer">
                                <Button size="lg" variant="secondary">Volunteer as Tutor</Button>
                            </Link>
                            <Link href="/donate">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">Support a Student</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
                        <div className="lg:col-span-2 prose prose-lg max-w-none">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Opening Doors to the Future</h2>
                            <p>
                                In many parts of Chitipa, access to education is hindered by poverty, distance to schools, and lack of resources. TCI works to dismantle these barriers, believing that every child deserves the opportunity to learn and grow.
                            </p>
                            <p>
                                Our educational initiatives go beyond just providing school fees. We focus on creating supportive environments where students can thrive, including providing school supplies, uniforms, and mentorship.
                            </p>
                        </div>
                        <div>
                            <div className="bg-muted p-8 rounded-2xl border border-border">
                                <h3 className="text-xl font-bold mb-4">Our Impact</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-muted-foreground">500+ students supported annually</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-muted-foreground">12 community centers supported</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        <span className="text-muted-foreground">85% retention rate in partner schools</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Our Specialized Programs</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth group border-primary/5">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <img
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${program.title.replace(" ", "+")}`;
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                                            <program.icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-xl">{program.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {program.description}
                                    </p>
                                    <Button variant="link" className="p-0 text-primary h-auto group-hover:gap-2 transition-all">
                                        Learn about this initiative <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial/Call to Action */}
            <section className="py-20 bg-muted">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8 italic">"Education is the most powerful weapon which you can use to change the world."</h2>
                        <p className="text-xl text-muted-foreground mb-12">- Nelson Mandela</p>
                        <div className="inline-flex flex-wrap justify-center gap-6">
                            <div className="bg-card p-6 rounded-xl border border-border flex items-center gap-4">
                                <Heart className="w-10 h-10 text-primary" />
                                <div className="text-left">
                                    <p className="font-bold">Partner with us</p>
                                    <p className="text-sm text-muted-foreground">Contact our programs team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
};

export default Education;
