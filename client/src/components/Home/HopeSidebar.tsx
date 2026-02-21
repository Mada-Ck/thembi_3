import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Twitter, Radio, ArrowRight, HeartPulse, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Update {
    id: number;
    author: string;
    role: string;
    message: string;
    time: string;
    tag: string;
    color: string;
}

const fieldUpdates: Update[] = [
    {
        id: 1,
        author: "Grace M.",
        role: "Health Coordinator",
        message: "Just finished a nutrition screening in Lufita. 15 new families enrolled!",
        time: "2h ago",
        tag: "Field Update",
        color: "bg-green-500"
    },
    {
        id: 2,
        author: "Thembi Community",
        role: "@TCI_Malawi",
        message: "Celebrating 10 years of Teen Club excellence this week in Chitipa Boma! #TCIImpact",
        time: "5h ago",
        tag: "Social Feed",
        color: "bg-blue-500"
    },
    {
        id: 3,
        author: "Peter O.",
        role: "Agric Officer",
        message: "New shipment of livestock arriving tomorrow for the community empowerment project.",
        time: "1d ago",
        tag: "Livelihood",
        color: "bg-orange-500"
    }
];

export default function HopeSidebar() {
    return (
        <div className="sticky top-24 space-y-8 h-[calc(100vh-8rem)] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-border">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <Radio className="w-5 h-5 text-primary animate-pulse" />
                    Hope Feed
                </h3>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase">Live</span>
            </div>

            {/* Updates Stream */}
            <div className="flex-1 overflow-y-auto space-y-6 pr-4 -mr-4 scrollbar-hidden">
                {fieldUpdates.map((update, index) => (
                    <motion.div
                        key={update.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative"
                    >
                        <div className="flex gap-4">
                            <div className="shrink-0 relative">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold ${update.color} shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                                    {update.tag === "Social Feed" ? <Twitter className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
                            </div>

                            <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold truncate pr-2">{update.author}</span>
                                    <span className="text-[10px] text-muted-foreground shrink-0">{update.time}</span>
                                </div>
                                <p className="text-[13px] text-muted-foreground leading-relaxed">
                                    {update.message}
                                </p>
                                <div className="pt-2 flex items-center gap-2 text-[10px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                                    Read More <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Action Widget */}
            <div className="bg-primary/5 rounded-3xl p-6 border border-primary/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                <div className="relative space-y-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary mb-2">
                        <HeartPulse className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <h4 className="font-bold text-sm">Target: Medical Kits</h4>
                    <div className="space-y-1.5">
                        <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-primary shadow-sm"
                            />
                        </div>
                        <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                            <span>$7,500 Raised</span>
                            <span className="text-primary">75%</span>
                        </div>
                    </div>
                    <Button size="sm" className="w-full rounded-full h-9 text-xs font-bold gap-2">
                        Support Progress <Send className="w-3 h-3" />
                    </Button>
                </div>
            </div>
        </div>
    );
}
