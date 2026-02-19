import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";

import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Dashboard from "./pages/Dashboard";
import ClinicalTracker from "./pages/ClinicalTracker";
import WhatWeDo from "./pages/WhatWeDo";
import Governance from "./pages/Governance";
import BoardMembers from "./pages/BoardMembers";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/what-we-do"} component={WhatWeDo} />
      <Route path={"/governance"} component={Governance} />
      <Route path={"/board-members"} component={BoardMembers} />
      <Route path={"/donate"} component={Donate} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/volunteer"} component={Volunteer} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/dashboard/clinic"} component={ClinicalTracker} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Navigation />
          <main className="min-h-screen">
            <Router />
          </main>
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
