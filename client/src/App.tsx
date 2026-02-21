import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import ScrollToTop from "./components/ScrollToTop";

// Main Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import Dashboard from "./pages/Dashboard";
import ClinicalTracker from "./pages/ClinicalTracker";
import WhatWeDo from "./pages/WhatWeDo";
import Health from "./pages/Health";
import Education from "./pages/Education";
import YouthEmpowerment from "./pages/YouthEmpowerment";
import CommunityEmpowerment from "./pages/CommunityEmpowerment";
import Livelihood from "./pages/Livelihood";
import Corporate from "./pages/Corporate";
import Fundraise from "./pages/Fundraise";
import Governance from "./pages/Governance";
import BoardMembers from "./pages/BoardMembers";
import BoardCommittees from "./pages/BoardCommittees";
import ExecutiveTeam from "./pages/ExecutiveTeam";
import Donors from "./pages/Donors";
import Youth from "./pages/Youth";

// HIV/AIDS Page Imports
import AboutHiv from "./pages/HIV/AboutHiv";
import BasicFactsAboutHiv from "./pages/HIV/BasicFactsAboutHiv";
import MalawiHivStatistics from "./pages/HIV/MalawiHivStatistics";
import WorldHivStatistics from "./pages/HIV/WorldHivStatistics";
import HivToolkit from "./pages/HIV/HivToolkit";

// Services Page Imports
import ChildClinic from "./pages/Services/ChildClinic";
import GetHelp from "./pages/Services/GetHelp";
import HivServices from "./pages/Services/HivServices";
import JoinTeenClub from "./pages/Services/JoinTeenClub";
import TeenClubJunior from "./pages/Services/TeenClubJunior";
import TeenClubSenior from "./pages/Services/TeenClubSenior";
import OtzClinic from "./pages/Services/OtzClinic";
import HighViralLoadClinic from "./pages/Services/HighViralLoadClinic";
import Pmtct from "./pages/Services/Pmtct";

// Blog Page Imports
import BlogList from "./pages/Legal/BlogList";
import BlogPostDetail from "./pages/Legal/BlogPostDetail";

// Legal Page Imports
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy";
import TermsOfUse from "./pages/Legal/TermsOfUse";

import Login from "./pages/Login";

function Router() {
  return (
    <Switch>
      {/* Home and Main Pages */}
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/about" component={About} />
      <Route path="/what-we-do" component={WhatWeDo} />
      <Route path="/health" component={Health} />
      <Route path="/education" component={Education} />
      <Route path="/youth-empowerment" component={YouthEmpowerment} />
      <Route path="/community-empowerment" component={CommunityEmpowerment} />
      <Route path="/livelihood" component={Livelihood} />
      <Route path="/corporate" component={Corporate} />
      <Route path="/fundraise" component={Fundraise} />
      <Route path="/governance" component={Governance} />
      <Route path="/board-members" component={BoardMembers} />
      <Route path="/board-committees" component={BoardCommittees} />
      <Route path="/executive-team" component={ExecutiveTeam} />
      <Route path="/donors" component={Donors} />
      <Route path="/youth" component={Youth} />
      <Route path="/donate" component={Donate} />
      <Route path="/contact" component={Contact} />
      <Route path="/volunteer" component={Volunteer} />

      {/* HIV/AIDS Information */}
      <Route path="/about-hiv" component={AboutHiv} />
      <Route path="/basic-facts" component={BasicFactsAboutHiv} />
      <Route path="/malawi-stats" component={MalawiHivStatistics} />
      <Route path="/world-stats" component={WorldHivStatistics} />
      <Route path="/hiv-toolkit" component={HivToolkit} />

      {/* Community Services */}
      <Route path="/child-clinic" component={ChildClinic} />
      <Route path="/get-help" component={GetHelp} />
      <Route path="/hiv-services" component={HivServices} />
      <Route path="/teen-club" component={JoinTeenClub} />
      <Route path="/teen-club-junior" component={TeenClubJunior} />
      <Route path="/teen-club-senior" component={TeenClubSenior} />
      <Route path="/otz-clinic" component={OtzClinic} />
      <Route path="/high-viral-load" component={HighViralLoadClinic} />
      <Route path="/pmtct" component={Pmtct} />

      {/* Blog & News */}
      <Route path="/blog" component={BlogList} />
      <Route path="/blog/:slug" component={BlogPostDetail} />

      {/* Legal Pages */}
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfUse} />

      {/* Dashboard & Tools */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/clinic" component={ClinicalTracker} />

      {/* Fallback */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable
      >
        <ScrollToTop />
        <TooltipProvider>
          <Toaster />
          <main className="min-h-screen">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

