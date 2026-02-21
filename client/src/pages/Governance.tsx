import { Link } from "wouter";
import {
  FileText,
  ShieldCheck,
  Users,
  LayoutDashboard,
  ChevronRight,
  ChevronDown
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Base from "@/components/layout/Base";
import AboutSidebar from "@/components/layout/AboutSidebar";

export default function Governance() {

  const reports = [
    { title: "Annual Report 2023", format: "PDF", size: "1.2 MB" },
    { title: "Annual Report 2022", format: "PDF", size: "1.1 MB" },
    { title: "Financial Statement 2023", format: "PDF", size: "0.8 MB" },
  ];

  const policies = [
    { title: "Code of Conduct", icon: ShieldCheck },
    { title: "Financial Transparency Policy", icon: FileText },
    { title: "Conflict of Interest Policy", icon: Users },
    { title: "Safeguarding Policy", icon: ShieldCheck },
  ];

  return (
    <Base>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/governance-hero.jpg"
            alt="Governance Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 text-center text-white animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Governance</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Ensuring integrity, transparency, and community-driven impact at Thembi Community Initiative.
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
            {/* Overview */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <LayoutDashboard className="w-8 h-8 text-primary" />
                Governance at TCI
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p>
                  Strong governance is the backbone of Thembi Community Initiative (TCI),
                  ensuring integrity, transparency, and accountability in all we do.
                  Our leadership upholds ethical standards, financial stewardship,
                  and community-driven decisions.
                </p>
                <p>
                  TCI's Board of Directors provides strategic oversight, aligning
                  programs with our mission of empowerment and health. Working with
                  a skilled management team, we ensure efficient implementation
                  and lasting impact.
                </p>
                <p>
                  Financial transparency is key. We conduct annual audits, align
                  budgets with priorities, and report regularly to stakeholders,
                  building trust with our donors and partners.
                </p>
                <p>
                  Community voices shape our governance. By involving beneficiaries,
                  we create sustainable, needs-based solutions that empower
                  communities to thrive.
                </p>
              </div>
            </section>

            {/* Annual Reports */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-primary" />
                Annual Reports
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {reports.map((report, index) => (
                  <Card key={index} className="hover:border-primary transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h4 className="font-bold">{report.title}</h4>
                          <p className="text-sm text-muted-foreground">{report.format} • {report.size}</p>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Policies */}
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-primary" />
                Policies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {policies.map((policy, index) => (
                  <Card key={index} className="hover:border-primary transition-colors cursor-pointer group">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          <policy.icon className="w-6 h-6" />
                        </div>
                        <h4 className="font-bold">{policy.title}</h4>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
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

