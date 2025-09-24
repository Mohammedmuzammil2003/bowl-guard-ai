import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Target, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Activity
} from "lucide-react";
import cricketHeroBg from "@/assets/cricket-hero-bg.jpg";

const Reports = () => {
  // Mock data for demonstration
  const sessionStats = {
    totalDeliveries: 24,
    legalPercentage: 87.5,
    avgElbowAngle: 9.2,
    maxElbowAngle: 16.3,
    releaseConsistency: 92.1,
    sessionDuration: "45 mins"
  };

  const recentAnalysis = [
    { id: 1, type: "Video", date: "2024-09-24", result: "Legal", angle: 12.5, deliveries: 6 },
    { id: 2, type: "Live", date: "2024-09-23", result: "Illegal", angle: 16.8, deliveries: 8 },
    { id: 3, type: "Video", date: "2024-09-22", result: "Legal", angle: 11.2, deliveries: 4 },
    { id: 4, type: "Live", date: "2024-09-21", result: "Legal", angle: 9.8, deliveries: 6 },
  ];

  const trendData = [
    { session: 1, avgAngle: 11.5, consistency: 85 },
    { session: 2, avgAngle: 10.8, consistency: 88 },
    { session: 3, avgAngle: 9.5, consistency: 91 },
    { session: 4, avgAngle: 9.2, consistency: 92 },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(59, 130, 246, 0.8)), url(${cricketHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Reports & Insights
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto">
            Professional analytics dashboard for comprehensive bowling action analysis
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Key Metrics Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            <Card className="shadow-elegant">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-cricket-green">
                  {sessionStats.totalDeliveries}
                </div>
                <div className="text-sm text-muted-foreground">Total Deliveries</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-success">
                  {sessionStats.legalPercentage}%
                </div>
                <div className="text-sm text-muted-foreground">Legal Actions</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-tech-blue">
                  {sessionStats.avgElbowAngle}°
                </div>
                <div className="text-sm text-muted-foreground">Avg Elbow Angle</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-warning">
                  {sessionStats.maxElbowAngle}°
                </div>
                <div className="text-sm text-muted-foreground">Max Angle</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-cricket-green">
                  {sessionStats.releaseConsistency}%
                </div>
                <div className="text-sm text-muted-foreground">Consistency</div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-foreground">
                  {sessionStats.sessionDuration}
                </div>
                <div className="text-sm text-muted-foreground">Session Time</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Elbow Angle Trend Chart */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-cricket-green" />
                  Elbow Angle Progression
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trendData.map((data, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-cricket-green rounded-full flex items-center justify-center text-white text-sm font-bold">
                          {data.session}
                        </div>
                        <div>
                          <div className="font-medium">Session {data.session}</div>
                          <div className="text-sm text-muted-foreground">
                            Avg: {data.avgAngle}° | Consistency: {data.consistency}%
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={data.avgAngle <= 15 ? "default" : "destructive"}>
                          {data.avgAngle <= 15 ? "Legal" : "Illegal"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Performance Breakdown */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-tech-blue" />
                  Performance Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Legal Deliveries</span>
                      <span className="font-medium">{sessionStats.legalPercentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-success h-3 rounded-full transition-all duration-500"
                        style={{ width: `${sessionStats.legalPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Release Consistency</span>
                      <span className="font-medium">{sessionStats.releaseConsistency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-cricket-green h-3 rounded-full transition-all duration-500"
                        style={{ width: `${sessionStats.releaseConsistency}%` }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Angle Control (vs 15° limit)</span>
                      <span className="font-medium">
                        {((15 - sessionStats.avgElbowAngle) / 15 * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className="bg-tech-blue h-3 rounded-full transition-all duration-500"
                        style={{ width: `${(15 - sessionStats.avgElbowAngle) / 15 * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Analysis History */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-cricket-green" />
                Recent Analysis History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentAnalysis.map((analysis) => (
                  <div key={analysis.id} className="flex items-center justify-between p-4 bg-gradient-card rounded-lg hover:shadow-elegant transition-smooth">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-cricket-green rounded-full flex items-center justify-center">
                        {analysis.type === "Video" ? (
                          <Target className="h-5 w-5 text-white" />
                        ) : (
                          <Activity className="h-5 w-5 text-white" />
                        )}
                      </div>
                      
                      <div>
                        <div className="font-medium">
                          {analysis.type} Analysis - {analysis.deliveries} deliveries
                        </div>
                        <div className="text-sm text-muted-foreground">{analysis.date}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium">{analysis.angle}°</div>
                        <div className="text-sm text-muted-foreground">Max angle</div>
                      </div>
                      
                      <Badge variant={analysis.result === "Legal" ? "default" : "destructive"}>
                        {analysis.result === "Legal" ? (
                          <CheckCircle className="h-3 w-3 mr-1" />
                        ) : (
                          <AlertTriangle className="h-3 w-3 mr-1" />
                        )}
                        {analysis.result}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ICC Compliance Summary */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-tech-blue" />
                ICC Compliance Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-success/10 rounded-lg">
                  <CheckCircle className="h-12 w-12 mx-auto mb-4 text-success" />
                  <div className="text-2xl font-bold text-success">
                    {Math.round(sessionStats.legalPercentage)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Legal Deliveries</div>
                </div>

                <div className="text-center p-6 bg-warning/10 rounded-lg">
                  <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-warning" />
                  <div className="text-2xl font-bold text-warning">
                    {100 - Math.round(sessionStats.legalPercentage)}%
                  </div>
                  <div className="text-sm text-muted-foreground">Needs Improvement</div>
                </div>

                <div className="text-center p-6 bg-cricket-green/10 rounded-lg">
                  <Activity className="h-12 w-12 mx-auto mb-4 text-cricket-green" />
                  <div className="text-2xl font-bold text-cricket-green">
                    {sessionStats.avgElbowAngle}°
                  </div>
                  <div className="text-sm text-muted-foreground">Average Extension</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;