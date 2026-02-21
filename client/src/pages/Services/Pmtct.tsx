import React from 'react';
import { Link } from 'wouter';
import Base from '../../components/layout/Base';
import ServicesSidebar from '../../components/layout/ServicesSidebar';
import { cn } from "@/lib/utils";
import { Star, ShieldCheck, Baby, Heart, Utensils, Users, Info, ArrowRight, CheckCircle2, QrCode, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Pmtct: React.FC = () => {
    const services = [
        {
            icon: ShieldCheck,
            title: "ART for Mothers",
            description: "Providing essential antiretroviral therapy to reduce viral load and ensure healthy births.",
            color: "bg-teal-500/10 text-teal-600"
        },
        {
            icon: Baby,
            title: "Early Infant Diagnosis",
            description: "Immediate and regular testing for infants to ensure timely health interventions.",
            color: "bg-blue-500/10 text-blue-600"
        },
        {
            icon: Heart,
            title: "Counseling Support",
            description: "Holistic emotional support and mental health services for HIV+ mothers.",
            color: "bg-pink-500/10 text-pink-600"
        },
        {
            icon: Utensils,
            title: "Feeding Guidance",
            description: "Professional coaching on safe infant feeding practices to minimize transmission risk.",
            color: "bg-orange-500/10 text-orange-600"
        }
    ];

    const faqs = [
        {
            question: "What is the most effective way to prevent transmission?",
            answer: "The most effective way is through a combination of early ART for the mother, safe delivery practices, and appropriate infant feeding guidance. ART significantly lowers the mother’s viral load, making the risk of transmission extremely low."
        },
        {
            question: "Can I safely breastfeed my baby?",
            answer: "Yes, with consistent ART and professional guidance, breastfeeding can be safe. We provide specialized counseling on exclusive breastfeeding and other safe options tailored to your health status."
        },
        {
            question: "When should I start visiting the clinic?",
            answer: "As soon as you suspect you are pregnant or know your HIV+ status. Early intervention is the key to a healthy pregnancy and a HIV-free baby. We encourage regular check-ups throughout the process."
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
                                    Maternal Hope
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]">PMTCT & <br /><span className="text-white/80">Woman Support</span></h1>
                                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                                    Dedicated interventions to prevent mother-to-child transmission and empower HIV-positive women to lead fulfilling lives.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Link href="/contact">
                                        <Button size="lg" variant="secondary" className="font-bold px-8 rounded-full shadow-lg shadow-black/10">Start Your Journey</Button>
                                    </Link>
                                </div>
                            </div>
                            {/* Abstract background shapes */}
                            <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
                            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
                        </section>

                        {/* Concept Section */}
                        <section className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold">What is PMTCT?</h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    <strong>Prevention of Mother-to-Child Transmission</strong> is a lifecycle of care. From pregnancy through breastfeeding, we provide the medical and emotional guardrails necessary to protect both mother and child.
                                </p>
                                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 italic text-teal-800">
                                    "Our mission is an HIV-free generation, starting with every mother we support in Chitipa."
                                </div>
                            </div>
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-muted">
                                <img
                                    src="/assets/images/pmtct-hero.jpg"
                                    alt="Maternal Support"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=800';
                                    }}
                                />
                            </div>
                        </section>

                        {/* Services Grid */}
                        <section className="space-y-8">
                            <div className="flex items-end justify-between border-b pb-4">
                                <h2 className="text-3xl font-bold">Programs & Services</h2>
                                <p className="text-sm text-muted-foreground hidden md:block italic">Empowering Mothers</p>
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

                        {/* FAQs Section */}
                        <section className="bg-muted/50 rounded-[3rem] p-8 md:p-16 border border-border">
                            <div className="max-w-3xl mx-auto space-y-12">
                                <div className="text-center space-y-4">
                                    <h2 className="text-3xl font-bold">Common Questions</h2>
                                    <p className="text-muted-foreground">Clear, accurate information for your peace of mind.</p>
                                </div>
                                <Accordion type="single" collapsible className="w-full space-y-4">
                                    {faqs.map((faq, i) => (
                                        <AccordionItem key={i} value={`faq-${i}`} className="border bg-background px-6 rounded-2xl shadow-sm">
                                            <AccordionTrigger className="hover:no-underline font-bold text-left py-6">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </section>

                        {/* Contact/Join Section */}
                        <section className="bg-teal-600 rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-12 shadow-xl shadow-teal-900/10">
                            <div className="flex-1 space-y-4 text-center md:text-left">
                                <h2 className="text-3xl font-bold">Take the First Step</h2>
                                <p className="text-white/80">
                                    Visit our office or call us today to enroll in the PMTCT program. All services are confidential and provided with the utmost care.
                                </p>
                            </div>
                            <div className="shrink-0 flex flex-col gap-4 w-full md:w-auto">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="w-full md:w-auto font-bold px-12 rounded-full py-6">Enroll Now</Button>
                                </Link>
                                <div className="text-center text-xs font-medium text-white/60 flex items-center justify-center gap-2">
                                    <ClipboardCheck className="w-4 h-4" /> Confidential & Free
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Base>
    );
};

export default Pmtct;
