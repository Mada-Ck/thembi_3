import React from 'react';
import { motion } from 'framer-motion';

const partners = [
    { name: "UNAIDS", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/UNAIDS_logo.svg/1200px-UNAIDS_logo.svg.png" },
    { name: "USAID", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/USAID-Identity.svg/1200px-USAID-Identity.svg.png" },
    { name: "Global Fund", logo: "https://www.theglobalfund.org/media/5657/logo_theglobalfund_standard_vertical_en.png" },
    { name: "Malawi Gov", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Emblem_of_Malawi.svg/1200px-Emblem_of_Malawi.svg.png" },
    { name: "WHO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png" },
    { name: "UNICEF", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/UNICEF_logo.svg/1280px-UNICEF_logo.svg.png" },
];

export default function PartnerMarquee() {
    const duplicatedPartners = [...partners, ...partners];

    return (
        <div className="w-full bg-muted/30 py-12 border-y border-border overflow-hidden">
            <div className="container mb-8">
                <h3 className="text-center text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                    Trusted By International Partners
                </h3>
            </div>

            <div className="relative flex overflow-hidden group">
                <motion.div
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                    className="flex gap-20 whitespace-nowrap min-w-full"
                >
                    {duplicatedPartners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-12 w-auto object-contain max-w-[150px]"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
