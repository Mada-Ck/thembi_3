import React from "react";
import Base from "@/components/layout/Base";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowLeft, Users, Target, Rocket, Heart, Mail } from "lucide-react";

export default function Youth() {
    const programs = [
        {
            id: "leadership",
            title: "Leadership & SRH",
            icon: Users,
            shortDesc: "Empowering youth with leadership skills and Sexual Reproductive Health rights education.",
            image: "/assets/images/youth-leadership.jpg",
            fullDesc: "Thembi Community Initiative's Youth Leadership Program is designed to empower young people with essential leadership skills and comprehensive Sexual Reproductive Health (SRH) education. In a community where SRH rights are often overlooked, we provide safe spaces for adolescents to learn about their bodies, consent, and healthy relationships. This foundation, built through structured workshops and mentorship, prepares them to take on meaningful leadership roles within their communities, advocating for their rights and the rights of their peers.",
        },
        {
            id: "skills",
            title: "Vocational Skills",
            icon: Rocket,
            shortDesc: "Gain practical life skills in tailoring, carpentry, and financial literacy for economic independence.",
            image: "/assets/images/youth-skills.jpg",
            fullDesc: "Our Skills Training initiative provides youth and vulnerable groups with practical vocational and life skills—ranging from tailoring and carpentry to financial literacy and communication. These workshops are aimed at increasing employability, fostering self-reliance, and promoting long-term economic independence. Participants learn to manage small businesses and contribute meaningfully to their local economy, breaking the cycle of poverty through tangible expertise.",
        },
        {
            id: "agriculture",
            title: "Conservation Agriculture",
            icon: Target,
            shortDesc: "Training youth in climate-smart farming and sustainable land management.",
            image: "/assets/images/youth-agri.jpg",
            fullDesc: "The Youth Conservation Agriculture program equips young people with innovative, climate-smart farming techniques. In the face of climate change, we teach sustainable land management, soil preservation, and crop diversification. By involving youth in modern agriculture, we not only ensure food security for their households but also demonstrate that farming can be a viable, modern, and productive career path that respects and restores the environment.",
        },
    ];

    return (
        <Base>
            {/* Hero Section */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/images/youth-hero.jpg"
                        alt="Youth Hero"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523240715632-132d7575fd7c?auto=format&fit=crop&q=80&w=2000";
                        }}
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="container relative z-10 text-center text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <Link href="/what-we-do" className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary-foreground/80 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to What We Do
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">It Starts with YOUth</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90">
                        Empowering the Next Generation of Leaders.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container">
                    <div className="max-w-4xl mx-auto mb-16 space-y-8">
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                                Investing in Our Future: Youth Empowerment at TCI
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                The Thembi Community Initiative believes that investing in youth is investing in the future. We are committed to empowering young people with the skills, resources, and opportunities they need to thrive and become leaders in their communities.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
                            {programs.map((program) => (
                                <Card key={program.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/10">
                                    <div className="aspect-video relative overflow-hidden">
                                        <img
                                            src={program.image}
                                            alt={program.title}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x400?text=${program.title.replace(" ", "+")}`;
                                            }}
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md text-primary">
                                            <program.icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">{program.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <p className="text-muted-foreground">
                                            {program.shortDesc}
                                        </p>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" className="w-full text-primary border-primary/20 hover:bg-primary/5">
                                                    Learn More
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                                                <DialogHeader>
                                                    <DialogTitle className="text-2xl font-bold flex items-center gap-3">
                                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                            <program.icon className="w-6 h-6" />
                                                        </div>
                                                        {program.title}
                                                    </DialogTitle>
                                                </DialogHeader>
                                                <div className="mt-6 text-muted-foreground leading-relaxed space-y-4">
                                                    <p>{program.fullDesc}</p>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="space-y-12">
                            <div className="bg-primary/5 p-8 md:p-12 rounded-3xl border border-primary/10">
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <Heart className="w-6 h-6 text-primary" />
                                    Youth-Led Initiatives
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    We support youth-led initiatives that address community challenges and promote positive change. If you have an idea for a project, we can help you develop it and secure funding.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold">Success Stories</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-6 rounded-2xl border border-border bg-card italic text-sm text-muted-foreground">
                                        "Through TCI's leadership program, I gained the confidence to start a local tutoring group in my village. It's amazing to see how much of an impact we can make when given the right tools." — Memory, Youth Participant
                                    </div>
                                    <div className="p-6 rounded-2xl border border-border bg-card italic text-sm text-muted-foreground">
                                        "Learning vocational skills like tailoring has provided me with a steady income and the ability to support my siblings. TCI truly restored my hope for the future." — Gift, Skills Training Graduate
                                    </div>
                                </div>
                            </div>

                            <div className="text-center space-y-6 py-8">
                                <div className="max-w-xl mx-auto">
                                    <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
                                    <p className="text-muted-foreground mb-8">
                                        Are you a young person looking to make a difference? Contact us to learn more about how you can get involved in our youth empowerment programs. Parents and community members are also welcome to volunteer their time and expertise.
                                    </p>
                                    <Link href="/contact">
                                        <Button size="lg" className="px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all">
                                            <Mail className="w-5 h-5 mr-3" /> Contact Us
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
}
