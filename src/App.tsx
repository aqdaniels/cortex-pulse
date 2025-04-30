
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import OperationsModeling from "./pages/OperationsModeling";
import DevelopmentHome from "./pages/development/DevelopmentHome";
import CodeQuality from "./pages/development/CodeQuality";
import TechnicalDebt from "./pages/development/TechnicalDebt";
import CodebaseHealth from "./pages/development/CodebaseHealth";
import DevModeling from "./pages/operations/DevModeling";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/operations/modeling" element={<OperationsModeling />} />
          <Route path="/operations/dev-modeling" element={<DevModeling />} />
          <Route path="/development" element={<DevelopmentHome />} />
          <Route path="/development/code-quality" element={<CodeQuality />} />
          <Route path="/development/tech-debt" element={<TechnicalDebt />} />
          <Route path="/development/codebase-health" element={<CodebaseHealth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
