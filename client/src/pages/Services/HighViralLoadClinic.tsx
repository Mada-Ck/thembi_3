import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { Activity, ClipboardList, Home, Microscope, CheckCircle2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HighViralLoadClinic: React.FC = () => {
    const services = [
        {
            icon: Calendar,
            title: "Monthly Invitations",
            description: "Dedicated clinic days for specific age groups with elevated viral loads.",
            color: "bg-red-500/10 text-red-600"
        },
        {
            icon: Home,
            title: "Home Data Recording",
            description: "In-depth assessments of home environments to identify barriers to health.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: ClipboardList,
            title: "DSD Monitoring",
            description: "Differentiated Service Delivery tailored to identifying the 'why' behind health issues.",
            color: "bg-teal-500/10 text-teal-600"
        },
        {
            icon: Microscope,
            title: "Clinical Analysis",
            description: "Advanced medical review of adherence and treatment effectiveness.",
            color: "bg-purple-500/10 text-purple-600"
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
                        <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white p-8 md:p-16 shadow-2xl">
                            <div className="relative z-10 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold mb-6 border border-white/20 uppercase tracking-[0.2em]">
                                    <Activity className="w-3 h-3" />
                                    Advanced Monitoring
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">High Viral <br /><span className="text-white/80">Load Clinic</span></h1>
                                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Differentiated Service Delivery (DSD) to monitor and support patients across all age groups with elevated viral loads.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" variant="secondary" className="font-bold px-8 rounded-full shadow-lg shadow-black/10">Schedule Consultation</Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/4"></div>
                            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
                        </section>

                        {/* DSD Section */}
                        <section className="max-w-4xl space-y-6">
                            <h2 className="text-3xl font-bold">Differentiated Service Delivery (DSD)</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                When teens, children, or adults across any of our four age groups experience elevated viral loads, they are invited to our specialized High Viral Load Clinic. We hold these sessions monthly on specific dates where we meticulously monitor progress and record home data to assess the root cause of the issue.
                            </p>
                        </section>

                        {/* Services Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Diagnostic Approach</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Identifying the 'Why'</p>
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

                        {/* Monitoring Section */}
                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">Holistic Assessment</h2>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our monthly clinics combine medical metrics with social data to create a complete picture of patient health.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Invitations sent to all age groups with issues",
                                        "Differentiated clinic dates for focus sessions",
                                        "Home-based assessment and data tracking",
                                        "Multi-disciplinary clinical review"
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-red-600" />
                                            <span className="text-sm font-medium">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-muted">
                                <img
                                    src="https://images.unsplash.com/photo-1579684385127-1ea1565003dd?auto=format&fit=crop&q=80&w=800"
                                    alt="Advanced Clinical Monitoring"
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

export default HighViralLoadClinic;
