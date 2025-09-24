import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { 
  Users, 
  Phone, 
  Mail, 
  Github, 
  LinkedinIcon,
  User,
  GraduationCap
} from "lucide-react";
import cricketHeroBg from "@/assets/cricket-hero-bg.jpg";

const Contact = () => {
  const teamMembers = [
    {
      name: "Mohammed Muzammil",
      phone: "6363928976"
    },
    {
      name: "Shaz Hani",
      phone: "7625015979"
    },
    {
      name: "Amaan Ebrahim",
      phone: "9137283330"
    },
    {
      name: "Afrid KA",
      phone: "8660198269"
    }
  ];

  const projectDetails = {
    institution: "Engineering College",
    course: "Computer Science & Engineering",
    year: "Final Year (2024-25)",
    category: "Major Project"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            Contact Our Team
          </h1>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto">
            Get in touch with the CricketAI development team for inquiries, support, or collaboration
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Project Information */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GraduationCap className="h-6 w-6 text-cricket-green" />
                Project Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm">Institution</Badge>
                    <span className="font-medium">{projectDetails.institution}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm">Course</Badge>
                    <span className="font-medium">{projectDetails.course}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm">Academic Year</Badge>
                    <span className="font-medium">{projectDetails.year}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="text-sm">Category</Badge>
                    <span className="font-medium">{projectDetails.category}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team Members */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold mb-4">Development Team</h2>
              <p className="text-lg text-muted-foreground">
                Meet the dedicated team behind CricketAI Bowling Action Validator
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="shadow-elegant hover:shadow-cricket transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <a 
                          href={`tel:${member.phone}`}
                          className="text-tech-blue hover:underline font-medium"
                        >
                          {member.phone}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Contact */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-cricket-green" />
                  Quick Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For immediate assistance or project inquiries, reach out to any team member directly:
                </p>
                
                <div className="space-y-3">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gradient-card rounded-lg">
                      <span className="font-medium">{member.name}</span>
                      <EnhancedButton variant="outline" size="sm" asChild>
                        <a href={`tel:${member.phone}`}>
                          <Phone className="h-4 w-4" />
                          Call
                        </a>
                      </EnhancedButton>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Support */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-tech-blue" />
                  Project Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Questions about the project, technology stack, or collaboration opportunities?
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-cricket-green/10 rounded-lg">
                    <Mail className="h-5 w-5 text-cricket-green mt-1" />
                    <div>
                      <div className="font-medium">Project Inquiries</div>
                      <div className="text-sm text-muted-foreground">
                        Contact Shaz Hani for project-related questions
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="shadow-elegant bg-gradient-hero text-white">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Interested in Our Project?
              </h3>
              <p className="text-lg opacity-95 mb-6 max-w-2xl mx-auto">
                We're passionate about advancing cricket technology through AI. 
                Whether you're an educator, researcher, or cricket enthusiast, we'd love to connect!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <EnhancedButton variant="secondary" size="lg" asChild>
                  <a href="tel:6363928976">
                    <Phone className="h-5 w-5" />
                    Call Project Lead
                  </a>
                </EnhancedButton>
                <EnhancedButton variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                  <Mail className="h-5 w-5" />
                  Email Team
                </EnhancedButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;