import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, FileText, Image, BookOpen, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files);
      setSelectedFiles(files);
      toast({
        title: "Files uploaded!",
        description: `${files.length} file(s) ready for processing.`,
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setSelectedFiles(files);
      toast({
        title: "Files selected!",
        description: `${files.length} file(s) ready for processing.`,
      });
    }
  };

  const generateStudyMaterials = () => {
    if (selectedFiles.length === 0) {
      toast({
        title: "No files selected",
        description: "Please upload some files first.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "AI Processing Started!",
      description: "Your study materials are being generated...",
    });
  };

  return (
    <section id="upload" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Upload Your Materials</h2>
            <p className="text-xl text-muted-foreground">
              Drag and drop your PDFs, notes, or images to get started
            </p>
          </div>

          <Card className="shadow-glow border-2 border-dashed border-primary/30">
            <CardContent className="p-8">
              <div
                className={`relative border-2 border-dashed rounded-lg p-12 transition-colors ${
                  dragActive 
                    ? "border-primary bg-primary/5" 
                    : "border-muted-foreground/25 hover:border-primary/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
                  onChange={handleFileSelect}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                <div className="text-center space-y-6">
                  <div className="flex justify-center">
                    <div className="p-4 rounded-full bg-primary/10">
                      <Upload className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Drop your files here
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      or click to browse your files
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Supports PDF, DOC, TXT, and image files
                    </p>
                  </div>

                  <div className="flex justify-center gap-4 pt-4">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="text-sm">PDFs</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50">
                      <Image className="h-4 w-4 text-primary" />
                      <span className="text-sm">Images</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/50">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span className="text-sm">Notes</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold">Selected Files:</h4>
                  <div className="space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <span className="font-medium">{file.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={generateStudyMaterials}
                    className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                    size="lg"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Study Materials
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;