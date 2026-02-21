import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

interface ImpactCounterProps {
    value: number;
    label: string;
    suffix?: string;
    subtext?: string;
    icon?: React.ElementType;
}

export default function ImpactCounter({ value, label, suffix = "+", subtext, icon: Icon }: ImpactCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        stiffness: 50,
        damping: 30,
        restDelta: 0.001
    });

    const displayValue = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-card rounded-2xl p-8 text-center hover:shadow-elevated transition-all duration-300 border border-border group hover:border-primary/50 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />

            {Icon && (
                <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                    </div>
                </div>
            )}

            <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2 flex items-center justify-center">
                <motion.span>{displayValue}</motion.span>
                <span>{suffix}</span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {label}
            </h3>

            {subtext && (
                <p className="text-sm text-muted-foreground font-medium">
                    {subtext}
                </p>
            )}
        </motion.div>
    );
}
