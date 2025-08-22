import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Brain, 
  Play, 
  CheckCircle2, 
  Clock,
  TrendingUp
} from "lucide-react";

const StudyMaterials = () => {
  const studyItems = [
    {
      title: "Physics Chapter 5: Thermodynamics",
      type: "Flashcards",
      progress: 75,
      questions: 24,
      completed: 18,
      difficulty: "Medium",
      timeSpent: "45 min",
      accuracy: 89
    },
    {
      title: "Organic Chemistry Reactions",
      type: "Quiz",
      progress: 60,
      questions: 15,
      completed: 9,
      difficulty: "Hard",
      timeSpent: "32 min",
      accuracy: 94
    },
    {
      title: "Biology: Cell Structure",
      type: "Study Guide",
      progress: 100,
      questions: 30,
      completed: 30,
      difficulty: "Easy",
      timeSpent: "28 min",
      accuracy: 96
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Flashcards": return BookOpen;
      case "Quiz": return Brain;
      case "Study Guide": return CheckCircle2;
      default: return BookOpen;
    }
  };

  return (
    <section className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold">Your Study Materials</h2>
          <p className="text-xl text-muted-foreground">
            AI-generated content tailored to your learning progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {studyItems.map((item, index) => {
            const TypeIcon = getTypeIcon(item.type);
            return (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-white/50 backdrop-blur-sm">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <TypeIcon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge className={getDifficultyColor(item.difficulty)}>
                      {item.difficulty}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors mb-2">
                      {item.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-sm">
                      {item.type}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{item.completed}/{item.questions}</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{item.timeSpent}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                      <span>{item.accuracy}%</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity group"
                    disabled={item.progress === 100}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {item.progress === 100 ? "Completed" : "Continue"}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="bg-white/50 backdrop-blur-sm">
            View All Materials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterials;