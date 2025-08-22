import { Button } from "@/components/ui/button";
import { Brain, Upload, BookOpen, BarChart3 } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            StudyGenie
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="gap-2">
            <Upload className="h-4 w-4" />
            Upload
          </Button>
          <Button variant="ghost" className="gap-2">
            <BookOpen className="h-4 w-4" />
            Study
          </Button>
          <Button variant="ghost" className="gap-2">
            <BarChart3 className="h-4 w-4" />
            Progress
          </Button>
        </nav>
        
        <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;