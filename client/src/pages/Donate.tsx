import { useState } from "react";
import { Heart, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import Base from "@/components/layout/Base";

export default function Donate() {
  const [donationType, setDonationType] = useState<"specific_program" | "general" | "child_sponsorship" | "in_kind">("general");
  const [programType, setProgramType] = useState("health");
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [interval, setInterval] = useState<"month" | "year">("month");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const createCheckoutMutation = trpc.donations.createCheckoutSession.useMutation();

  const programs = [
    { value: "health", label: "Health Program" },
    { value: "education", label: "Education Program" },
    { value: "livelihood", label: "Livelihood Program" },
    { value: "community_empowerment", label: "Community Empowerment" },
    { value: "youth_empowerment", label: "Youth Empowerment" },
  ];

  const amounts = [25, 50, 100, 250, 500, 1000];

  const finalAmount = customAmount ? parseFloat(customAmount) : amount;

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!donorName.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!donorEmail.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (finalAmount < 1) {
      toast.error("Please enter a valid amount");
      return;
    }

    setIsLoading(true);

    try {
      const result = await createCheckoutMutation.mutateAsync({
        donorName,
        donorEmail,
        amount: finalAmount,
        donationType,
        programType: donationType === "specific_program" ? programType : undefined,
        isRecurring,
        interval,
        message: message || undefined,
      });

      if (result.url) {
        window.open(result.url, "_blank");
        toast.success("Redirecting to secure checkout...");
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to create donation");
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
              Make a Difference Today
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Your generous donation helps us continue our mission of empowering communities in Chitipa, Malawi. Every contribution, no matter the size, creates meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8">
                <form onSubmit={handleDonate} className="space-y-8">
                  {/* Donation Type */}
                  <div>
                    <label className="block text-lg font-semibold text-foreground mb-4">
                      How would you like to donate?
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { value: "general", label: "General Donation" },
                        { value: "specific_program", label: "Specific Program" },
                        { value: "child_sponsorship", label: "Child Sponsorship" },
                        { value: "in_kind", label: "In-Kind Support" },
                      ].map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => setDonationType(option.value as any)}
                          className={`p-4 rounded-lg border-2 transition-smooth text-left font-medium ${donationType === option.value
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border hover:border-primary text-foreground"
                            }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Program Selection */}
                  {donationType === "specific_program" && (
                    <div>
                      <label className="block text-lg font-semibold text-foreground mb-4">
                        Select a Program
                      </label>
                      <select
                        value={programType}
                        onChange={(e) => setProgramType(e.target.value)}
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {programs.map((program) => (
                          <option key={program.value} value={program.value}>
                            {program.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Amount */}
                  <div>
                    <label className="block text-lg font-semibold text-foreground mb-4">
                      Donation Amount
                    </label>
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {amounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => {
                            setAmount(amt);
                            setCustomAmount("");
                          }}
                          className={`p-3 rounded-lg border-2 transition-smooth font-semibold ${amount === amt && !customAmount
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary text-foreground"
                            }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <input
                      type="number"
                      placeholder="Custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        if (e.target.value) setAmount(0);
                      }}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Recurring */}
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={(e) => setIsRecurring(e.target.checked)}
                        className="w-5 h-5 rounded border-border"
                      />
                      <span className="text-lg font-semibold text-foreground">
                        Make this a monthly recurring donation
                      </span>
                    </label>
                    {isRecurring && (
                      <div className="mt-4 p-4 bg-secondary/10 rounded-lg">
                        <select
                          value={interval}
                          onChange={(e) => setInterval(e.target.value as any)}
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          <option value="month">Monthly</option>
                          <option value="year">Annually</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Donor Info */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground">Your Information</h3>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <textarea
                      placeholder="Message (optional)"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    {isLoading ? "Processing..." : `Donate $${finalAmount.toFixed(2)}`}
                  </button>

                  {/* Security Notice */}
                  <div className="p-4 bg-accent/10 rounded-lg flex gap-3">
                    <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">
                      Your donation is secure and processed through Stripe. We never store your credit card information.
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Impact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-2xl">💊</div>
                    <div>
                      <p className="font-semibold text-foreground">$25</p>
                      <p className="text-sm text-muted-foreground">Provides health screening for 5 people</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">📚</div>
                    <div>
                      <p className="font-semibold text-foreground">$50</p>
                      <p className="text-sm text-muted-foreground">Supplies school materials for a child</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">🏫</div>
                    <div>
                      <p className="font-semibold text-foreground">$100</p>
                      <p className="text-sm text-muted-foreground">Funds one month of teacher salary</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <p className="font-semibold text-foreground">$250</p>
                      <p className="text-sm text-muted-foreground">Supports vocational training for youth</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/10 rounded-xl border border-secondary/20 p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Tax Deductible</h3>
                <p className="text-sm text-muted-foreground">
                  Thembi Community Initiative is a registered non-profit organization. Your donation may be tax-deductible. We'll send you a receipt for your records.
                </p>
              </div>

              <div className="bg-primary/10 rounded-xl border border-primary/20 p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Questions?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our team for more information about donations or sponsorship opportunities.
                </p>
                <a
                  href="mailto:donations@thembi.org"
                  className="text-primary font-semibold hover:underline"
                >
                  donations@thembi.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
}

