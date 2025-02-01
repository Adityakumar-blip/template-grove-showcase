import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background/50 backdrop-blur-xl border-b border-white/10 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-gradient">
                Console.log
              </span>
            </a>
          </div>

          {/* <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:bg-white/10" asChild>
              <a href="#templates">Templates</a>
            </Button>
            <Button variant="ghost" className="text-foreground hover:bg-white/10" asChild>
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" className="text-foreground hover:bg-white/10" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div> */}

          {/* <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-foreground">
              <Menu className="h-6 w-6" />
            </Button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
