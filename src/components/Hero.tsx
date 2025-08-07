import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-gradient-soft opacity-50" />
      
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Ask Questions
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Anonymously
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Join live sessions, community talks, and group tasks without the fear of judgment. 
              Perfect for introverts who want to participate confidently.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Join a Session
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn How It Works
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="People asking questions anonymously" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;