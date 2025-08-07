import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-12 text-center bg-card/90 backdrop-blur-sm border-border/50 shadow-glow">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Ask Questions
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Without Fear?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of introverts who have found their voice through anonymous participation. 
            Your first session is completely free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-12 py-6">
              Join Your First Session
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-12 py-6">
              Browse Sessions
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
              100% Anonymous
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
              Safe Environment
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-primary-glow rounded-full mr-2"></div>
              Expert Mentors
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;