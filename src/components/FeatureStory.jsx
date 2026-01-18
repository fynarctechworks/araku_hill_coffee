import { useState, useEffect, useRef } from 'react';

function FeatureStory() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerParallax = scrollProgress * 50 - 25;

  const features = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnIcijvkZWHQOmeJ4RIWphLnecWaIbyWSZ4DlhluRZpJnSEIjV2_qyuExU_7FGmcQvG5_DompX8LL0JZezC28Ui0ElB8oMz2NONgpkvmqI-Bo_q6rjEduFS0Vop_VzZoURNi2trYfFR_6x_SJjNuPwldhQPXlokP4E9QMgH2cJMJRo1P-10r-xQn0zzLnvnulD21zQvXcvRRr5Bv7WMwbDRtfp2c4aBcssP67DrZRf5vJqUWe5zu116jp0E5U08iYdlThcVjGIDLs",
      alt: "Close up of lush green coffee berries on a branch",
      title: "Nurtured by Nature",
      description: "Grown in the biodiverse highlands of the Araku Valley by indigenous tribal farmers using traditional methods."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfqY2KKUtbFSSridPYPl5LLy1qlk-8_YIo12qyD-n_VtfKsNpGQw5mOlfy1RUZEUTcPJ-_u-fq3FJf_KuaDideZVYZU-J0nre91WHmQiDdBfDAk1TB5qUHPuK_kRqkb9D29UcwYVWyC4Os6b9r0u2AD_67HZhwZnTko-ohqymMFwDzcTe48Agf3AFPvtw5PKXfM5lbsPadRfXpQtumFMM9LboPgUbFYaJ-FOLwAJxk6gmIk9kS89MsS8mwPY7REt5kgO1nQRLyAJ4",
      alt: "Small batch coffee beans roasting in a machine",
      title: "Roasted with Precision",
      description: "Small-batch roasting techniques that highlight the unique flavor profiles of our high-altitude arabica beans."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZ9Hdex1PEuvO4ASrbvYRGPEZXWXK0gcZVZRGehqSNk9lQWgRO-8Iz0TTWxADVYL5d1k2pPXj8knCx-QZs4WaH85EcxVGwj3Hi-6S2gJVArYyqNwp1rWU04D-kq4fGFx-4g7QpPGUYSle0l-Rf9fQ8aFio8JCIxRHogGrvGMqTIurvEq3DeIhWknIvyUlcvg_Q1rBri-dhw78Wky0gwvRB9evRhByOpHOEEJ5BjBJH2DYJ63isWvLR0zvWmP4FzP_wCFZ1hiQPKqA",
      alt: "Professional barista pouring water into a pour-over coffee dripper",
      title: "Served with Pride",
      description: "A premium cup that honors its heritage and elevates your morning ritual into an artisanal experience."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-[#f2ebd1] max-w-full mx-auto px-5 sm:px-4 md:px-6 lg:px-20 py-16 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 sm:gap-8 md:gap-12 lg:gap-16">
        <div 
          className="max-w-2xl"
          style={{
            transform: `translateY(${headerParallax}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm sm:text-xs md:text-sm mb-4 sm:mb-3 md:mb-4">The Journey</h2>
          <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight text-[#1b140d]">
            From the Hills to your Cup
          </h3>
          <p className="mt-5 sm:mt-4 md:mt-6 text-base sm:text-sm md:text-base text-[#6b5d52] leading-relaxed">
            Every bean tells a story of biodiversity, tradition, and regenerative agriculture. Araku coffee is grown in harmony with the forest, creating a cup that is as rich as its origin.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 md:gap-8">
          {features.map((feature, index) => {
            const cardParallax = scrollProgress * (60 + index * 10) - (30 + index * 5);
            return (
              <div 
                key={index} 
                className="group flex flex-col gap-5 sm:gap-4 md:gap-6"
                style={{
                  transform: `translateY(${cardParallax}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-lg md:rounded-xl">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    data-alt={feature.alt}
                    style={{ backgroundImage: `url("${feature.image}")` }}
                  ></div>
                </div>
                <div className="space-y-2 sm:space-y-1.5 md:space-y-2">
                  <h4 className="text-lg sm:text-base md:text-lg font-bold text-[#1b140d]">{feature.title}</h4>
                  <p className="text-sm sm:text-xs md:text-sm text-[#6b5d52] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeatureStory;
