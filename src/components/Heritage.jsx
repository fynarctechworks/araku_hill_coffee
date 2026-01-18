import { useState, useEffect, useRef } from 'react';

function Heritage({ onNavigate }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on when section enters and leaves viewport
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax values based on scroll progress
  const imageParallax = scrollProgress * 80 - 40;
  const quoteParallax = scrollProgress * 60 - 30;
  const textParallax = scrollProgress * 40 - 20;

  return (
    <section ref={sectionRef} className="bg-[#f2ebd1] py-16 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-4 md:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div 
              className="rounded-xl overflow-hidden"
              style={{
                transform: `translateY(${imageParallax}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <img 
                alt="Tribal woman working in a forest coffee garden" 
                className="w-full h-auto object-cover" 
                data-alt="Tribal person tending to coffee plants in a forest"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQp3YXzgWqa1gKFlITNcez4aVXo8D_IeaNV-AaBBcd2d5y9_GHqTgti3Qw8_KlC-GVdj1tJx8ejWkUmgCLh2yOpLAlDx1i6Xb8Ar9skUANSQUQXTxGhZJhnDWcRKEVg-ad8HwbfKOWZmtTayKoQjMtjhzQLVlZODw3mJ75wiXApXR6l5yWVYipJAuhTK7ya7At8lJUYrHLJnvHrq7pggvhFogeV5t_Rxdm8Vu5_ZCDaQWs2M6wkHcY-RaMcW3J8OKEvMYNu-JmZOE"
              />
            </div>
            {/* Orange quote box with parallax - Mobile-first positioning */}
            <div 
              className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-primary text-white p-5 sm:p-6 rounded-lg max-w-[280px] sm:max-w-[280px] shadow-2xl"
              style={{
                transform: `translateY(${quoteParallax}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              <p className="text-sm sm:text-sm font-medium leading-relaxed italic">
                "Our coffee doesn't just grow; it belongs to the forest, and the forest belongs to us."
              </p>
              <p className="mt-3 text-xs font-bold uppercase tracking-widest">— Tribal Elder</p>
            </div>
          </div>
          <div 
            className="space-y-5 sm:space-y-4 md:space-y-6 order-1 lg:order-2"
            style={{
              transform: `translateY(${textParallax}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm sm:text-xs md:text-sm">Our Roots</h2>
            <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1b140d] leading-tight">
              Preserving Heritage, Cultivating Future
            </h3>
            <p className="text-base sm:text-sm md:text-base text-[#6b5d52] leading-relaxed">
              For generations, the tribal families of the Araku Valley have lived in symbiotic balance with their environment. We didn't bring coffee to them; they showed us how coffee can thrive in a polyculture forest environment.
            </p>
            <p className="text-base sm:text-sm md:text-base text-[#6b5d52] leading-relaxed">
              By working directly with over 10,000 farmers, we ensure fair prices and invest back into the infrastructure, education, and health of the valley community.
            </p>
            <button 
              onClick={() => onNavigate && onNavigate('about')}
              className="flex items-center gap-3 sm:gap-2 md:gap-3 font-bold text-[#1b140d] hover:text-primary transition-colors text-base sm:text-sm md:text-base underline cursor-pointer pt-2"
            >
              Discover Our Farmer Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Heritage;
