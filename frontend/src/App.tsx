import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Index from "./pages/Index";
import Exercise from "./pages/Exercise";
import Cardio from "./pages/Cardio";
import Program from "./pages/Program";
import Food from "./pages/Food";
import FreeFitness from "./pages/FreeFitness";
import Food1 from "./pages-2/Food1";
import Food2 from "./pages-2/Food2";
import Food3 from "./pages-2/Food3";
import Food4 from "./pages-2/Food4";
import Food5 from "./pages-2/Food5";
import Food6 from "./pages-2/Food6";
import Food7 from "./pages-2/Food7";
import Food8 from "./pages-2/Food8";
import Food9 from "./pages-2/Food9";
import Calculate from "./pages-3/Calculate";
import Exercise1 from "./pages-5/Exercise1";
import Exercise2 from "./pages-5/Exercise2";
import Exercise3 from "./pages-5/Exercise3";
import Exercise4 from "./pages-5/Exercise4";
import Exercise5 from "./pages-5/Exercise5";
import Exercise6 from "./pages-5/Exercise6";
import Exercise7 from "./pages-5/Exercise7";
import Exercise8 from "./pages-5/Exercise8";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Index />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/program" element={<Program />} />
          <Route path="/food" element={<Food />} />
          <Route path="/freefitness" element={<FreeFitness />} />
          <Route path="/Food1" element={<Food1 />} />
          <Route path="/Food2" element={<Food2 />} />
          <Route path="/Food3" element={<Food3 />} />
          <Route path="/Food4" element={<Food4 />} />
          <Route path="/Food5" element={<Food5 />} />
          <Route path="/Food6" element={<Food6 />} />
          <Route path="/Food7" element={<Food7 />} />
          <Route path="/Food8" element={<Food8 />} />
          <Route path="/Food9" element={<Food9 />} />
          <Route path="/Calculate" element={<Calculate />} />
          <Route path="/Exercise1" element={<Exercise1 />} />
          <Route path="/Exercise2" element={<Exercise2 />} />
          <Route path="/Exercise3" element={<Exercise3 />} />
          <Route path="/Exercise4" element={<Exercise4 />} />
          <Route path="/Exercise5" element={<Exercise5 />} />
          <Route path="/Exercise6" element={<Exercise6 />} />
          <Route path="/Exercise7" element={<Exercise7 />} />
          <Route path="/Exercise8" element={<Exercise8 />} />
    
          

          <Route path="*" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
