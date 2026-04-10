import React from 'react';
import { useStateContext } from '../context/ContextProvider';

const Loader = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden bg-white/20 backdrop-blur-md dark:bg-black/20">
      <div className="relative flex items-center justify-center">
        {/* Main outer ring */}
        <div 
          className="absolute h-32 w-32 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full opacity-20"
          style={{ backgroundColor: currentColor }}
        ></div>
        
        {/* Pulsing circle center */}
        <div 
          className="relative h-20 w-20 animate-pulse rounded-full shadow-lg transition-transform duration-500 hover:scale-110"
          style={{ backgroundColor: currentColor }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
             <svg className="h-10 w-10 animate-spin text-white opacity-90" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        </div>
        
        {/* Orbiting dots */}
        <div className="absolute h-40 w-40 animate-[spin_3s_linear_infinite]">
          <div 
            className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full shadow-md"
            style={{ backgroundColor: currentColor }}
          ></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <p className="text-xl font-bold tracking-widest text-gray-800 dark:text-gray-100 uppercase">
          Loading
        </p>
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="h-1.5 w-1.5 animate-bounce rounded-full"
              style={{ 
                backgroundColor: currentColor,
                animationDelay: `${i * 0.15}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;
