import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navItems = [
    {
      label: "About",
      href: "/about",
      submenu: [
        { label: "About Us", href: "/about" },
        { label: "What We Do", href: "/what-we-do" },
        { label: "Governance", href: "/governance" },
        { label: "Board Members", href: "/board-members" },
        { label: "Board Committees", href: "/board-committees" },
        { label: "Executive Team", href: "/executive-team" },
        { label: "Donors & Supporters", href: "/donors" },
      ],
    },
    {
      label: "Get Help",
      href: "/get-help",
      submenu: [
        { label: "Get Help", href: "/get-help" },
        { label: "Join Teen Club", href: "/teen-club" },
        { label: "Child Clinic", href: "/child-clinic" },
        { label: "HIV Services", href: "/hiv-services" },
        { label: "PMTCT & HIV Women", href: "/pmtct" },
      ],
    },
    {
      label: "Thembi Activities",
      href: "/activities",
      submenu: [
        { label: "Volunteer", href: "/volunteer" },
        { label: "It Starts with YOUth", href: "/youth" },
        { label: "Fundraise for TCI", href: "/fundraise" },
        { label: "Corporate Partnerships", href: "/corporate" },
        { label: "Health", href: "/health" },
        { label: "Livelihood", href: "/livelihood" },
        { label: "Community Empowerment", href: "/community-empowerment" },
        { label: "Youth Empowerment", href: "/youth-empowerment" },
        { label: "Education", href: "/education" },
      ],
    },
    {
      label: "HIV/AIDS",
      href: "/hiv-aids",
      submenu: [
        { label: "About HIV/AIDS", href: "/about-hiv" },
        { label: "Malawi Statistics", href: "/malawi-stats" },
        { label: "Basic Facts", href: "/basic-facts" },
        { label: "World Statistics", href: "/world-stats" },
      ],
    },
    {
      label: "Portal",
      href: "/dashboard",
      submenu: [
        { label: "Clinical Tracker", href: "/dashboard/clinic" },
        { label: "Reporting Dashboard", href: "/dashboard" },
      ],
    },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container flex justify-between items-center">
          <Link href="/login" className="hover:underline text-primary-foreground">
            Login
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/images/thembi-logo.png"
              alt="Thembi Community Initiative"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-primary">Thembi</h1>
              <p className="text-xs text-muted-foreground">A Promise of Hope</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button className="text-foreground hover:text-primary transition-smooth font-medium flex items-center gap-1">
                  {item.label}
                  <svg
                    className="w-4 h-4 group-hover:rotate-180 transition-smooth"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {item.submenu?.map((subitem) => (
                    <Link
                      key={subitem.href}
                      href={subitem.href}
                      className="block px-4 py-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-smooth text-sm"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-smooth"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>

            {/* Donate Button */}
            <Link
              href="/donate"
              className="hidden sm:block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
            >
              Donate
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="container py-4 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex justify-between items-center py-2 text-foreground hover:text-primary font-medium transition-smooth"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>

                  {openDropdown === item.label && (
                    <div className="pl-4 space-y-2 mt-2 border-l-2 border-primary">
                      {item.submenu?.map((subitem) => (
                        <Link
                          key={subitem.href}
                          href={subitem.href}
                          className="block py-2 text-sm text-foreground hover:text-primary transition-smooth"
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Donate Button */}
              <Link
                href="/donate"
                className="block w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium text-center mt-4"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
