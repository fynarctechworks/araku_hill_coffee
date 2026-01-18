import { useState, useEffect, useRef } from 'react';
import ProductCard from './ProductCard';

function Bestsellers({ onNavigate, addToCart, wishlist = [], toggleWishlist }) {
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

  const headerParallax = scrollProgress * 40 - 20;

  const products = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrktIm9w5tEIh89gUG2uLA8sRJGq7wk7LLzJrkCq5HGcCgYOtjFn-jD5kLbYTpinab-XgfcLGMTu3Yo_f8kIKy17cXhqMeQqRkZkiOOKODlgKxqXQuFJFQVuL1OUopJdTYqqKUCS41rrdVkc2YQvwlA4Fj-WQ0SD6GoZnKc92f4OVgECGl4kq-Pme6iuYrLkY4okgWDtxuwSWBSvd11TxlYv_X6Gr8c41WeobN65Qt7yRjwGngomTE0r4gbP20HnfYRi1e5iiKB0Q",
      alt: "Premium brown coffee bag packaging with minimalist design",
      title: "Grand Reserve",
      subtitle: "Complex & Bold",
      price: "799",
      roast: "Medium",
      region: "Araku Valley",
      description: "Experience the pinnacle of Araku Valley coffee with our Grand Reserve. Carefully selected from the highest altitudes, this limited-edition coffee showcases the remarkable terroir of the Eastern Ghats with sophisticated notes of dark chocolate and toasted hazelnut."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfzPt3X8YDb5Hui-oIwdMC1NaI-E5eBcYd8I67cP1JalHVnRvBshlVSXQ3E9ZQpj8mSr3ljL6MWb--uM1e0skeobVirzkyY96TSGxNvE7dYDzHziP2bIBJNElwqst-HiWJeiWDaw8Uw-rMaJj2ReGIF830GNGHpubQ7VBx78E-FUyluIlZJ24j4byppHqUkPGFJEC5PxABBL_-orKjBCbhNvRI92_WZH-fr83Xb2u5rjDXJuKk5MWxWTXtnMB6lrfTD-xXAoUNCm4",
      alt: "Coffee beans being scooped into a bag",
      title: "Signature Blend",
      subtitle: "Smooth & Caramel",
      price: "650",
      roast: "Medium",
      region: "Araku Valley",
      description: "Our most beloved blend combines the finest Arabica beans from multiple estates across the Araku Valley. Perfectly balanced with notes of caramel, milk chocolate, and a hint of citrus, this coffee delivers a smooth, consistent cup every time."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbe-V9m9Pbr6QO5hB46I4zvv92gP5rwI7dzVW35XpvMMD6VVGBMmLUHoT2l33YfeRBoHRQ8yp-95c2q22BP04hNXNSkJbZbBwXzaVYBuuAboMB0ieJcZo7AV76HnoLPnUdiTGkCpH4JYdTCWutN-tMVrQF-x_yc9t5T4waF8MNplCRKJzir9jbjVV4FWMsmKInjRzKFMTvrDbXs245-sS3YEJinssUROx6sBwfyOsETlDz1MSr3yFY2Tv82ZDUOXpXUx6PzVTGpVc",
      alt: "Pouring dark espresso into a white ceramic cup",
      title: "Micro-lot Selection",
      subtitle: "Rare & Floral",
      price: "950",
      roast: "Light",
      region: "Ananthagiri Hills",
      description: "An exceptionally rare micro-lot from our most prestigious estate. This light roast showcases delicate floral aromatics, jasmine tea notes, and a bright, sparkling acidity that exemplifies the unique character of high-altitude Araku coffee."
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8FHRl5v7amUE99vZYwlCBwZmGInumgzRtP0bU5IX6S1BTcIKKpNoFFl7jITl5PXxy9aBOXUVGFJP989NMj23ERpaQ7cwpWWhDehHSaLOBC4vsK42TlV5lc5SeEtEE0iJe1h93VMaqzOJHe-qxV2UnczhTQ8A_IGCZP4apv2ivWnc8ci2ZU1o08aGLtPLambKHZNpv6aUDgpcNP8DS4AX8bfchOYDY4xtiNs_gBTmtyliCc1DMp7hq1KLESY0isS9fvk_ab5fyoxY",
      alt: "Sunlight hitting a glass of cold brew coffee",
      title: "Early Harvest",
      subtitle: "Bright & Fruity",
      price: "720",
      roast: "Light",
      region: "Paderu Valley",
      description: "Harvested at the peak of the season, this early harvest lot captures the vibrant, fruit-forward characteristics of freshly ripened coffee cherries. Notes of wild berries, stone fruit, and honey make this a refreshing choice for filter coffee enthusiasts."
    }
  ];

  return (
    <section ref={sectionRef} className="bg-white py-16 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-4 md:px-6 lg:px-20">
        <div 
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-6 md:mb-8 lg:mb-10 gap-4"
          style={{
            transform: `translateY(${headerParallax}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm sm:text-xs md:text-sm mb-3 sm:mb-2 md:mb-3">The Selection</h2>
            <h3 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#1b140d]">Our Bestsellers</h3>
          </div>
          <button 
            onClick={() => onNavigate && onNavigate('shop')}
            className="text-primary font-bold hover:underline flex items-center gap-2 text-base sm:text-sm whitespace-nowrap cursor-pointer"
          >
            <span className="inline">View All Blends</span>
          </button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-4 md:gap-6">
          {products.map((product, index) => {
            const cardParallax = scrollProgress * (50 + index * 8) - (25 + index * 4);
            return (
              <div
                key={index}
                style={{
                  transform: `translateY(${cardParallax}px)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                <ProductCard 
                  {...product} 
                  onClick={(productData) => onNavigate && onNavigate('product-detail', productData)} 
                  onAddToCart={addToCart}
                  wishlist={wishlist}
                  onToggleWishlist={toggleWishlist}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Bestsellers;
