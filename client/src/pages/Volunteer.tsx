import { useState } from "react";
import { Users, Heart, Zap } from "lucide-react";
import { toast } from "sonner";
import Base from "@/components/layout/Base";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    skills: [] as string[],
    interests: [] as string[],
    availability: "flexible",
    emergencyContact: "",
    emergencyPhone: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const skillOptions = [
    "Healthcare",
    "Education",
    "Business/Finance",
    "IT/Technology",
    "Marketing",
    "Administration",
    "Construction",
    "Agriculture",
    "Other",
  ];

  const interestOptions = [
    "Health Program",
    "Education Program",
    "Livelihood Program",
    "Community Empowerment",
    "Youth Empowerment",
    "HIV/AIDS Awareness",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSkill = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const toggleInterest = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    try {
      // TODO: Connect to backend API when volunteer router is created
      toast.success("Thank you for your interest! We'll review your application and get back to you soon.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        country: "",
        skills: [],
        interests: [],
        availability: "flexible",
        emergencyContact: "",
        emergencyPhone: "",
      });
    } catch (error: any) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Base>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-accent">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Volunteer With Us
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Join thousands of dedicated volunteers making a real difference in communities across Chitipa. Your time and skills can transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Why Volunteer With Thembi?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Make Real Impact</h3>
              <p className="text-muted-foreground">
                Your contribution directly improves lives and strengthens communities. See the tangible results of your work.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Join a Community</h3>
              <p className="text-muted-foreground">
                Connect with like-minded individuals who share your passion for social change and community development.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Develop Skills</h3>
              <p className="text-muted-foreground">
                Gain valuable experience, develop new skills, and enhance your professional growth while helping others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-16 md:py-32 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Paper-Style Form Container */}
            <div className="relative">
              {/* Stacked Paper Effect Decoration */}
              <div className="absolute inset-0 bg-white/40 rounded-[2.5rem] rotate-1 translate-y-2 shadow-sm pointer-events-none" />
              <div className="absolute inset-0 bg-white/60 rounded-[2.5rem] -rotate-1 translate-y-1 shadow-md pointer-events-none" />

              <div className="relative bg-[#fcfaf7] rounded-[2.5rem] border border-[#e6e1d9] p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden">
                {/* Subtle Paper Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                <div className="relative z-10">
                  <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Volunteer Application</h2>
                    <p className="text-muted-foreground text-lg italic">"Every hand helping, every life changing."</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Personal Information */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Personal Information</h3>
                        <div className="h-px flex-1 bg-border" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">First Name *</label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="John"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Last Name *</label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="Doe"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="john@example.com"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Phone (incl. country code)</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">City</label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="Your City"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Country</label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="e.g. Malawi, USA, UK"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Skills & Interests */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Skills & Interests</h3>
                        <div className="h-px flex-1 bg-border" />
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">What skills do you bring?</label>
                        <div className="flex flex-wrap gap-3">
                          {skillOptions.map((skill) => (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => toggleSkill(skill)}
                              className={`px-4 py-2 rounded-xl border transition-smooth font-medium text-sm ${formData.skills.includes(skill)
                                ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                                : "bg-white text-foreground border-border hover:border-primary shadow-sm"
                                }`}
                            >
                              {skill}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Which programs interest you?</label>
                        <div className="grid md:grid-cols-2 gap-4">
                          {interestOptions.map((interest) => (
                            <button
                              key={interest}
                              type="button"
                              onClick={() => toggleInterest(interest)}
                              className={`px-6 py-4 rounded-2xl border transition-smooth font-medium text-sm text-left ${formData.interests.includes(interest)
                                ? "bg-secondary text-secondary-foreground border-secondary shadow-lg shadow-secondary/20"
                                : "bg-white text-foreground border-border hover:border-secondary shadow-sm"
                                }`}
                            >
                              {interest}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Availability</h3>
                        <div className="h-px flex-1 bg-border" />
                      </div>

                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-white border border-border rounded-2xl focus:border-primary focus:outline-none transition-smooth text-lg shadow-sm"
                      >
                        <option value="flexible">Flexible Schedule</option>
                        <option value="weekends">Weekends Only</option>
                        <option value="evenings">Evenings Only</option>
                        <option value="fulltime">Full-time</option>
                        <option value="seasonal">Seasonal</option>
                      </select>
                    </div>

                    {/* Emergency Contact */}
                    <div className="space-y-8">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="h-px flex-1 bg-border" />
                        <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Emergency Contact</h3>
                        <div className="h-px flex-1 bg-border" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Contact Name</label>
                          <input
                            type="text"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="Name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-tight text-muted-foreground">Emergency Phone (incl. country code)</label>
                          <input
                            type="tel"
                            name="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={handleChange}
                            className="w-full px-0 py-3 bg-transparent border-b border-border focus:border-primary focus:outline-none transition-smooth text-lg"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-8">
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full px-8 py-5 bg-primary text-primary-foreground rounded-[2rem] font-bold text-xl hover:bg-primary/90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-primary/20"
                      >
                        {isLoading ? "Submitting..." : "Send Application"}
                      </button>
                      <p className="mt-6 text-sm text-muted-foreground text-center italic">
                        By submitting, you agree to join our community of change-makers.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

