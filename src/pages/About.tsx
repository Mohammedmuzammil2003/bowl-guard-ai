import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Brain, 
  Activity, 
  Users, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  Award
} from "lucide-react";
import cricketHeroBg from "@/assets/cricket-hero-bg.jpg";

const About = () => {
  const technologies = [
    {
      name: "MediaPipe Pose",
      description: "Google's machine learning framework for pose estimation",
      icon: Activity
    },
    {
      name: "Deep Learning",
      description: "Neural networks trained on cricket bowling datasets",
      icon: Brain
    },
    {
      name: "Computer Vision",
      description: "Real-time video processing and analysis",
      icon: Target
    },
    {
      name: "Flask/Streamlit",
      description: "Python backend for AI model deployment",
      icon: Zap
    }
  ];

  const features = [
    {
      title: "Real-time Analysis",
      description: "Instant feedback on bowling action legality during live sessions",
      icon: Activity,
      color: "text-cricket-green"
    },
    {
      title: "Video Processing",
      description: "Upload and analyze bowling videos with frame-by-frame breakdown",
      icon: Target,
      color: "text-tech-blue"
    },
    {
      title: "ICC Compliance",
      description: "Validates against official 15° elbow extension rule",
      icon: Award,
      color: "text-warning"
    },
    {
      title: "Professional Reports",
      description: "Detailed analytics with downloadable PDF and CSV reports",
      icon: CheckCircle,
      color: "text-success"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(59, 130, 246, 0.8)), url(${cricketHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-preference'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            About CricketAI Project
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-3xl mx-auto">
            Revolutionizing cricket coaching and officiating through advanced AI and computer vision technology
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-12">

          {/* Problem Statement */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="h-6 w-6 text-warning" />
                The Problem: Illegal Bowling Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Cricket has long struggled with the issue of illegal bowling actions, commonly known as "chucking." 
                This occurs when a bowler's elbow extends beyond the ICC's permitted 15° limit during delivery, 
                giving them an unfair advantage and potentially compromising the integrity of the game.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-warning/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-warning mb-3">Traditional Challenges</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Subjective human judgment in real-time</li>
                    <li>• Difficulty in measuring precise angles</li>
                    <li>• Inconsistent officiating standards</li>
                    <li>• Limited coaching feedback tools</li>
                  </ul>
                </div>
                
                <div className="bg-cricket-green/10 p-6 rounded-lg">
                  <h3 className="font-semibold text-cricket-green mb-3">Our AI Solution</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Objective, data-driven analysis</li>
                    <li>• Precise elbow angle measurements</li>
                    <li>• Consistent ICC rule application</li>
                    <li>• Real-time coaching insights</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ICC Rule Explanation */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Award className="h-6 w-6 text-tech-blue" />
                ICC 15° Elbow Extension Rule
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    The International Cricket Council (ICC) established the 15° rule to maintain fairness in cricket. 
                    This regulation states that a bowler's elbow joint may not extend more than 15 degrees between 
                    the point where the bowling arm reaches horizontal and the point of ball release.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                      <span><strong>Legal (≤ 15°):</strong> Fair bowling action within ICC guidelines</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-destructive/10 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0" />
                      <span><strong>Illegal (&gt; 15°):</strong> Exceeds permitted extension, requires correction</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-card p-6 rounded-lg text-center">
                  <div className="text-6xl font-bold text-cricket-green mb-2">15°</div>
                  <div className="text-lg font-semibold mb-2">Maximum Allowed</div>
                  <div className="text-sm text-muted-foreground">
                    Elbow extension from horizontal arm position to ball release
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How AI Helps */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Brain className="h-6 w-6 text-cricket-green" />
                How Deep Learning & Pose Estimation Help
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-tech-blue" />
                      MediaPipe Pose Detection
                    </h3>
                    <p className="leading-relaxed">
                      Our system uses Google's MediaPipe framework to identify 33 key body landmarks in real-time. 
                      This provides precise tracking of the bowler's arm, elbow, and shoulder positions throughout 
                      the delivery stride.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-cricket-green" />
                      Precise Angle Calculation
                    </h3>
                    <p className="leading-relaxed">
                      Advanced trigonometric algorithms calculate the exact elbow extension angle by analyzing 
                      the relationship between shoulder, elbow, and wrist positions at critical delivery phases.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Brain className="h-5 w-5 text-warning" />
                      Deep Learning Analysis
                    </h3>
                    <p className="leading-relaxed">
                      Neural networks trained on extensive cricket bowling datasets provide context-aware analysis, 
                      distinguishing between different bowling styles and identifying patterns that indicate 
                      illegal actions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-tech-blue" />
                      Real-time Processing
                    </h3>
                    <p className="leading-relaxed">
                      Optimized algorithms enable instant analysis at 30fps, providing immediate feedback for 
                      live coaching sessions and real-time match officiating support.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technology Stack */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6 text-tech-blue" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-card rounded-lg hover:shadow-elegant transition-smooth">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-cricket rounded-full flex items-center justify-center">
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{tech.name}</h3>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-cricket-green" />
                Key Features & Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-card rounded-lg">
                    <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact & Applications */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-cricket-green" />
                Impact & Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-cricket-green/10 rounded-lg">
                  <Users className="h-12 w-12 mx-auto mb-4 text-cricket-green" />
                  <h3 className="font-semibold text-lg mb-2">Cricket Coaching</h3>
                  <p className="text-sm text-muted-foreground">
                    Coaches can provide objective feedback and help bowlers improve their technique with data-driven insights
                  </p>
                </div>
                
                <div className="text-center p-6 bg-tech-blue/10 rounded-lg">
                  <Award className="h-12 w-12 mx-auto mb-4 text-tech-blue" />
                  <h3 className="font-semibold text-lg mb-2">Match Officiating</h3>
                  <p className="text-sm text-muted-foreground">
                    Umpires and match officials can make more informed decisions with AI-assisted analysis tools
                  </p>
                </div>
                
                <div className="text-center p-6 bg-warning/10 rounded-lg">
                  <Activity className="h-12 w-12 mx-auto mb-4 text-warning" />
                  <h3 className="font-semibold text-lg mb-2">Player Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Young cricketers can develop proper technique early and avoid developing illegal bowling habits
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Goals */}
          <Card className="shadow-elegant">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-heading font-bold">Project Mission</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  To revolutionize cricket through innovative AI technology, ensuring fair play, improving player development, 
                  and supporting coaches and officials with objective, data-driven analysis tools that uphold the integrity 
                  and spirit of the game.
                </p>
                <div className="flex justify-center">
                  <Badge variant="default" className="text-lg px-6 py-2 bg-gradient-cricket">
                    Final Year Engineering Project
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;