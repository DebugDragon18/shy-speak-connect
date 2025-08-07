const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Shy Talk
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering introverts to participate, learn, and grow through anonymous engagement.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Sessions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">Live Sessions</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Community Talks</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Group Tasks</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Office Hours</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-smooth">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Success Stories</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Newsletter</a></li>
              <li><a href="#" className="hover:text-accent transition-smooth">Resources</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Shy Talk. All rights reserved. Built for introverts, by people who understand.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;