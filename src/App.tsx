
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import TandN from "./pages/TandN";
import Exercise from "./pages/Exercise";
import Cardio from "./pages/Cardio";
import Program from "./pages/Program";
import Food from "./pages/Food";
import FreeFitness from "./pages/FreeFitness";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tandn" element={<TandN />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/program" element={<Program />} />
          <Route path="/food" element={<Food />} />
          <Route path="/freefitness" element={<FreeFitness />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
