import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Upload } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-secondary">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Powered by AI</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your
                <span className="bg-gradient-primary bg-clip-text text-transparent block">
                  Learning Journey
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Upload your notes, PDFs, or documents and let AI create personalized 
                quizzes, flashcards, and study guides tailored to your learning style.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity group">
                <Upload className="mr-2 h-5 w-5" />
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/50 backdrop-blur-sm">
                View Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Study Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-pulse"></div>
            <img 
              src={heroImage} 
              alt="AI-powered learning platform interface"
              className="relative rounded-3xl shadow-large w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;