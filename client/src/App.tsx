import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import WarmUp from "./pages/WarmUp";
import Drills from "./pages/Drills";
import DrillDetail from "./pages/DrillDetail";
import Frameworks from "./pages/Frameworks";
import FrameworkDetail from "./pages/FrameworkDetail";
import Mindset from "./pages/Mindset";
import Tips from "./pages/Tips";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/warmup" component={WarmUp} />
      <Route path="/drills" component={Drills} />
      <Route path="/drills/:id" component={DrillDetail} />
      <Route path="/frameworks" component={Frameworks} />
      <Route path="/frameworks/:id" component={FrameworkDetail} />
      <Route path="/mindset" component={Mindset} />
      <Route path="/tips" component={Tips} />
      <Route>
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-muted-foreground">Page not found</p>
        </div>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <div className="grain-overlay" />
          <ScrollToTop />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
