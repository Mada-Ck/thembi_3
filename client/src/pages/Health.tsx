import React from 'react';
import { Activity, Heart, Shield, PlusCircle, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Health: React.FC = () => {
    const focusAreas = [
        {
            icon: Activity,
            title: "HIV/AIDS & Viral Load Support",
            description: "Intensive treatment monitoring, viral load follow-up, and ARV adherence coaching for pediatric and adult cases.",
            image: "/assets/images/hiv-monitoring.jpg"
        },
        {
            icon: Heart,
            title: "Sexual Reproductive Health",
            description: "Comprehensive SRH trainings and services for youth and adults, focusing on prevention, testing, and rights.",
            image: "/assets/images/srh-training.jpg"
        },
        {
            icon: PlusCircle,
            title: "Child Care & Nutrition",
            description: "Household-level nutrition trainings and child care guidance to combat stunting and improve infant survival.",
            image: "/assets/images/nutrition.jpg"
        }
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Healthcare</h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                            TCI is dedicated to providing access to essential healthcare services and promoting healthy lifestyles in the most vulnerable communities of Malawi.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary">Partner With Us</Button>
                            </Link>
                            <Link href="/about-hiv">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">HIV/AIDS Support</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform translate-x-1/2"></div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20 text-center md:text-left">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Healthier Lives, Empowered Communities</h2>
                            <div className="prose prose-lg max-w-none">
                                <p>
                                    Health is the cornerstone of community development. TCI works tirelessly to address critical health challenges, including the high prevalence of HIV/AIDS, maternal mortality, and childhood malnutrition.
                                </p>
                                <p>
                                    Our holistic approach integrates medical care with social support, ensuring that patients not only receive treatment but also the emotional and nutritional foundation needed for recovery and long-term wellness.
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                            <Shield className="w-12 h-12 text-primary mb-4 mx-auto md:mx-0" />
                            <h3 className="text-xl font-bold mb-2">Our Quality Standard</h3>
                            <p className="text-muted-foreground text-sm">
                                We adhere to international health guidelines and work in close collaboration with the Malawi Ministry of Health to ensure our services meet the highest standards of care.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Health Initiatives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {focusAreas.map((area, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-xl transition-smooth group border-primary/5">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <img
                                        src={area.image}
                                        alt={area.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${area.title.replace(" ", "+")}`;
                                        }}
                                    />
                                </div>
                                <CardHeader>
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                                        <area.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <CardTitle className="text-xl">{area.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {area.description}
                                    </p>
                                    <Button variant="link" className="p-0 text-primary h-auto group-hover:gap-2 transition-all">
                                        View detailed impact <ArrowRight className="w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-muted">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-6">Your Support Saves Lives</h2>
                    <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        From providing life-saving medications to training community health workers, every contribution helps us reach one more person in need.
                    </p>
                    <Link href="/donate">
                        <Button size="lg" className="px-12">Donate to Health Programs</Button>
                    </Link>
                </div>
            </section>
        </Base>
    );
};

export default Health;
