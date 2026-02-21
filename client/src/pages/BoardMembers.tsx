import { Link } from "wouter";
import {
  Users,
  ChevronDown,
  Mail,
  Linkedin
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Base from "@/components/layout/Base";
import AboutSidebar from "@/components/layout/AboutSidebar";

export default function BoardMembers() {

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
    <Base>
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
            <AboutSidebar />
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
    </Base>
  );
}

