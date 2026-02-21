import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeLabel = "2011",
    afterLabel = "Today"
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((clientX - rect.left) / rect.width) * 100;
            setSliderPosition(Math.max(0, Math.min(100, x)));
        }
    };

    const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl group cursor-col-resize select-none"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
        >
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt="After transformation"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image (Clip) */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img
                    src={beforeImage}
                    alt="Before transformation"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 transition-all duration-700"
                />
                {/* Comparison Label Before */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-black/40 backdrop-blur-xl px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 pointer-events-none z-30">
                    <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">{beforeLabel}</span>
                </div>
            </div>

            {/* Comparison Label After */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-primary/60 backdrop-blur-xl px-4 py-1.5 md:px-6 md:py-2 rounded-full border border-white/10 pointer-events-none z-30">
                <span className="text-white text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">{afterLabel}</span>
            </div>

            {/* Slider Bar */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-primary">
                    <div className="flex gap-1">
                        <div className="w-1 h-4 bg-primary rounded-full" />
                        <div className="w-1 h-4 bg-primary rounded-full" />
                    </div>
                </div>
            </div>

            {/* Instructional Overlay */}
            <div className="absolute inset-x-0 bottom-6 md:bottom-12 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="bg-black/40 backdrop-blur-xl px-6 py-2 md:px-8 md:py-3 rounded-full border border-white/10 text-white font-medium text-xs md:text-sm shadow-2xl flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                    Drag to explore transformation
                </div>
            </div>
        </div>
    );
}
