import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">TemplatesHub</h3>
            <p className="text-gray-400">
              Beautiful and modern landing page templates for your next project.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#templates" className="text-gray-400 hover:text-white transition-colors">Templates</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} TemplatesHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;