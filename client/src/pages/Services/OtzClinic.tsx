import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { Star, ShieldCheck, HeartPulse, GraduationCap, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const OtzClinic: React.FC = () => {
    const services = [
        {
            icon: ShieldCheck,
            title: "Triple Zero Goals",
            description: "Zero missed appointments, zero missed medication, and zero viral load.",
            color: "bg-teal-500/10 text-teal-600"
        },
        {
            icon: HeartPulse,
            title: "Intensive SRH",
            description: "Aggressive Sexual Reproductive Health education for independent adults.",
            color: "bg-red-500/10 text-red-600"
        },
        {
            icon: GraduationCap,
            title: "Independence Lab",
            description: "Sessions on managing health records and independent clinic visits.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: Star,
            title: "OTZ Champions",
            description: "Peer leadership program for young adults achieving the Triple Zero goals.",
            color: "bg-yellow-500/10 text-yellow-600"
        }
    ];

    return (
        <Base>
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-1/4">
                        <ServicesSidebar />
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1 space-y-16">
                        {/* Hero Section */}
                        <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-teal-600 to-teal-800 text-white p-8 md:p-16 shadow-2xl">
                            <div className="relative z-10 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold mb-6 border border-white/20 uppercase tracking-[0.2em]">
                                    <Star className="w-3 h-3" />
                                    Ages 19 - 24
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">OTZ <br /><span className="text-white/80">Clinic</span></h1>
                                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Operation Triple Zero: Empowering young adults to achieve zero missed appointments, zero missed doses, and zero viral load.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" variant="secondary" className="font-bold px-8 rounded-full shadow-lg shadow-black/10">Become a Champion</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* Abstract background shapes */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
                        </section>

                        {/* Concept Section */}
                        <section className="max-w-4xl space-y-6">
                            <h2 className="text-3xl font-bold">Triple Zero Excellence</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                The OTZ clinic is a specialized track for young adults (19-24). At this stage, independence is paramount. These young adults have unique needs that cannot be mixed with younger groups. We deliver <strong>aggressive Sexual Reproductive Health sessions</strong> and focus on self-management of their health journey.
                            </p>
                        </section>

                        {/* Services Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Programs & Focus</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Aiming for Zero</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {services.map((service, index) => (
                                    <Card key={index} className="border-none bg-muted/30 hover:bg-muted/50 transition-colors group cursor-default">
                                        <CardContent className="p-8 flex gap-6">
                                            <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm", service.color)}>
                                                <service.icon className="w-7 h-7" />
                                            </div>
                                            <div className="space-y-2">
                                                <h3 className="text-xl font-bold">{service.title}</h3>
                                                <p className="text-muted-foreground leading-relaxed text-sm">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </section>

                        {/* Independence Section */}
                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Independent Management</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our OTZ clinic transitions young adults from clinical reliance to empowered health independence.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Young Adults aged 19 to 24 years old",
                                        "Intensive SRH workshops for independent life",
                                        "Focus on viral suppression (Triple Zero)",
                                        "Tailored peer support for young professionals"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal-600" />
                                            <span className="text-sm font-medium">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-muted">
                                <img
                                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
                                    alt="OTZ Clinic Support"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default OtzClinic;
