import { Brain } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">StudyGenie</h3>
            </div>
            <p className="text-secondary-foreground/80 text-sm">
              Transform your learning with AI-powered study materials, 
              personalized quizzes, and intelligent tutoring.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>AI Study Generation</li>
              <li>Interactive Flashcards</li>
              <li>Smart Quizzes</li>
              <li>Progress Tracking</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Tutorials</li>
              <li>Community</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © 2024 StudyGenie. All rights reserved. Powered by AI for better learning.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;