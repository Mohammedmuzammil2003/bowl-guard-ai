import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Activity, Video, Camera, BarChart3, Users, Target } from "lucide-react";
import cricketHeroBg from "@/assets/cricket-hero-bg.jpg";
import bowlingAnalysisIcon from "@/assets/bowling-analysis-icon.jpg";

const Home = () => {
  const features = [
    {
      icon: Video,
      title: "Video Analysis",
      description: "Upload bowling videos for comprehensive elbow angle analysis",
      path: "/video-analysis"
    },
    {
      icon: Camera,
      title: "Real-Time Analysis",
      description: "Live webcam analysis with instant legality feedback",
      path: "/webcam-analysis"
    },
    {
      icon: BarChart3,
      title: "Reports & Insights",
      description: "Professional analytics dashboard with detailed metrics",
      path: "/reports"
    }
  ];

  const stats = [
    { value: "15°", label: "ICC Elbow Extension Rule" },
    { value: "±0.5°", label: "Analysis Accuracy" },
    { value: "30fps", label: "Real-time Processing" },
    { value: "99%", label: "Detection Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(59, 130, 246, 0.8)), url(${cricketHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Activity className="h-16 w-16 mx-auto mb-4 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              CricketAI
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                Bowling Action Validator
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 leading-relaxed">
              AI-powered validation of cricket bowling actions based on ICC's 15° rule using advanced pose estimation and deep learning
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/video-analysis">
                <EnhancedButton variant="hero" size="xl" className="w-full sm:w-auto">
                  <Video className="h-6 w-6" />
                  Upload Bowling Video
                </EnhancedButton>
              </Link>
              
              <Link to="/webcam-analysis">
                <EnhancedButton variant="tech" size="xl" className="w-full sm:w-auto">
                  <Camera className="h-6 w-6" />
                  Start Live Analysis
                </EnhancedButton>
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              Professional Cricket Analysis
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI technology meets cricket expertise to ensure fair play and technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Link key={index} to={feature.path}>
                <Card className="h-full hover:shadow-elegant transition-smooth hover:scale-105 cursor-pointer bg-gradient-card border-0">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-cricket rounded-full flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Technology Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-heading font-bold mb-6">
                Cutting-Edge Technology
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-cricket-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">MediaPipe Pose Estimation</h4>
                    <p className="text-muted-foreground">Real-time pose detection with 33 landmark points for precise biomechanical analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="h-6 w-6 text-tech-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Deep Learning Analytics</h4>
                    <p className="text-muted-foreground">Advanced neural networks trained on professional bowling action datasets</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-cricket-green flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">ICC Compliance</h4>
                    <p className="text-muted-foreground">Validates against official 15° elbow extension rule with professional accuracy</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img 
                src={bowlingAnalysisIcon} 
                alt="Bowling Analysis Technology"
                className="max-w-full h-auto rounded-lg shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;