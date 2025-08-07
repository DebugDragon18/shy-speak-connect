import { Card } from "@/components/ui/card";
import liveSessionsIcon from "@/assets/live-sessions-icon.png";
import communityIcon from "@/assets/community-icon.png";
import groupTasksIcon from "@/assets/group-tasks-icon.png";
import officeHoursIcon from "@/assets/office-hours-icon.png";

const Features = () => {
  const features = [
    {
      icon: liveSessionsIcon,
      title: "Live Sessions",
      description: "Join interactive online sessions where you can ask questions anonymously in real-time.",
      details: "Perfect for introverts who want to participate without revealing their identity."
    },
    {
      icon: communityIcon,
      title: "Community Talks",
      description: "Engage in group discussions and community conversations at your own pace.",
      details: "Share thoughts and questions in a supportive, judgment-free environment."
    },
    {
      icon: groupTasksIcon,
      title: "Group Tasks",
      description: "Collaborate on projects and assignments while maintaining your anonymity.",
      details: "Work together effectively without social pressure or anxiety."
    },
    {
      icon: officeHoursIcon,
      title: "Office Hours",
      description: "Get direct access to mentors who can see and respond to your questions live.",
      details: "Receive personalized guidance while staying completely anonymous."
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Perfect for 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Introverts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four different ways to participate, learn, and grow in a comfortable environment 
            designed specifically for shy and introverted individuals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 text-center hover:shadow-glow transition-smooth group hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-accent-soft p-4 group-hover:bg-gradient-primary transition-smooth">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100"
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              <p className="text-sm text-accent font-medium">
                {feature.details}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;