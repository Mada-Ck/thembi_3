import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ChevronRight, HeartPulse, Users, Star, Baby, Activity } from "lucide-react";

export default function ServicesSidebar() {
    const [location] = useLocation();

    const menuItems = [
        { label: "Child Clinic (0-9)", href: "/child-clinic", icon: Baby },
        { label: "Junior Teen Club (9-14)", href: "/teen-club-junior", icon: Users },
        { label: "Senior Teen Club (14-19)", href: "/teen-club-senior", icon: HeartPulse },
        { label: "OTZ Clinic (19-24)", href: "/otz-clinic", icon: Star },
        { label: "High Viral Load (DSD)", href: "/high-viral-load", icon: Activity },
        { label: "HIV Community Services", href: "/hiv-services", icon: HeartPulse },
        { label: "PMTCT & HIV+ Women", href: "/pmtct", icon: Star },
    ];

    const isActive = (href: string) => location === href;

    return (
        <div className="sticky top-24 space-y-4">
            <h3 className="text-xl font-bold border-b pb-2 text-foreground">Community Services</h3>
            <nav className="flex flex-col space-y-1">
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "group flex items-center justify-between py-2.5 px-4 rounded-xl transition-all duration-200 font-medium",
                            isActive(item.href)
                                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                                : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                        )}
                    >
                        <div className="flex items-center gap-3">
                            <item.icon className={cn("w-4 h-4", isActive(item.href) ? "text-primary-foreground" : "text-primary")} />
                            <span>{item.label}</span>
                        </div>
                        <ChevronRight className={cn(
                            "w-4 h-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0",
                            isActive(item.href) && "opacity-100 translate-x-0"
                        )} />
                    </Link>
                ))}
            </nav>

            <div className="pt-6">
                <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10">
                    <h4 className="font-bold text-sm mb-2 text-primary">Need Urgent Help?</h4>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        Our team is available for emergency support and counseling services.
                    </p>
                    <Link href="/contact">
                        <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                            Contact Us Now <ChevronRight className="w-3 h-3" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
