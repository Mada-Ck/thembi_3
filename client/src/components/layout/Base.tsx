import React from "react";
import Navigation from "../Navigation";
import Footer from "../Footer";

interface BaseProps {
  children: React.ReactNode;
}

export default function Base({ children }: BaseProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
