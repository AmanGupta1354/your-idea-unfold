import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
  Target, 
  Languages, 
  BarChart3, 
  MessageSquare,
  FileSearch,
  Clock
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Generation",
      description: "Advanced AI extracts key concepts from your materials and creates comprehensive study guides automatically.",
      badge: "Smart",
      color: "bg-purple-500"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Adaptive study paths based on your strengths and weaknesses, ensuring optimal learning efficiency.",
      badge: "Adaptive",
      color: "bg-blue-500"
    },
    {
      icon: Zap,
      title: "Instant Quiz Generation",
      description: "Generate unlimited quizzes and flashcards from any document in seconds with AI precision.",
      badge: "Fast",
      color: "bg-green-500"
    },
    {
      icon: Languages,
      title: "Multilingual Support",
      description: "Study in multiple languages with automatic translation and regional educational standards.",
      badge: "Global",
      color: "bg-orange-500"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Detailed analytics and progress visualization to monitor your learning journey and achievements.",
      badge: "Analytics",
      color: "bg-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Interactive AI Tutor",
      description: "Get instant explanations and answers to your questions from our RAG-powered AI assistant.",
      badge: "Interactive",
      color: "bg-indigo-500"
    },
    {
      icon: FileSearch,
      title: "OCR Technology",
      description: "Extract text from handwritten notes and images with advanced optical character recognition.",
      badge: "OCR",
      color: "bg-cyan-500"
    },
    {
      icon: Clock,
      title: "Spaced Repetition",
      description: "Optimized review scheduling using proven spaced repetition algorithms for better retention.",
      badge: "Memory",
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Powerful Features</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your learning experience with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-muted/50 hover:border-primary/30">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg ${feature.color} bg-opacity-10`}>
                      <Icon className={`h-6 w-6 text-current`} style={{ color: feature.color.replace('bg-', '').replace('-500', '') }} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;