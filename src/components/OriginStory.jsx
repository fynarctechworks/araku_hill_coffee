import { useState, useEffect, useRef } from 'react';

function OriginStory() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const sideRef = useRef(null);
  const timelineRef = useRef(null);
  const farmersRef = useRef(null);
  const ctaRef = useRef(null);

  const [heroProgress, setHeroProgress] = useState(0);
  const [sideProgress, setSideProgress] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [farmersProgress, setFarmersProgress] = useState(0);
  const [ctaProgress, setCtaProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const calculateProgress = (ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          return Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        }
        return 0;
      };

      setHeroProgress(calculateProgress(heroRef));
      setSideProgress(calculateProgress(sideRef));
      setTimelineProgress(calculateProgress(timelineRef));
      setFarmersProgress(calculateProgress(farmersRef));
      setCtaProgress(calculateProgress(ctaRef));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroBackgroundParallax = scrollY * 0.4;
  const heroContentParallax = scrollY * 0.2;

  return (
    <main className="max-w-[1200px] mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="p-4 md:p-8">
        <div className="relative h-[600px] w-full rounded-xl overflow-hidden group">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzQ76I4mvqiUYuB44usLvlr10gS2-yWyv9D-JfLZlJ_PTNhXWgu0ltIEzk7JTvy7JagKvgmQLzdTsCTdK2psTNIDghPRA4ddJ0CcX4gR2P9mDJ1EWdBOx4L8NKm8I4O3ZOI99nA8TkFEFpcpGN80kfBE7hGqV4sIQMLfNGY4SXf0OuB79bacIi-WLhJpXDnegrXWc84gGl63ubghwC5wHhCU66XL6ZjXHQH7ZolEh0DebvOCxQpTjMDyYJQis4l8F2V7XbCBB-mzE")',
              transform: `translateY(${heroBackgroundParallax}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          ></div>
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{
              transform: `translateY(${heroContentParallax}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <span 
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4"
              style={{
                transform: `translateY(${scrollY * -0.05}px)`,
              }}
            >
              Our Heritage
            </span>
            <h1 
              className="text-white text-5xl md:text-7xl font-black tracking-tight max-w-3xl mb-6"
              style={{
                transform: `translateY(${scrollY * -0.1}px)`,
              }}
            >
              Born in the Araku Valley
            </h1>
            <p 
              className="text-white/90 text-lg md:text-xl font-light max-w-2xl"
              style={{
                transform: `translateY(${scrollY * -0.15}px)`,
              }}
            >
              A journey of ancient heritage, sustainable tribal farming, and the world's finest organic coffee beans.
            </p>
          </div>
        </div>
      </section>

      {/* The Land Narrative */}
      <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">The Land of Iron &amp; Mist</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-[#1b140d]/80 dark:text-[#fcfaf8]/80">
            High in the Eastern Ghats of India, the Araku Valley sits 3,000 feet above sea level. Here, the unique micro-climate—characterized by cool nights and misty mornings—slows the maturation of coffee cherries, allowing complex sugars to develop within the bean.
          </p>
          <p className="text-lg leading-relaxed text-[#1b140d]/80 dark:text-[#fcfaf8]/80">
            The soil is iron-rich and fertile, nurtured by diverse forest canopies that provide natural shade. This ecosystem isn't just a farm; it's a living heritage preserved by the indigenous communities for generations.
          </p>
        </div>
      </section>

      {/* Side-by-Side Storytelling */}
      <section ref={sideRef} className="py-12 px-4 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
        <div
          className="rounded-xl overflow-hidden aspect-[4/3] bg-background-light dark:bg-background-dark shadow-xl bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChZ3C-hSjujQUa1jriFtbuHMFNVN65lN7H46xz4nHQrgVIk8_0-Hkf_HBnqjDCxjIMs_1Z9RYA8PPF6BK-crf6nAy5foDLZr2y7jVg9m15O2mZbxfPTs2vcRslrUbPZzNtt2CvXrikL2lk-PhveEpAdlCCbdLqVHRca_8QFAheGKskagEJH5qhjeXVdjtY0104xqfOAu4x32p6SyO63CyFmMPeL6TWhguUyp7GWm3NfFQFsL93p7lv2z6XF8s-eFAtNf6I_YLOYpQ")',
            transform: `translateY(${sideProgress * 60 - 30}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        ></div>
        <div 
          className="md:pl-12"
          style={{
            transform: `translateY(${sideProgress * 40 - 20}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">The Tribal Stewards</h3>
          <p className="text-[#1b140d]/80 dark:text-[#fcfaf8]/80 mb-6 leading-relaxed">
            Small-scale tribal farmers are the heart of Araku Hill Coffee. Unlike industrial plantations, our coffee is grown in "Podu" style—a traditional forest-farming method that respects the natural biodiversity. Each bean is hand-tended with a philosophy of harmony between humans and nature.
          </p>
          <div className="flex items-center gap-4 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <span className="material-symbols-outlined text-primary text-4xl">eco</span>
            <div>
              <h4 className="font-bold text-primary">100% Organic</h4>
              <p className="text-sm opacity-80">Certified regenerative agriculture that heals the earth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Timeline Journey */}
      <section ref={timelineRef} className="py-24 px-4 bg-primary/5 dark:bg-primary/5 rounded-3xl my-12 overflow-hidden">
        <div 
          className="text-center mb-16"
          style={{
            transform: `translateY(${timelineProgress * 50 - 25}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">The Journey of a Bean</h2>
          <p className="text-sm uppercase tracking-widest text-primary font-bold mt-2">From Seed to Sip</p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 timeline-line hidden md:block" />
          
          {/* Stage 1 */}
          <div 
            className="flex flex-col md:flex-row items-center justify-between mb-24 relative animate-fade-in-up"
            style={{
              transform: `translateY(${timelineProgress * 70 - 35}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="md:w-5/12 text-center md:text-right animate-slide-in-left">
              <h4 className="text-xl font-bold mb-2">1. Forest Cultivation</h4>
              <p className="text-sm text-[#1b140d]/70 dark:text-[#fcfaf8]/70">
                Coffee grows under the shade of silver oak and fruit trees, absorbing the essence of the surrounding forest.
              </p>
            </div>
            <div className="z-10 size-10 rounded-full bg-primary flex items-center justify-center my-4 md:my-0 shadow-lg shadow-primary/30 animate-pulse-slow">
              <span className="material-symbols-outlined text-white text-xl">forest</span>
            </div>
            <div
              className="w-full md:w-5/12 overflow-hidden rounded-xl h-48 md:h-48 bg-cover bg-center animate-slide-in-right hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChSUFHaDdvUpXH5faqUlKDupaZ5fMf3cWZyBrWZWbnOYhDCiRG7cWVqVKkjk58uADIPaTjURWDRCLVaTG1mHKv840rdcoIZtkGwWHe5SPelVEvW6_cccWiPOGblPAdE90wiI-jjciwf35CWy_4H66OCK9IeL-D1reW-sHFv9UEyfFLpxYrjeA9wYGhQcR1A_uLUAdi_Y6E9ZP3cNbxmydCpgBFBShlR_3CDbwCt-Hxd1iftbI5g55CuVm56QlV-G7ulE2eNJOJpso")'
              }}
            />
          </div>

          {/* Stage 2 */}
          <div 
            className="flex flex-col md:flex-row-reverse items-center justify-between mb-24 relative animate-fade-in-up animation-delay-200"
            style={{
              transform: `translateY(${timelineProgress * 80 - 40}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="md:w-5/12 text-center md:text-left animate-slide-in-right">
              <h4 className="text-xl font-bold mb-2">2. Selective Picking</h4>
              <p className="text-sm text-[#1b140d]/70 dark:text-[#fcfaf8]/70">
                Farmers hand-pick only the perfectly ripe, deep-red cherries, ensuring uniform sweetness and quality.
              </p>
            </div>
            <div className="z-10 size-10 rounded-full bg-primary flex items-center justify-center my-4 md:my-0 shadow-lg shadow-primary/30 animate-pulse-slow">
              <span className="material-symbols-outlined text-white text-xl">pan_tool</span>
            </div>
            <div
              className="w-full md:w-5/12 overflow-hidden rounded-xl h-48 md:h-48 bg-cover bg-center animate-slide-in-left hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuChX7xFQ5kzHZ-WfGu7oktY5LeNlvrdSOgpTsuA0FQZQnRuA54b6C7fhEQ6AUYFqMuK-u8SCybhDP3peLg8jFfXVsHcXmnbjZw3-AzTnRA8OkNncHvX9wUnIo4AeShOseRHgQthBRVrevXUQ0VO8qDv8Lk25emdd6Z6iIs0yeyKG6zPeRgFCsNNdHHXmBppkXpFQXXGtD5fyp6zLAUJC6GdOWjpZ5mCcZJ5vdDJNLAMnLwQXG2WFUEPfsfFsPOpJ56RRwYMTeyM19k")'
              }}
            />
          </div>

          {/* Stage 3 */}
          <div 
            className="flex flex-col md:flex-row items-center justify-between mb-24 relative animate-fade-in-up animation-delay-400"
            style={{
              transform: `translateY(${timelineProgress * 90 - 45}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="md:w-5/12 text-center md:text-right animate-slide-in-left">
              <h4 className="text-xl font-bold mb-2">3. Sun-Dried Processing</h4>
              <p className="text-sm text-[#1b140d]/70 dark:text-[#fcfaf8]/70">
                Beans are naturally dried on raised beds under the valley sun, allowing natural fermentation to enhance flavor profiles.
              </p>
            </div>
            <div className="z-10 size-10 rounded-full bg-primary flex items-center justify-center my-4 md:my-0 shadow-lg shadow-primary/30 animate-pulse-slow">
              <span className="material-symbols-outlined text-white text-xl">wb_sunny</span>
            </div>
            <div
              className="w-full md:w-5/12 overflow-hidden rounded-xl h-48 md:h-48 bg-cover bg-center hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCP6wBs4EoECwQz4fVANfF_UDM-ATLwZNFmgV-81SmffocTacNiI_x03UwHBU_P3n3FOpP0SyiTbccKsTQCsBwYxPwHHIqceIRsfMtMlaUHVuAiNnJTlqbfj9WAfgIPrKdwRQDwxWIIw6AZD4kJmngev-3NVvWxSLGX27xmNa_2vFhd3YsBGLB7BVbYFcTnW82j_n9_Sc2C-3js9VIkkhBLDshkXEOkvvA4lMgxF0TNZ4i1IuDnwXQPP6Jne7yuCEjF0SkjQw6hkQE")'
              }}
            />
          </div>

          {/* Stage 4 */}
          <div 
            className="flex flex-col md:flex-row-reverse items-center justify-between relative animate-fade-in-up animation-delay-600"
            style={{
              transform: `translateY(${timelineProgress * 100 - 50}px)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="md:w-5/12 text-center md:text-left animate-slide-in-right">
              <h4 className="text-xl font-bold mb-2">4. Small-Batch Roasting</h4>
              <p className="text-sm text-[#1b140d]/70 dark:text-[#fcfaf8]/70">
                Our master roasters bring out notes of chocolate and stone fruit, roasting in small batches to preserve freshness.
              </p>
            </div>
            <div className="z-10 size-10 rounded-full bg-primary flex items-center justify-center my-4 md:my-0 shadow-lg shadow-primary/30 animate-pulse-slow">
              <span className="material-symbols-outlined text-white text-xl">local_fire_department</span>
            </div>
            <div
              className="w-full md:w-5/12 overflow-hidden rounded-xl h-48 md:h-48 bg-cover bg-center animate-slide-in-left hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaiJ5RcdRO-l4OWdY_CkQOqiJjdNF5b3ZuJKeWTW626H6YoumsgfhSFarf06DAPWAnpGspGZWReF7wwzR9YX0BIdFMr7pGO6a1UQq__8fa4NFJqOhKBsEPpzg_lt--lf0O3nDaXX7svnUfxAv9Xf8nTWcGt2CYRH_ZYIPxMJY3jY_ZmECJEqdr5H9poiD0J-Js1A4cerdtjjWi99TVSftn0zOadmuW9JsADmzSuQV1ev0Nys68hlPpDo9p2ySZv0uoxiIptfvsalI")'
              }}
            />
          </div>
        </div>
      </section>

      {/* People Spotlight */}
      <section ref={farmersRef} className="py-16 px-4 md:px-8 overflow-hidden">
        <h2 
          className="text-3xl font-bold mb-12 text-center"
          style={{
            transform: `translateY(${farmersProgress * 40 - 20}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          Meet the Farmers
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Farmer Card 1 */}
          <div 
            className="bg-white dark:bg-[#2d2116] p-6 rounded-xl shadow-sm border border-[#f3ede7] dark:border-[#3d2e1f] hover:shadow-md transition-shadow h-full flex flex-col"
          >
            <div
              className="size-20 rounded-full bg-cover bg-center mb-6 mx-auto"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvspckXceTvVBHZW_q6T4ELr760Hk1aihuztO0PPcVoI1BDn-KUN0uqUNHleEA4j5hpQkwPX6Mj1WVm3wvtJSjMSNgI0vgsnYplbxNL9Wv56hl82QGQHgycO_Ld5B2Crt9vLJp-ZEPrUCeWBe3vFuww0OSDcXosudGepvjHBNgsM6LDWbpZ6_3Z4ZSllAAuKkfLEvfMgDyXOnpagSnYt0EX1CJrYnP4Y6Rg1TOpSyeli-cNJn9usQaKy8mKocx2-NCysIrd-G4b3M")'
              }}
            />
            <p className="italic text-[#1b140d]/80 dark:text-[#fcfaf8]/80 text-center mb-4 flex-grow">
              "The mountain gives us life, and in return, we give it our care. Coffee is our story written in the soil."
            </p>
            <div className="text-center">
              <h5 className="font-bold">Lakshmi Devi</h5>
              <p className="text-xs text-primary uppercase font-bold">Ghat Master Farmer</p>
            </div>
          </div>

          {/* Farmer Card 2 */}
          <div 
            className="bg-white dark:bg-[#2d2116] p-6 rounded-xl shadow-sm border border-[#f3ede7] dark:border-[#3d2e1f] hover:shadow-md transition-shadow h-full flex flex-col"
          >
            <div
              className="size-20 rounded-full bg-cover bg-center mb-6 mx-auto"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBezFjbY78bq1LoTVU8nU2hgaVA6fbj1gU8xK8IhcqGACu_MpS8MSWyTvc1wxmRAaViROTaNECT2ur3GL3Ddr__Y_Iv6YMUVCtvhsNJ-Bi0zczdpRKpZuQs0g8El3qVAZYgLtJIf4qUitZ5IcVqbvSVkvOgzS4TeExqzLPO0Nsx4yO3DOW8ZGZ3la2SmaXTH251imIxnU3Kr62k_eWPn-y3qGtbZ0dKD0o1BLPVAAQPImtknVYxohslGnQ-QcLhURhGVTl1oXkJX0E")'
              }}
            />
            <p className="italic text-[#1b140d]/80 dark:text-[#fcfaf8]/80 text-center mb-4 flex-grow">
              "We don't use chemicals because we drink from the same streams that water our plants. Pure nature, pure taste."
            </p>
            <div className="text-center">
              <h5 className="font-bold">Ramarao Naidu</h5>
              <p className="text-xs text-primary uppercase font-bold">Sustainability Lead</p>
            </div>
          </div>

          {/* Farmer Card 3 */}
          <div 
            className="bg-white dark:bg-[#2d2116] p-6 rounded-xl shadow-sm border border-[#f3ede7] dark:border-[#3d2e1f] hover:shadow-md transition-shadow h-full flex flex-col"
          >
            <div
              className="size-20 rounded-full bg-cover bg-center mb-6 mx-auto"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAgF6cbydmv4iqjZfp0dmP1YRq8JjoCC6A3d1tNogn1SmpdtL3ybt3JlrAPhLgUJ3AHu5ABC9e3Of0NFd5-VQgUS1feLlodP9q7mhArJfKKfB3-xipjjJcjx8Yn3P7BImpKpWAyupqnzYY_7zQUPfinETZdfRujKMnfphyB0l8MWauaN85JxSjiay54XhgKm5BkoeTu8Ll08VX7Offav36k3W8DooQKaQEqJ6uhsiqUKSRwzBWsbABCPjYtX6LH_VoVMSyFnamTLps")'
              }}
            />
            <p className="italic text-[#1b140d]/80 dark:text-[#fcfaf8]/80 text-center mb-4 flex-grow">
              "Bridging traditional wisdom with modern organic standards is how we produce award-winning beans."
            </p>
            <div className="text-center">
              <h5 className="font-bold">Ananya Rao</h5>
              <p className="text-xs text-primary uppercase font-bold">Quality Control</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 px-4 md:px-8 text-center overflow-hidden">
        <div 
          className="bg-background-dark dark:bg-background-light text-white dark:text-background-dark py-16 px-8 rounded-3xl relative overflow-hidden"
          style={{
            transform: `translateY(${ctaProgress * 50 - 25}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -ml-32 -mb-32" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Taste the Story</h2>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto relative z-10">
            Experience the unique terroir of the Araku Valley. Every purchase directly supports our tribal farmers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
              Explore the Collection
            </button>
            <button className="bg-transparent border-2 border-primary text-primary dark:text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary hover:text-white transition-all">
              Join the Community
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OriginStory;
