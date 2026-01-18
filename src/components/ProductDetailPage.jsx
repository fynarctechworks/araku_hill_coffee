function ProductDetailPage({ addToCart, product }) {
  // Default product if none is passed
  const defaultProduct = {
    title: 'Araku Grand Reserve',
    subtitle: 'Single Origin',
    price: '799',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjuJZCC1YXAsBUvTLSE7FkocQCDyGN98FPl53TLK70Oe0MOOcSTAd9Zie341xWfY9xTSpbIjQ0J0zywAZlZXX0_5gh4oP8e5YuZf23rwEG-sGzqlkmNvGgvpQC_BFAo2pm_uA1CoJi-GBgv6N9u-OxQcbMKiehdOa6SGqQIlHikki6a1AVmBtBqr4V44OlMkXp7rUkoeCiM8CgfkqNERTN8vdTLlSGHJ_MpBAO47C_36Lbq1JQk2L4TfePQdWXnJUTPa3ixCQB5wU',
    roast: 'Medium',
    region: 'Araku Valley',
    description: 'Experience the pinnacle of Araku Valley coffee with our Grand Reserve. Carefully selected from the highest altitudes of our tribal farmers\' estates, this limited-edition coffee showcases the remarkable terroir of the Eastern Ghats.'
  };

  const displayProduct = product || defaultProduct;

  const handleAddToCart = () => {
    if (addToCart) {
      addToCart({
        title: displayProduct.title,
        subtitle: displayProduct.subtitle,
        price: displayProduct.price,
        image: displayProduct.image
      });
    }
  };

  return (
    <main className="max-w-[1280px] mx-auto px-4 sm:px-10 py-8">
      {/* Breadcrumbs */}
      <nav className="flex flex-wrap gap-2 mb-8">
        <a className="text-[#9a734c] text-sm font-medium hover:underline" href="#">Home</a>
        <span className="text-[#9a734c] text-sm">/</span>
        <a className="text-[#9a734c] text-sm font-medium hover:underline" href="#">Whole Beans</a>
        <span className="text-[#9a734c] text-sm">/</span>
        <span className="text-[#1b140d] dark:text-white text-sm font-medium">{displayProduct.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-background-light dark:bg-white/5">
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover" 
              style={{backgroundImage: `url("${displayProduct.image}")`}}
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary">
              <div 
                className="w-full h-full bg-center bg-cover" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzcw-mWcLkmnTU1gsFSuVdHtLJ84fyRmQh1WP-4QpLaR_XTpWu-n8hEnKbP0zSfACKih6mp8sbvB0TzA-Ql1QPucFARiCSm0L0U6kTtKuFsf7p9q16xG2rUUZcNM_tTiGfUAO7Ljw2fOVAzVyVf2J1s_RxLn819p3gYGlascU40Sl_s4pJhhrMMm1UeYbuFf4cPAhissVFkYMZpp6NEq-vPwYcLxj7F0IcxWOkEww_mJT-ufXa0vOrlB0PvfLAGt-71swpb1-mA9s")'}}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:opacity-80 cursor-pointer transition-opacity">
              <div 
                className="w-full h-full bg-center bg-cover" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA3z29taNbt0HR84uoORh1eEkLmM8UzQVOdB57nWfheLahxknMnz3nNcCiatckGKUv79iFM8xOJGDCxcu8Cu3lpoOmvjj70bP1Gm8pXW1rsCio1V9Sk92r6w72cC7P_STXGajI6rlQeTlge7kBuEgd0pHbp9R9qfve2dXqO0YUDswPiYHSB1FY7fbirey7QPT3pH1mhFIZu7QRG26o6Xq_WrU3fSIY7npsBjY5V622qveSmGqenOpAor6tvO0ybStFaQUf1Yn6U5b0")'}}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:opacity-80 cursor-pointer transition-opacity">
              <div 
                className="w-full h-full bg-center bg-cover" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMrt3JGR-leKnPlIvh7sIoq2y06ak4mpiCwlV-Fy2rZJJW7N3i8qXJFRpVHj91815QR4a8J-Nb1rdOyZrMS2dwdQHrnnM3bw-1KADXVw9094RQaIGfn4Z92OzAWx83ZmU5_m9yMaOsbHPJFwXQE5htpuMs2J3UUFfrzXQcLeSr7zETJUizpK33RZDSUP9IWQ-xwWZAtGMxB3QbvFpvfgSK-Hli0EP8KRnVcbGlR5pfG4NHLkpDloyZ9jSqF7Q2y9z4E91_CobAFUw")'}}
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden hover:opacity-80 cursor-pointer transition-opacity">
              <div 
                className="w-full h-full bg-center bg-cover" 
                style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdU7u5nWhs0BBecjP8qKbbLbv6tdG_iRDFL6TVPtd3CFJBvO0tKf2f0VQG99SvpDE4_0oJGknyX-WvS0FfRh2wwnvJ2hOJUYuYjnORJReUsn9zSRxaYl1Y8o-Q9bCvuTcO1AlSBUu0hXpyMX1WIi8J-hx7Yy8qYNdwLEIA3tVcfVcd3wxmNCXXK0e_GVvwJeEsUigJB0pzqOgcpKqNoFgoy7_FeWnMW2_L5vkVb2X4uC9PTr5wbeTw5y66ONSfMRKRtEyJR6Hthts")'}}
              />
            </div>
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24 h-fit">
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {displayProduct.roast || 'Micro-Lot Selection'}
            </span>
            <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] mb-2">
              {displayProduct.title}
            </h1>
            <p className="text-[#9a734c] text-lg font-medium">{displayProduct.subtitle} • {displayProduct.region || 'Araku Valley'}, India</p>
          </div>

          <div className="flex items-center gap-4 py-4 border-y border-[#f3ede7] dark:border-white/10">
            <span className="text-3xl font-bold">₹{displayProduct.price}</span>
            <div className="flex items-center gap-1 text-primary">
              <span className="material-symbols-outlined text-sm fill-icon">star</span>
              <span className="material-symbols-outlined text-sm fill-icon">star</span>
              <span className="material-symbols-outlined text-sm fill-icon">star</span>
              <span className="material-symbols-outlined text-sm fill-icon">star</span>
              <span className="material-symbols-outlined text-sm">star_half</span>
              <span className="text-sm text-[#9a734c] ml-1 font-medium">4.8 (124 reviews)</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[#1b140d] dark:text-white/80 text-base leading-relaxed">
              {displayProduct.description || 'A rare selection from the high-altitude plantations of the Araku Valley. This coffee features sophisticated notes of dark chocolate, citrus, and toasted hazelnut with a silky body and balanced acidity.'}
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">landscape</span>
                <span>1500-2000m altitude</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">brightness_5</span>
                <span>{displayProduct.roast || 'Medium'} Roast</span>
              </div>
            </div>
          </div>

          {/* Selectors */}
          <div className="space-y-6 pt-4">
            <div className="space-y-3">
              <label className="text-sm font-bold uppercase tracking-wider">Select Weight</label>
              <div className="flex gap-3">
                <button className="flex-1 py-3 px-4 rounded-lg border-2 border-primary bg-primary/5 text-primary font-bold transition-all">
                  250g
                </button>
                <button className="flex-1 py-3 px-4 rounded-lg border-2 border-[#f3ede7] dark:border-white/10 hover:border-primary/50 font-bold transition-all">
                  500g
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center border-2 border-[#f3ede7] dark:border-white/10 rounded-lg overflow-hidden">
                <button className="px-3 py-2 hover:bg-[#f3ede7] dark:hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="px-4 font-bold">1</span>
                <button className="px-3 py-2 hover:bg-[#f3ede7] dark:hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
              <button 
                className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95"
                onClick={handleAddToCart}
              >
                <span className="material-symbols-outlined">shopping_cart</span>
                Add to Cart
              </button>
            </div>
          </div>

          {/* Attributes Accordion */}
          <div className="mt-4 border-t border-[#f3ede7] dark:border-white/10">
            <div className="py-4 border-b border-[#f3ede7] dark:border-white/10 flex justify-between items-center cursor-pointer group">
              <span className="font-bold">Flavor Profile</span>
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">expand_more</span>
            </div>
            <div className="py-4 border-b border-[#f3ede7] dark:border-white/10 flex justify-between items-center cursor-pointer group">
              <span className="font-bold">Sustainability Info</span>
              <span className="material-symbols-outlined group-hover:text-primary transition-colors">expand_more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Brewing Suggestions Section */}
      <section className="mt-24 pt-16 border-t border-[#f3ede7] dark:border-white/10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4">Brewing Suggestions</h2>
          <p className="text-[#9a734c] max-w-2xl mx-auto">To experience the full complexity of the Grand Reserve, we recommend these brewing methods crafted by our master roasters.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Method 1 */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-sm border border-[#f3ede7] dark:border-white/10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">filter_vintage</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Pour Over (V60)</h3>
            <p className="text-sm text-[#9a734c] mb-6 leading-relaxed">Ideal for highlighting the delicate citrus notes and the brightness of the Araku valley terroir.</p>
            <ul className="text-left w-full space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Grind:</strong> Medium-Fine</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Ratio:</strong> 1:16 (15g coffee)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Water:</strong> 92°C (198°F)</span>
              </li>
            </ul>
          </div>

          {/* Method 2 */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-sm border border-[#f3ede7] dark:border-white/10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">coffee_maker</span>
            </div>
            <h3 className="text-xl font-bold mb-3">French Press</h3>
            <p className="text-sm text-[#9a734c] mb-6 leading-relaxed">Perfect for a heavier body and to bring out the deep dark chocolate and nutty undertones.</p>
            <ul className="text-left w-full space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Grind:</strong> Coarse</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Ratio:</strong> 1:15 (20g coffee)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Water:</strong> 94°C (201°F)</span>
              </li>
            </ul>
          </div>

          {/* Method 3 */}
          <div className="bg-white dark:bg-white/5 p-8 rounded-xl shadow-sm border border-[#f3ede7] dark:border-white/10 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">wash</span>
            </div>
            <h3 className="text-xl font-bold mb-3">Aeropress</h3>
            <p className="text-sm text-[#9a734c] mb-6 leading-relaxed">An versatile method that offers a balanced cup with smooth acidity and a clean finish.</p>
            <ul className="text-left w-full space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Grind:</strong> Fine</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Ratio:</strong> 1:12 (17g coffee)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-primary rounded-full"></span>
                <span><strong>Water:</strong> 88°C (190°F)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductDetailPage;
