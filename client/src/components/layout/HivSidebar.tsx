import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ChevronRight, Info, BarChart3, Globe, BookOpen, PenTool } from "lucide-react";

export default function HivSidebar() {
    const [location] = useLocation();

    const menuItems = [
        { label: "About HIV/AIDS", href: "/about-hiv", icon: Info },
        { label: "Basic Facts", href: "/basic-facts", icon: BookOpen },
        { label: "Malawi Statistics", href: "/malawi-stats", icon: BarChart3 },
        { label: "World Statistics", href: "/world-stats", icon: Globe },
        { label: "HIV Toolkit", href: "/hiv-toolkit", icon: PenTool },
    ];

    const isActive = (href: string) => location === href;

    return (
        <div className="sticky top-24 space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">Information Hub</h3>
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
                    <h4 className="font-bold text-sm mb-2 text-primary">Need Support?</h4>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                        TCI provides confidential ARV adherence coaching and treatment monitoring.
                    </p>
                    <Link href="/contact">
                        <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                            Contact our team <ChevronRight className="w-3 h-3" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
