import React from 'react';

export const RealSunflowerBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      
      {/* 
        Note: To achieve the "transparent PNG" look without reliable transparent assets, 
        we use photos of sunflowers with black backgrounds and apply 'mix-blend-screen'.
        This makes the black transparent, blending the flower seamlessly into the charcoal site background.
      */}

      {/* Top Right - Large hanging */}
      <div className="absolute -top-[5%] -right-[5%] w-[400px] md:w-[600px] opacity-40 animate-sway-slow mix-blend-screen">
        <img 
          src="https://images.unsplash.com/photo-1543158097-f64fb51296c0?q=80&w=1000&auto=format&fit=crop" 
          alt="Sunflower Decor"
          className="w-full h-full object-cover transform rotate-180 scale-x-[-1]"
        />
      </div>

      {/* Bottom Left - Rising */}
      <div className="absolute -bottom-[10%] -left-[10%] w-[350px] md:w-[500px] opacity-30 animate-sway-medium mix-blend-screen">
        <img 
          src="https://images.unsplash.com/photo-1543158097-f64fb51296c0?q=80&w=1000&auto=format&fit=crop" 
          alt="Sunflower Decor"
          className="w-full h-full object-cover transform rotate-12"
        />
      </div>

      {/* Middle Right - Floating */}
      <div className="absolute top-[40%] -right-[15%] md:right-[-5%] w-[300px] opacity-20 animate-float mix-blend-screen">
         <img 
          src="https://images.unsplash.com/photo-1622325327857-4188fa632db2?q=80&w=800&auto=format&fit=crop" 
          alt="Sunflower Detail"
          className="w-full h-full object-cover mask-image-radial"
        />
      </div>

      {/* Middle Left - Floating small */}
      <div className="absolute top-[20%] -left-[10%] md:left-[5%] w-[250px] opacity-25 animate-sway-slower mix-blend-screen">
         <img 
          src="https://images.unsplash.com/photo-1621245749721-e00f959c9a62?q=80&w=800&auto=format&fit=crop" 
          alt="Sunflower Small"
          className="w-full h-full object-cover transform -rotate-45"
        />
      </div>

      {/* Extra floating petals/flowers */}
      <div className="hidden md:block absolute bottom-[20%] right-[20%] w-[150px] opacity-15 animate-float mix-blend-screen animation-delay-2000">
         <img 
          src="https://images.unsplash.com/photo-1543158097-f64fb51296c0?q=80&w=600&auto=format&fit=crop" 
          alt="Sunflower Tiny"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
};