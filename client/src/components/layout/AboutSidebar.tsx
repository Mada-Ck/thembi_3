import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

export default function AboutSidebar() {
    const [location] = useLocation();

    const menuItems = [
        { label: "About Us", href: "/about" },
        { label: "What We Do", href: "/what-we-do" },
        {
            label: "Governance",
            href: "/governance",
            children: [
                { label: "Board Members", href: "/board-members" },
                { label: "Board Committees", href: "/board-committees" },
                { label: "Executive Team", href: "/executive-team" },
            ],
        },
        { label: "Donors & Supporters", href: "/donors" },
    ];

    const isActive = (href: string) => location === href;
    const isParentActive = (item: any) => {
        if (isActive(item.href)) return true;
        if (item.children) {
            return item.children.some((child: any) => isActive(child.href));
        }
        return false;
    };

    return (
        <div className="sticky top-24 space-y-4">
            <h3 className="text-xl font-bold border-b pb-2">In this section</h3>
            <nav className="flex flex-col space-y-1">
                {menuItems.map((item) => (
                    <div key={item.href} className="space-y-1">
                        <Link
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between py-2 px-3 rounded-lg transition-all duration-200 font-medium",
                                isActive(item.href)
                                    ? "bg-primary text-primary-foreground shadow-md scale-[1.02]"
                                    : isParentActive(item)
                                        ? "text-primary bg-primary/5"
                                        : "text-muted-foreground hover:bg-muted hover:text-primary"
                            )}
                        >
                            <span>{item.label}</span>
                            {item.children && <ChevronRight className={cn("w-4 h-4 transition-transform", isParentActive(item) && "rotate-90")} />}
                        </Link>

                        {item.children && (
                            <div className={cn(
                                "ml-4 pl-4 border-l-2 border-border space-y-1 mt-1 overflow-hidden transition-all duration-300",
                                isParentActive(item) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            )}>
                                {item.children.map((child) => (
                                    <Link
                                        key={child.href}
                                        href={child.href}
                                        className={cn(
                                            "block py-1.5 px-3 rounded-lg text-sm transition-colors relative",
                                            isActive(child.href)
                                                ? "text-primary font-bold bg-primary/10"
                                                : "text-muted-foreground hover:text-primary hover:bg-muted/5"
                                        )}
                                    >
                                        {isActive(child.href) && (
                                            <span className="absolute left-[-17px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary" />
                                        )}
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
}
