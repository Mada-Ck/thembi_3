import React, { useState } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import axios from "axios";
import { Loader2, ArrowRight, ShieldCheck } from "lucide-react";

export default function Login() {
    const [, setLocation] = useLocation();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("/api/users/login", {
                email,
                password,
            });

            if (response.status === 200) {
                toast.success("Login successful! Redirecting...");
                // Redirect to dashboard or previous page
                setTimeout(() => {
                    setLocation("/dashboard");
                }, 1000);
            }
        } catch (error: any) {
            toast.error(error.response?.data?.errors?.[0]?.message || "Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-background">
            {/* Left Pane - Branding & Visuals */}
            <div className="hidden md:flex md:w-1/2 bg-primary relative overflow-hidden items-center justify-center p-12">
                {/* Abstract background pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                </div>

                <div className="relative z-10 text-primary-foreground max-w-lg">
                    <img
                        src="/assets/images/thembi-logo.png"
                        alt="Thembi Logo"
                        className="h-24 w-auto mb-8 brightness-0 invert"
                    />
                    <h1 className="text-4xl font-extrabold mb-4 leading-tight">
                        Thembi Community Initiative
                    </h1>
                    <p className="text-xl text-primary-foreground/80 mb-8">
                        Integrated Health Information System for Community Impact and Clinical Excellence.
                    </p>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Secure Access</h3>
                                <p className="text-xs text-primary-foreground/60">Encrypted portal for authorized personnel only.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="p-2 bg-white/10 rounded-lg">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm">Live Reporting</h3>
                                <p className="text-xs text-primary-foreground/60">Instant access to clinical and impact metrics.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Professional healthcare gradient if image is missing */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary-foreground/20 pointer-events-none"></div>
            </div>

            {/* Right Pane - Login Form */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-muted/30">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center md:text-left">
                        <img
                            src="/assets/images/thembi-logo.png"
                            alt="Thembi Logo"
                            className="h-16 w-auto mx-auto md:mx-0 mb-6 md:hidden"
                        />
                        <h2 className="text-3xl font-bold tracking-tight text-foreground">
                            Sign in to Portal
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Enter your credentials to access the Thembi management system.
                        </p>
                    </div>

                    <Card className="border-none shadow-elevated bg-card">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg font-semibold">Credentials</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleLogin} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@thembi.org"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="h-11 shadow-inner-soft"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <a href="/admin/forgot" className="text-xs text-primary hover:underline font-medium">
                                            Forgot password?
                                        </a>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="h-11 shadow-inner-soft"
                                    />
                                </div>

                                <div className="flex items-center space-x-2 py-2">
                                    <Checkbox id="remember" />
                                    <Label
                                        htmlFor="remember"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Keep me signed in
                                    </Label>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-11 text-base font-semibold transition-smooth"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Authenticating...
                                        </>
                                    ) : (
                                        "Sign In"
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    <div className="text-center text-sm text-muted-foreground mt-8">
                        <p>&copy; {new Date().getFullYear()} Thembi Community Initiative.</p>
                        <p className="mt-1">All rights reserved. Unauthorized access is strictly prohibited.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
