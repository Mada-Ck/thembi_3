import React from 'react';
import { Rocket, Target, Users, BookOpen, ArrowRight, CheckCircle2, Calendar, ClipboardCheck } from "lucide-react";
import { Link } from "wouter";
import Base from "@/components/layout/Base";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const YouthEmpowerment: React.FC = () => {
    const initiatives = [
        {
            icon: Users,
            title: "Teen Clubs",
            description: "Safe spaces for adolescents to learn about sexual health, life skills, and leadership while building supportive peer networks.",
            image: "/assets/images/teen-club.jpg",
            details: {
                subtitle: "A Model for Adolescent Excellence",
                overview: "Our Teen Clubs follow the internationally recognized Baylor Malawi guidelines, providing a comprehensive support system for adolescents. These gatherings are more than just meetings; they are vibrant hubs of learning and peer support.",
                frequency: "Conducted Monthly",
                guidelines: [
                    "Adolescent-friendly environment with structured psychosocial support",
                    "Peer-led discussions on sexual and reproductive health (SRH)",
                    "Life skills development and leadership training",
                    "Integrated clinical services for seamless care"
                ],
                clinics: [
                    { name: "M'mera Mpoyaba Clinic", range: "0 - 9 years" },
                    { name: "Adolescent Clinic", range: "10 - 14 years" },
                    { name: "Youth Clinic", range: "15 - 19 years" },
                    { name: "Transition Clinic (OTZ)", range: "19 - 24 years" }
                ]
            }
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
                    <div className="max-w-3xl px-4 md:px-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Youth Empowerment</h1>
                        <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 text-balance">
                            Investing in the future leaders of Chitipa. We provide young people with the skills, resources, and confidence they need to succeed.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <Link href="/volunteer">
                                <Button size="lg" variant="secondary" className="font-semibold shadow-lg">Become a Mentor</Button>
                            </Link>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary transition-colors">Support Youth Initiatives</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-50"></div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-background">
                <div className="container px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20 lg:items-center">
                        <div className="lg:col-span-2 prose prose-lg max-w-none text-center lg:text-left">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Investing in Potential</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                In Malawi, youth represent the largest segment of the population. TCI believes that by empowering young people today, we are securing the prosperity of our community for decades to come.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our approach is youth-led and youth-centered. We don't just create programs for young people; we create them <span className="text-primary italic font-semibold">*with*</span> young people, ensuring our initiatives address the real-world challenges they face.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 shadow-sm">
                                <BookOpen className="w-12 h-12 text-primary mb-4 mx-auto lg:mx-0" />
                                <h3 className="text-xl font-bold mb-2">Holistic Growth</h3>
                                <p className="text-muted-foreground text-sm">
                                    We focus on the intersection of health, education, and economic opportunity to ensure every young person has a path to success.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-center mb-12">Our Flagship Initiatives</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                        {initiatives.map((item, index) => (
                            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-primary/5 bg-card flex flex-col h-full">
                                <div className="aspect-video bg-muted relative overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=600&h=400&auto=format&fit=crop`;
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                            <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
                                        </div>
                                    </div>
                                </div>
                                <CardHeader className="flex-none">
                                    <CardTitle className="text-xl text-center md:text-left group-hover:text-primary transition-colors">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col justify-between">
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-center md:text-left">
                                        {item.description}
                                    </p>
                                    <div className="flex justify-center md:justify-start">
                                        {item.details ? (
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="link" className="p-0 text-primary h-auto group-hover:translate-x-1 transition-transform font-semibold">
                                                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                                                    <DialogHeader className="mb-4">
                                                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                                                            <Users className="w-6 h-6 text-primary" />
                                                            {item.title}
                                                        </DialogTitle>
                                                        <p className="text-primary/70 font-medium">{item.details.subtitle}</p>
                                                    </DialogHeader>

                                                    <div className="space-y-6">
                                                        <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                                                            <p className="text-sm leading-relaxed text-foreground/80 italic">
                                                                "{item.details.overview}"
                                                            </p>
                                                        </div>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <div className="space-y-3">
                                                                <h4 className="font-bold flex items-center gap-2 text-primary">
                                                                    <ClipboardCheck className="w-4 h-4" />
                                                                    Operational Guidelines
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {item.details.guidelines.map((guide, i) => (
                                                                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                                                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                                                            <span>{guide}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="space-y-4">
                                                                <div className="p-4 bg-muted/50 rounded-xl border border-border">
                                                                    <h4 className="font-bold flex items-center gap-2 text-primary mb-2">
                                                                        <Calendar className="w-4 h-4" />
                                                                        Frequency
                                                                    </h4>
                                                                    <p className="text-sm font-semibold">{item.details.frequency}</p>
                                                                    <p className="text-xs text-muted-foreground mt-1">Consistency build trust and community.</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-4 pt-2">
                                                            <h4 className="font-bold text-lg border-b pb-2">TCI Clinic Schedule</h4>
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                {item.details.clinics.map((clinic, i) => (
                                                                    <div key={i} className="flex items-center justify-between p-3 bg-card border rounded-lg hover:border-primary/30 transition-colors shadow-sm">
                                                                        <div>
                                                                            <p className="text-sm font-bold text-primary">{clinic.name}</p>
                                                                            <p className="text-xs text-muted-foreground">{clinic.range}</p>
                                                                        </div>
                                                                        <div className="h-2 w-2 rounded-full bg-primary/40" />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div className="pt-4 text-center">
                                                            <Link href="/contact">
                                                                <Button className="w-full sm:w-auto">Support Our Teen Clubs</Button>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                        ) : (
                                            <Button variant="link" className="p-0 text-primary h-auto group-hover:translate-x-1 transition-transform font-semibold">
                                                Learn more <ArrowRight className="w-4 h-4 ml-2" />
                                            </Button>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="container relative z-10 px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <div className="space-y-2">
                            <p className="text-5xl font-extrabold mb-2 tracking-tighter">1,200+</p>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Club Members</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-5xl font-extrabold mb-2 tracking-tighter">15</p>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Teen Clubs</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-5xl font-extrabold mb-2 tracking-tighter">85</p>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Active Mentors</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-5xl font-extrabold mb-2 tracking-tighter">250+</p>
                            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">Workshops Held</p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px]"></div>
            </section>
        </Base>
    );
};

export default YouthEmpowerment;
