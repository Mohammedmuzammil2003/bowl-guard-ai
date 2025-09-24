import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { 
  Camera, 
  CameraOff, 
  Activity, 
  Target, 
  CheckCircle, 
  AlertTriangle,
  Zap
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LiveMetrics {
  currentElbowAngle: number;
  isLegal: boolean;
  frameRate: number;
  confidence: number;
}

const WebcamAnalysis = () => {
  const [isWebcamActive, setIsWebcamActive] = useState(false);
  const [liveMetrics, setLiveMetrics] = useState<LiveMetrics | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  const startWebcamAnalysis = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      setIsWebcamActive(true);
      
      // Simulate live metrics updates
      const metricsInterval = setInterval(() => {
        const angle = Math.random() * 20; // Random angle between 0-20
        setLiveMetrics({
          currentElbowAngle: parseFloat(angle.toFixed(1)),
          isLegal: angle <= 15,
          frameRate: 30,
          confidence: 0.85 + Math.random() * 0.15
        });
      }, 100);

      // Store interval for cleanup
      (window as any).metricsInterval = metricsInterval;
      
      toast({
        title: "Webcam analysis started",
        description: "Real-time bowling action analysis is now active",
      });
    } catch (error) {
      toast({
        title: "Webcam access denied",
        description: "Please allow camera access to use this feature",
        variant: "destructive",
      });
    }
  };

  const stopWebcamAnalysis = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    
    setIsWebcamActive(false);
    setLiveMetrics(null);
    
    // Clear metrics interval
    if ((window as any).metricsInterval) {
      clearInterval((window as any).metricsInterval);
    }
    
    toast({
      title: "Webcam analysis stopped",
      description: "Real-time analysis has been terminated",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">Real-Time Webcam Analysis</h1>
          <p className="text-xl text-muted-foreground">
            Live bowling action analysis with instant legality feedback
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Feed */}
          <div className="lg:col-span-2">
            <Card className="shadow-elegant h-fit">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-cricket-green" />
                    Live Video Feed
                  </div>
                  {isWebcamActive && (
                    <Badge variant="default" className="bg-success">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      LIVE
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="aspect-video bg-gradient-card rounded-lg overflow-hidden">
                    {isWebcamActive ? (
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <Camera className="h-16 w-16 mx-auto mb-4" />
                          <p className="text-lg">Click "Start Analysis" to begin</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Overlay with real-time metrics */}
                  {isWebcamActive && liveMetrics && (
                    <div className="absolute top-4 left-4 right-4">
                      <div className="flex justify-between items-start">
                        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                          <div className="text-sm opacity-75">Current Elbow Angle</div>
                          <div className="text-2xl font-bold">
                            {liveMetrics.currentElbowAngle}°
                          </div>
                        </div>
                        
                        <Badge 
                          variant={liveMetrics.isLegal ? "default" : "destructive"}
                          className="bg-black/70 backdrop-blur-sm"
                        >
                          {liveMetrics.isLegal ? "Legal ✅" : "Illegal ⚠️"}
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 flex justify-center">
                  {!isWebcamActive ? (
                    <EnhancedButton
                      variant="cricket"
                      size="lg"
                      onClick={startWebcamAnalysis}
                    >
                      <Camera className="h-5 w-5" />
                      Start Webcam Analysis
                    </EnhancedButton>
                  ) : (
                    <EnhancedButton
                      variant="destructive"
                      size="lg"
                      onClick={stopWebcamAnalysis}
                    >
                      <CameraOff className="h-5 w-5" />
                      Stop Analysis
                    </EnhancedButton>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Metrics Panel */}
          <div className="space-y-6">
            {/* Current Status */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-cricket-green" />
                  Live Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                {liveMetrics ? (
                  <div className="space-y-4">
                    <div className="text-center">
                      {liveMetrics.isLegal ? (
                        <CheckCircle className="h-12 w-12 mx-auto mb-2 text-success" />
                      ) : (
                        <AlertTriangle className="h-12 w-12 mx-auto mb-2 text-warning" />
                      )}
                      <div className="text-lg font-semibold">
                        {liveMetrics.isLegal ? "Legal Action" : "Illegal Action"}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Elbow Angle:</span>
                        <span className="font-bold text-cricket-green">
                          {liveMetrics.currentElbowAngle}°
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Frame Rate:</span>
                        <span className="font-medium">{liveMetrics.frameRate} fps</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span>Confidence:</span>
                        <span className="font-medium">
                          {(liveMetrics.confidence * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-muted-foreground py-8">
                    <Zap className="h-12 w-12 mx-auto mb-4" />
                    <p>Start analysis to see live metrics</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* ICC Guidelines */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-tech-blue" />
                  ICC Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <div className="bg-success/10 p-3 rounded-lg">
                    <div className="font-semibold text-success">Legal (≤ 15°)</div>
                    <p className="text-muted-foreground">
                      Elbow extension within ICC's allowed limit
                    </p>
                  </div>
                  
                  <div className="bg-warning/10 p-3 rounded-lg">
                    <div className="font-semibold text-warning">Illegal (&gt; 15°)</div>
                    <p className="text-muted-foreground">
                      Elbow extension exceeds ICC's 15° rule
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Quick Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Ensure good lighting for accurate detection</p>
                  <p>• Position camera at side angle to bowler</p>
                  <p>• Maintain stable camera position</p>
                  <p>• Bowl at normal pace for best results</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebcamAnalysis;