import { Link } from "wouter";
import { 
  Users, 
  ChevronDown,
  Mail,
  Linkedin
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function BoardMembers() {
  const sidebarItems = [
    { label: "About Us", href: "/about" },
    { label: "What We Do", href: "/what-we-do" },
    { 
      label: "Governance", 
      href: "/governance", 
      active: true,
      submenu: [
        { label: "Donors and Supporters", href: "/donors" },
        { label: "Board Members", href: "/board-members", active: true },
        { label: "Board Committees", href: "/board-committees" },
        { label: "CEO and Executive Team", href: "/executive-team" },
      ]
    },
  ];

  const boardMembers = [
    {
      name: "Ms Louise Laubscher",
      role: "Chairperson",
      description: "Leads with extensive community development experience.",
      image: "/images/board/louise-laubscher.jpg",
      initials: "LL"
    },
    {
      name: "Counsel Kolezi Phiri",
      role: "Vice Chairperson",
      description: "Offers legal expertise and leadership support.",
      image: "/images/board/kolezi-phiri.jpg",
      initials: "KP"
    },
    {
      name: "Mrs Mphatso Chikhwaza",
      role: "Executive Director & Secretary",
      description: "Ensures mission alignment and operational oversight.",
      image: "/images/board/mphatso-chikhwaza.jpg",
      initials: "MC"
    },
    {
      name: "Mr Bornwell Kaunga",
      role: "Member",
      description: "Brings finance and engagement insights.",
      image: "/images/board/bornwell-kaunga.jpg",
      initials: "BK"
    },
    {
      name: "Mr Aston Gondwe",
      role: "Member",
      description: "Expert in sustainable development.",
      image: "/images/board/aston-gondwe.jpg",
      initials: "AG"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/board-members-hero.jpg" 
            alt="Board Members Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Board Members</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Meet the dedicated leaders guiding TCI's mission.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-xl font-bold border-b pb-2">In this section</h3>
              <nav className="flex flex-col space-y-2">
                {sidebarItems.map((item, index) => (
                  <div key={index} className="space-y-1">
                    <Link 
                      href={item.href} 
                      className={`flex items-center justify-between p-2 rounded-lg transition-colors ${
                        item.active && item.href === "/governance" ? "bg-primary text-primary-foreground font-bold" : "text-muted-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {item.label}
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-1 mt-1">
                        {item.submenu.map((sub, idx) => (
                          <Link 
                            key={idx} 
                            href={sub.href} 
                            className={`block p-2 text-sm transition-colors border-l border-muted-foreground/20 ml-2 ${
                              sub.active ? "text-primary font-bold border-primary" : "text-muted-foreground hover:text-primary"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:col-span-3">
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                Our Board
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                TCI's Board of Directors provides strategic oversight, ensuring 
                our programs align with our mission to empower communities 
                and improve lives.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {boardMembers.map((member, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <CardHeader className="text-center pt-8">
                      <Avatar className="w-32 h-32 mx-auto border-4 border-primary/10 group-hover:border-primary/30 transition-colors">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback className="text-2xl bg-primary/5 text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="mt-4 text-xl">{member.name}</CardTitle>
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider">{member.role}</p>
                    </CardHeader>
                    <CardContent className="text-center pb-8">
                      <p className="text-muted-foreground text-sm mb-6">
                        {member.description}
                      </p>
                      <div className="flex justify-center gap-4">
                        <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                          <Mail className="w-4 h-4" />
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
