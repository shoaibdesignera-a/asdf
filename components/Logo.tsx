
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative flex flex-col items-center">
        {/* Roof Graphic */}
        <div className="flex flex-col items-center -mb-2">
            <div className="w-16 h-1 border-t-4 border-gold transform -rotate-45 translate-x-3 translate-y-3"></div>
            <div className="w-16 h-1 border-t-4 border-gold transform rotate-45 -translate-x-3 translate-y-3"></div>
            <div className="w-6 h-6 border-2 border-gold flex items-center justify-center mt-1">
                 <div className="grid grid-cols-2 gap-0.5">
                    <div className="w-1.5 h-1.5 bg-gold"></div>
                    <div className="w-1.5 h-1.5 bg-gold"></div>
                    <div className="w-1.5 h-1.5 bg-gold"></div>
                    <div className="w-1.5 h-1.5 bg-gold"></div>
                 </div>
            </div>
        </div>
        
        {/* Text */}
        <h1 className="text-4xl font-bold tracking-tight leading-none text-white font-serif flex items-center">
          MM<span className="text-gold mx-1">&</span>GG
        </h1>
        
        <div className="w-full h-px bg-gold mt-1 mb-0.5"></div>
        
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white whitespace-nowrap">
          Real Estate and Property Ltd
        </p>
        <div className="w-full h-px bg-gold mt-0.5"></div>
      </div>
    </div>
  );
};

export default Logo;
