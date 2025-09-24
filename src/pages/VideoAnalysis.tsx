import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Upload, 
  Play, 
  CheckCircle, 
  AlertTriangle, 
  Download, 
  BarChart3,
  Clock,
  Target,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  highestElbowAngle: number;
  averageExtension: number;
  releasePointConsistency: number;
  isLegal: boolean;
  frameAnalysis: {
    armHorizontal: string;
    releasePoint: string;
  };
  metrics: {
    totalDeliveries: number;
    legalPercentage: number;
    avgElbowAngle: number;
    maxElbowAngle: number;
  };
}

const VideoAnalysis = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [results, setResults] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('video/')) {
        setSelectedFile(file);
        setResults(null);
        toast({
          title: "Video uploaded successfully",
          description: `Selected: ${file.name}`,
        });
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a video file (MP4, AVI, MOV)",
          variant: "destructive",
        });
      }
    }
  };

  const handleAnalysis = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulate analysis progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + Math.random() * 10;
      });
    }, 500);

    try {
      // Simulate API call to backend
      const formData = new FormData();
      formData.append('video', selectedFile);

      // Mock API call - replace with actual backend endpoint
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Mock results
      const mockResults: AnalysisResult = {
        highestElbowAngle: 12.5,
        averageExtension: 8.2,
        releasePointConsistency: 94.5,
        isLegal: true,
        frameAnalysis: {
          armHorizontal: "frame_001.jpg",
          releasePoint: "frame_045.jpg"
        },
        metrics: {
          totalDeliveries: 6,
          legalPercentage: 100,
          avgElbowAngle: 8.2,
          maxElbowAngle: 12.5
        }
      };

      setResults(mockResults);
      setAnalysisProgress(100);
      
      toast({
        title: "Analysis complete!",
        description: `Video processed successfully. Result: ${mockResults.isLegal ? 'Legal' : 'Illegal'} bowling action.`,
      });

    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "Please try again or check your internet connection.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
      clearInterval(progressInterval);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">Video Analysis</h1>
          <p className="text-xl text-muted-foreground">
            Upload your bowling video for comprehensive elbow angle analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-cricket-green" />
                  Upload Bowling Video
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-cricket-green transition-smooth">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <div className="space-y-2">
                    <p className="font-medium">Choose video file</p>
                    <p className="text-sm text-muted-foreground">
                      Supports MP4, AVI, MOV (max 100MB)
                    </p>
                  </div>
                  <Input
                    type="file"
                    accept="video/*"
                    onChange={handleFileUpload}
                    className="mt-4"
                  />
                </div>

                {selectedFile && (
                  <div className="bg-cricket-green-light/10 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Selected File:</span>
                      <Badge variant="secondary">{selectedFile.type}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{selectedFile.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                )}

                <EnhancedButton
                  variant="cricket"
                  size="lg"
                  onClick={handleAnalysis}
                  disabled={!selectedFile || isAnalyzing}
                  className="w-full"
                >
                  {isAnalyzing ? (
                    <>
                      <Activity className="h-5 w-5 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Play className="h-5 w-5" />
                      Start Analysis
                    </>
                  )}
                </EnhancedButton>

                {isAnalyzing && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Analysis Progress</span>
                      <span>{Math.round(analysisProgress)}%</span>
                    </div>
                    <Progress value={analysisProgress} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {results ? (
              <>
                {/* Main Result */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {results.isLegal ? (
                        <CheckCircle className="h-5 w-5 text-success" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-warning" />
                      )}
                      Analysis Result
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <Badge 
                        variant={results.isLegal ? "default" : "destructive"}
                        className="text-lg px-4 py-2"
                      >
                        {results.isLegal ? "Legal ✅" : "Illegal ⚠️"}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-gradient-card rounded-lg">
                        <div className="text-2xl font-bold text-cricket-green">
                          {results.highestElbowAngle}°
                        </div>
                        <div className="text-sm text-muted-foreground">Highest Elbow Angle</div>
                      </div>
                      
                      <div className="text-center p-4 bg-gradient-card rounded-lg">
                        <div className="text-2xl font-bold text-tech-blue">
                          {results.averageExtension}°
                        </div>
                        <div className="text-sm text-muted-foreground">Average Extension</div>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          <Target className="h-4 w-4" />
                          Release Consistency
                        </span>
                        <span className="font-medium">{results.releasePointConsistency}%</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4" />
                          Total Deliveries
                        </span>
                        <span className="font-medium">{results.metrics.totalDeliveries}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Frames */}
                <Card className="shadow-elegant">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-cricket-green" />
                      Key Frame Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="w-full h-32 bg-gradient-card rounded-lg flex items-center justify-center mb-2">
                          <Activity className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-medium">Arm Horizontal</p>
                        <p className="text-xs text-muted-foreground">Critical measurement point</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-full h-32 bg-gradient-card rounded-lg flex items-center justify-center mb-2">
                          <Target className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-medium">Release Point</p>
                        <p className="text-xs text-muted-foreground">Ball release analysis</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Download Options */}
                <Card className="shadow-elegant">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <EnhancedButton variant="tech" className="w-full">
                        <Download className="h-4 w-4" />
                        Download CSV
                      </EnhancedButton>
                      
                      <EnhancedButton variant="outline" className="w-full">
                        <Download className="h-4 w-4" />
                        Download PDF Report
                      </EnhancedButton>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <div className="text-center text-muted-foreground">
                    <Upload className="h-12 w-12 mx-auto mb-4" />
                    <p>Upload a video to see analysis results</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoAnalysis;