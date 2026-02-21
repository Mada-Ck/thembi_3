import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Info, Users, HeartPulse, GraduationCap } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Region {
    id: string;
    name: string;
    stats: string;
    focus: string;
    icon: React.ElementType;
    path: string;
}

const regions: Region[] = [
    {
        id: "chitipa-dho",
        name: "Chitipa DHO",
        stats: "Primary Service Hub",
        focus: "Lufita & Surrounding Areas",
        icon: HeartPulse,
        path: "M 200,100 L 350,100 L 350,250 L 200,250 Z"
    },
    {
        id: "kameme",
        name: "Kameme RHC",
        stats: "Scaling Destination",
        focus: "Planned Rural Health Expansion",
        icon: GraduationCap,
        path: "M 350,100 L 500,100 L 500,250 L 350,250 Z"
    },
    {
        id: "active-zones",
        name: "Active Outreach",
        stats: "2,500+ Beneficiaries",
        focus: "Community Sensitivity",
        icon: Users,
        path: "M 200,250 L 350,250 L 350,400 L 200,400 Z"
    }
];

export default function ChitipaMap() {
    const [activeRegion, setActiveRegion] = useState<Region | null>(null);

    return (
        <div className="relative w-full aspect-square md:aspect-video bg-muted/30 rounded-[3rem] p-8 border border-border overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)]" />
            </div>

            <div className="relative h-full flex flex-col md:flex-row gap-12 items-center">
                {/* Map Side */}
                <div className="flex-1 w-full max-w-md relative">
                    <div className="absolute -top-12 left-0 font-bold text-primary/40 text-8xl pointer-events-none select-none">
                        CHITIPA
                    </div>

                    <svg viewBox="150 50 400 400" className="w-full h-auto drop-shadow-2xl">
                        {regions.map((region) => (
                            <motion.path
                                key={region.id}
                                d={region.path}
                                fill={activeRegion?.id === region.id ? "var(--primary)" : "var(--primary-foreground)"}
                                stroke="var(--primary)"
                                strokeWidth="2"
                                initial={{ opacity: 0.6 }}
                                whileHover={{ opacity: 1, scale: 1.02 }}
                                onClick={() => setActiveRegion(region)}
                                className="cursor-pointer transition-colors duration-300"
                            />
                        ))}
                    </svg>

                    {/* Legend */}
                    <div className="mt-8 flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                        {regions.map(r => (
                            <button
                                key={r.id}
                                onClick={() => setActiveRegion(r)}
                                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold transition-all border ${activeRegion?.id === r.id ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" : "bg-white text-primary border-primary/20 hover:border-primary shadow-sm"
                                    }`}
                            >
                                {r.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info Side */}
                <div className="flex-1 w-full flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {activeRegion ? (
                            <motion.div
                                key={activeRegion.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                                    <activeRegion.icon className="w-3 h-3" />
                                    Active Programming
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold">{activeRegion.name}</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                                        <p className="text-xs text-muted-foreground mb-1 uppercase font-bold">Reach</p>
                                        <p className="text-lg font-bold text-primary">{activeRegion.stats}</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-2xl border border-border shadow-sm">
                                        <p className="text-xs text-muted-foreground mb-1 uppercase font-bold">Primary Focus</p>
                                        <p className="text-lg font-bold text-primary">{activeRegion.focus}</p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our footprint in {activeRegion.name} is centered on the Chitipa DHO, ensuring essential service delivery to areas like Lufita as we prepare to scale to Kameme Rural Health Center.
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center md:text-left space-y-4"
                            >
                                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 mx-auto md:mx-0">
                                    <Info className="w-8 h-8" />
                                </div>
                                <h2 className="text-3xl font-bold">Explore Our Footprint</h2>
                                <p className="text-muted-foreground text-lg max-w-sm">
                                    Click on the regions of the Chitipa map to see TCI's localized impact and core programs.
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
