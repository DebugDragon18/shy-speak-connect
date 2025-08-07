import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Session",
      description: "Browse available live sessions, community talks, or office hours that interest you.",
      color: "from-primary to-primary-glow"
    },
    {
      number: "02", 
      title: "Join Anonymously",
      description: "Enter the session without revealing your identity. Your questions remain completely private.",
      color: "from-accent to-primary"
    },
    {
      number: "03",
      title: "Ask Questions",
      description: "Submit your questions in real-time. Mentors and facilitators will see and respond immediately.",
      color: "from-primary-glow to-accent"
    },
    {
      number: "04",
      title: "Learn & Grow",
      description: "Get answers, insights, and support in a safe environment designed for introverted learners.",
      color: "from-accent to-primary-glow"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How Shy Talk 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, safe, and designed specifically for introverts who want to participate 
            without the anxiety of traditional classroom or meeting environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="p-8 text-center relative overflow-hidden group hover:shadow-glow transition-smooth bg-card/50 backdrop-blur-sm border-border/50"
            >
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-smooth">
                <div className={`w-full h-full bg-gradient-to-br ${step.color}`} />
              </div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${step.color} text-white font-bold text-xl mb-6 shadow-soft`}>
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-12 py-6">
            Start Your First Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;