import { useState, useEffect } from 'react';

function Hero({ onNavigate }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax transforms
  const backgroundParallax = scrollY * 0.5;
  const contentParallax = scrollY * 0.3;
  const opacity = Math.max(1 - scrollY / 600, 0);

  return (
    <section className="relative w-full overflow-hidden h-[100vh] sm:min-h-[80vh] md:h-[85vh]">
      {/* Background layer with parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        data-alt="Misty green coffee plantation in the highlands of Araku valley"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeUSSCR5ZB2QRAaec3prSEDzaNJSDmGq2PiLwdwPRhySGmc18nOsIRKoGo51tODKI56ByEsvYegUa9PIGF02a4d0lPxUGLLqs7y19OpKyQrBiZbm4cIlSvVzUQFJh7qJCXQt9RWmm-lstX-C3j_Nxx1KNAj7j2UGD1MfQeSLy1u7aQmuMqpMAixMZrl5GQ9u3YQcXVmbtKFvfm8kN87Q6f-G2E4S9lz3qtp4CBMnKztxiJokAMVF7fUUahqaKJuQTf3V4hifp33LU")',
          transform: `translateY(${backgroundParallax}px)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content layer with parallax - Mobile-first spacing */}
      <div 
        className="relative flex h-full flex-col items-center justify-center px-5 sm:px-6 md:p-6 text-center"
        style={{
          transform: `translateY(${contentParallax}px)`,
          opacity: opacity,
        }}
      >
        <div className="max-w-3xl space-y-5 sm:space-y-4 md:space-y-6">
          <h1 
            className="text-white text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
            style={{
              transform: `translateY(${scrollY * -0.15}px)`,
            }}
          >
            Pure Origin. <br />
            <span className="text-primary">Tribal Heart.</span>
          </h1>
          <p 
            className="text-white/90 text-base leading-relaxed sm:text-lg md:text-xl font-light max-w-xl mx-auto px-2"
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
            }}
          >
            Discover the award-winning specialty coffee nurtured by the tribal farmers of the Araku highlands.
          </p>
          <div 
            className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center pt-4 sm:pt-2"
            style={{
              transform: `translateY(${scrollY * -0.05}px)`,
            }}
          >
            <button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold transition-all shadow-xl shadow-primary/20 text-base sm:text-sm md:text-base w-full sm:w-auto"
              onClick={() => onNavigate && onNavigate('shop')}
            >
              Shop the Collection
            </button>
            <button 
              className="bg-white/10 hover:bg-white/20 backdrop-blur text-white border-2 border-white/30 px-8 py-4 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg font-bold transition-all text-base sm:text-sm md:text-base w-full sm:w-auto"
              onClick={() => onNavigate && onNavigate('origin')}
            >
              Our Heritage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
