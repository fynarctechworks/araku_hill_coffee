import { useState } from 'react';

function ShopPage({ onNavigate, addToCart, wishlist = [], toggleWishlist }) {
  // Filter states
  const [selectedRoasts, setSelectedRoasts] = useState([]);
  const [selectedGrinds, setSelectedGrinds] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 6;

  // All products data
  const allProducts = [
    { 
      title: 'Araku Morning Glow', 
      subtitle: 'Single Origin, 250g', 
      price: '720', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN7z15F3VCrilwEn8FmsxEc3JndB8v02c-hG-9V2H9tCxktsXzWad58urypyU5U5x8f-lgq9JaotuWv2oZXq1IEYojcs5NtUfLUUXNOquDij9My0V8UnDMntNKa7JBztHq8q-2rbr-BxKgyVbHkmIYh29lhR1cM5tRD7Vd9cywcX974cIBhwptHr2-VAJAIpyLYKDG_Wm6ZW2yYecwdH2_qk7FPmoB5XKcrXgIIE7GnxY6spnUdUnFqMJz7ai5TN7oS5auMqonJXw',
      roast: 'light',
      grind: 'fine',
      region: 'ananthagiri',
      roastLevel: 2,
      badge: 'New Arrival',
      badgeColor: 'bg-primary'
    },
    { 
      title: 'Valley Dark Reserve', 
      subtitle: 'Extra Bold, 250g', 
      price: '899', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuLnQ7ZFXgeKVG7qPVwT4-rhWJeojjFkUbfHQ6pbkXn37-cXPQBU-m3zRTx5cH8SYBej5NDxfTkNsnwh3_hXuM9Tj1uqy02yOIukvD3hXDHdMrmX84uLnOr3SiyyFOssAc-sel_H4Sww3W7Aye1Z6E6lOeEkQSQl6vfnEaqTmbiqYPPe9zJ2XS91ndTl3T8xTLcSBNqjiA_SGWaaBJJShnB1JqKsQC4zjivzWP2l6SEPuoN2DIaC5EPiEjGT-rf2mwhZ4rRW9M87E',
      roast: 'dark',
      grind: 'whole',
      region: 'paderu',
      roastLevel: 5,
      badge: 'Best Seller',
      badgeColor: 'bg-[#1b140d]'
    },
    { 
      title: 'Araku Signature Blend', 
      subtitle: 'Medium-Light, 250g', 
      price: '759', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4meHpf_z2PO8oO4SxGI65RHmU2x4bzSUuV_uamirBTyMQf1wKw-rXqv-COXfT6V0vLtO4d725-zfE3MT6L0QZiZB4rNRCPd-sDr0IamAZ7F43UFNGCSrruxtkSFtrUQzzDUfKAFsogFksEZ2DoCTPa0wgW6pAJJMxsJkjsIIhcDbjx8IQeuggl9-H9XPdf6PvRjfeoT6XREsiaB8FbVXEFYg1pq2Y4LqJVf9H8oVVRion5bGiIkQzurUXxXBUN_Al1LFp5C4Cwa0',
      roast: 'medium',
      grind: 'medium',
      region: 'ananthagiri',
      roastLevel: 3
    },
    { 
      title: 'Micro-Batch Espresso', 
      subtitle: 'Limited Edition, 250g', 
      price: '1040', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZovm1xuwSlykk9o1QzykvVI7OraI55qOwSouxBDsCNcfldojVrniTDUVd68kVRDRmD1s5u-jp2LNMcJHF4s6Vgl_3n1hERgLSd8_mKuVkPhwWykU3SpPNBx565bXPYel3RvSWb-mqKuefhA6ENwI8Kns_3Q0CuKUVSICOrU4krq-F02QjbknA5Fj8yAgCC6oj6SHriyXv9oKHzoNwKchWe6BL7ETh_2x7vOYKAXeU33UUr4XJLr28ri6o3yQSC_M-lHd-RzaSqg',
      roast: 'dark',
      grind: 'fine',
      region: 'paderu',
      roastLevel: 4
    },
    { 
      title: 'Tribal Harvest Gold', 
      subtitle: 'Light Roast, 250g', 
      price: '799', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZWFy6DFPqeH6jZpu6eePmVBw3HSJuyeYDzkGhjjvnvexum80QbbvHGACPFuOVfl9HXqzGklENoe3kcksVv0G6VQj92am3QYDVZw7hBkOSNd3bjxhxGZJdgixGJYt7F1Op3itHyUN1-xxSCqCavvn4N4ItBA0mu4dC1V-BAUO3ukH0WzisfqsEjdSUoeWzZYvacX7eajYUcl95LXWvNJ5yzOJyKQsVwZffUyyFf3OWn18Si_g9Ka4W-yvSUxtN8HJyxRE3PhRjqI',
      roast: 'light',
      grind: 'coarse',
      region: 'ananthagiri',
      roastLevel: 1
    },
    { 
      title: 'Cloud Mountain Peaberry', 
      subtitle: 'Rare Peaberry, 250g', 
      price: '1120', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlU7S9SfAKOTnVFrcVc9gh8M3Ljzgn_WInGMZf5ZR-GQ76C3jANgTDFRrpfoqpPxCbZ_28HWzy1ocaxnHxF0tGXbTd5pASHS3GCB1eai5-nK6oEso9YuU4UydUM-lA8CdbUQXahxW1zLqtWsFdp6mVWq7Sy8AEROUPVX60IURmSJzRNIg4t3cuZzmndQljmaOxddT-HrSJxSS0_lbDVXLta_cWq51mHbDc4iNHNPC8uUyNVPUyXBmi3b_V5UuPNq1M7drLkJb7XxA',
      roast: 'medium',
      grind: 'whole',
      region: 'paderu',
      roastLevel: 2
    },
    { 
      title: 'Forest Sunrise Blend', 
      subtitle: 'Organic, 250g', 
      price: '840', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrktIm9w5tEIh89gUG2uLA8sRJGq7wk7LLzJrkCq5HGcCgYOtjFn-jD5kLbYTpinab-XgfcLGMTu3Yo_f8kIKy17cXhqMeQqRkZkiOOKODlgKxqXQuFJFQVuL1OUopJdTYqqKUCS41rrdVkc2YQvwlA4Fj-WQ0SD6GoZnKc92f4OVgECGl4kq-Pme6iuYrLkY4okgWDtxuwSWBSvd11TxlYv_X6Gr8c41WeobN65Qt7yRjwGngomTE0r4gbP20HnfYRi1e5iiKB0Q',
      roast: 'medium',
      grind: 'medium',
      region: 'ananthagiri',
      roastLevel: 3
    },
    { 
      title: 'Monsoon Malabar', 
      subtitle: 'Special Process, 250g', 
      price: '960', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfzPt3X8YDb5Hui-oIwdMC1NaI-E5eBcYd8I67cP1JalHVnRvBshlVSXQ3E9ZQpj8mSr3ljL6MWb--uM1e0skeobVirzkyY96TSGxNvE7dYDzHziP2bIBJNElwqst-HiWJeiWDaw8Uw-rMaJj2ReGIF830GNGHpubQ7VBx78E-FUyluIlZJ24j4byppHqUkPGFJEC5PxABBL_-orKjBCbhNvRI92_WZH-fr83Xb2u5rjDXJuKk5MWxWTXtnMB6lrfTD-xXAoUNCm4',
      roast: 'medium',
      grind: 'coarse',
      region: 'paderu',
      roastLevel: 3
    },
    { 
      title: 'High Altitude Reserve', 
      subtitle: 'Premium, 250g', 
      price: '999', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbe-V9m9Pbr6QO5hB46I4zvv92gP5rwI7dzVW35XpvMMD6VVGBMmLUHoT2l33YfeRBoHRQ8yp-95c2q22BP04hNXNSkJbZbBwXzaVYBuuAboMB0ieJcZo7AV76HnoLPnUdiTGkCpH4JYdTCWutN-tMVrQF-x_yc9t5T4waF8MNplCRKJzir9jbjVV4FWMsmKInjRzKFMTvrDbXs245-sS3YEJinssUROx6sBwfyOsETlDz1MSr3yFY2Tv82ZDUOXpXUx6PzVTGpVc',
      roast: 'dark',
      grind: 'fine',
      region: 'ananthagiri',
      roastLevel: 4
    },
    { 
      title: 'Valley Harmony', 
      subtitle: 'Balanced Blend, 250g', 
      price: '699', 
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8FHRl5v7amUE99vZYwlCBwZmGInumgzRtP0bU5IX6S1BTcIKKpNoFFl7jITl5PXxy9aBOXUVGFJP989NMj23ERpaQ7cwpWWhDehHSaLOBC4vsK42TlV5lc5SeEtEE0iJe1h93VMaqzOJHe-qxV2UnczhTQ8A_IGCZP4apv2ivWnc8ci2ZU1o08aGLtPLambKHZNpv6aUDgpcNP8DS4AX8bfchOYDY4xtiNs_gBTmtyliCc1DMp7hq1KLESY0isS9fvk_ab5fyoxY',
      roast: 'light',
      grind: 'whole',
      region: 'paderu',
      roastLevel: 2
    }
  ];

  // Filter products
  const filteredProducts = allProducts.filter(product => {
    const roastMatch = selectedRoasts.length === 0 || selectedRoasts.includes(product.roast);
    const grindMatch = selectedGrinds.length === 0 || selectedGrinds.includes(product.grind);
    const regionMatch = selectedRegion === 'all' || product.region === selectedRegion;
    return roastMatch && grindMatch && regionMatch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Pagination handlers
  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) goToPage(currentPage - 1);
  };

  const goToNext = () => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  };

  // Toggle filter functions
  const toggleRoast = (roast) => {
    setSelectedRoasts(prev => 
      prev.includes(roast) ? prev.filter(r => r !== roast) : [...prev, roast]
    );
    setCurrentPage(1);
  };

  const toggleGrind = (grind) => {
    setSelectedGrinds(prev => 
      prev.includes(grind) ? prev.filter(g => g !== grind) : [...prev, grind]
    );
    setCurrentPage(1);
  };

  const clearAllFilters = () => {
    setSelectedRoasts([]);
    setSelectedGrinds([]);
    setSelectedRegion('all');
    setCurrentPage(1);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    if (addToCart) {
      addToCart(product);
    }
  };

  return (
    <main className="max-w-[1280px] mx-auto w-full flex flex-col flex-1 px-4 md:px-20 py-6">
      {/* Page Heading */}
      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-[#1b140d] text-4xl font-black leading-tight tracking-[-0.033em]">Our Coffee Collection</h1>
        <p className="text-[#9a734c] text-lg font-normal leading-normal max-w-xl">Ethically sourced, single-origin beans from the misty heights of Araku Valley. Hand-roasted in small batches.</p>
      </div>

      {/* Mobile Filter Button */}
      <button 
        onClick={() => setShowFilters(!showFilters)}
        className="lg:hidden flex items-center justify-center gap-2 w-full mb-6 py-3 rounded-lg bg-primary text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-lg shadow-primary/20"
      >
        <span className="material-symbols-outlined text-lg">tune</span>
        {showFilters ? 'Hide Filters' : 'Show Filters'}
        {(selectedRoasts.length > 0 || selectedGrinds.length > 0 || selectedRegion !== 'all') && (
          <span className="bg-white text-primary rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
            {selectedRoasts.length + selectedGrinds.length + (selectedRegion !== 'all' ? 1 : 0)}
          </span>
        )}
      </button>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Navigation (Filters) */}
        <aside className={`w-full lg:w-64 flex flex-col gap-8 ${showFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="flex flex-col gap-6 sticky top-24">
            {/* Filter Section: Roast */}
            <div>
              <h3 className="text-[#1b140d] text-base font-bold mb-4">
                Roast Level
              </h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedRoasts.includes('light')} 
                    onChange={() => toggleRoast('light')}
                    className="rounded border-[#dea25f] text-primary focus:ring-primary h-5 w-5 bg-transparent" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Light Roast</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedRoasts.includes('medium')} 
                    onChange={() => toggleRoast('medium')}
                    className="rounded border-[#9a734c] text-primary focus:ring-primary h-5 w-5 bg-transparent" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Medium Roast</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedRoasts.includes('dark')} 
                    onChange={() => toggleRoast('dark')}
                    className="rounded border-[#9a734c] text-primary focus:ring-primary h-5 w-5 bg-transparent" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Dark Roast</span>
                </label>
              </div>
            </div>

            {/* Filter Section: Grind */}
            <div>
              <h3 className="text-[#1b140d] text-base font-bold mb-4">
                Grind Type
              </h3>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedGrinds.includes('whole')} 
                    onChange={() => toggleGrind('whole')}
                    className="rounded border-[#9a734c] text-primary focus:ring-primary h-5 w-5 bg-transparent" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Whole Bean</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedGrinds.includes('fine')} 
                    onChange={() => toggleGrind('fine')}
                    className="rounded border-[#9a734c] text-primary focus:ring-primary h-5 w-5 bg-transparent" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Fine (Espresso)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedGrinds.includes('medium')} 
                    onChange={() => toggleGrind('medium')}
                    className="rounded border-[#9a734c] text-primary focus:ring-primary h-5 w-5 bg-transparent" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Medium (Drip)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input 
                    checked={selectedGrinds.includes('coarse')} 
                    onChange={() => toggleGrind('coarse')}
                    className="rounded border-[#9a734c] text-primary focus:ring-primary h-5 w-5 bg-transparent" 
                    type="checkbox"
                  />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">Coarse (French Press)</span>
                </label>
              </div>
            </div>

            {/* Filter Section: Origin */}
            <div>
              <h3 className="text-[#1b140d] text-base font-bold mb-4">
                Region
              </h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => { setSelectedRegion('all'); setCurrentPage(1); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
                    selectedRegion === 'all' ? 'bg-primary text-white' : 'bg-[#f3ede7] hover:bg-primary/20'
                  }`}
                >
                  All Regions
                </button>
                <button 
                  onClick={() => { setSelectedRegion('ananthagiri'); setCurrentPage(1); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedRegion === 'ananthagiri' ? 'bg-primary text-white' : 'bg-[#f3ede7] hover:bg-primary/20'
                  }`}
                >
                  Ananthagiri
                </button>
                <button 
                  onClick={() => { setSelectedRegion('paderu'); setCurrentPage(1); }}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    selectedRegion === 'paderu' ? 'bg-primary text-white' : 'bg-[#f3ede7] hover:bg-primary/20'
                  }`}
                >
                  Paderu
                </button>
              </div>
            </div>

            <button 
              onClick={clearAllFilters}
              className="flex items-center justify-center gap-2 w-full mt-4 py-3 rounded-lg bg-primary text-white text-sm font-bold tracking-wide hover:brightness-110 transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-sm">filter_alt_off</span>
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center py-20">
              <span className="material-symbols-outlined text-6xl text-[#9a734c] mb-4">coffee</span>
              <h3 className="text-2xl font-bold text-[#1b140d] mb-2">No products found</h3>
              <p className="text-[#9a734c] mb-6">Try adjusting your filters</p>
              <button 
                onClick={clearAllFilters}
                className="px-6 py-3 bg-primary text-white rounded-lg font-bold hover:brightness-110 transition-all"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            currentProducts.map((product, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden border border-[#f3ede7] transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col" onClick={() => onNavigate && onNavigate('product-detail', product)}>
                <div className="relative h-64 overflow-hidden bg-[#ebe4dc]">
                  <div 
                    className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
                    style={{backgroundImage: `url("${product.image}")`}}
                  />
                  {product.badge && (
                    <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-wider`}>
                      {product.badge}
                    </div>
                  )}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (toggleWishlist) toggleWishlist(product);
                    }}
                    className={`absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${
                      wishlist.find(item => item.title === product.title) ? 'text-red-500 fill-icon' : 'text-[#1b140d]'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-lg ${
                      wishlist.find(item => item.title === product.title) ? 'fill-icon' : ''
                    }`}>favorite</span>
                  </button>
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{product.title}</h3>
                    <p className="text-[#9a734c] text-xs font-medium mt-1">{product.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase text-[#9a734c] tracking-widest">Roast Level:</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map(level => (
                        <span 
                          key={level}
                          className={`material-symbols-outlined text-xs ${
                            level <= product.roastLevel ? 'text-primary fill-icon' : 'text-[#f3ede7]'
                          }`}
                        >
                          circle
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-black text-xl text-[#1b140d]">₹{product.price}</span>
                  </div>
                  <button 
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
                    onClick={(e) => handleAddToCart(e, product)}
                  >
                    <span className="material-symbols-outlined text-lg">add_shopping_cart</span>
                    Quick Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      {filteredProducts.length > 0 && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-16 mb-20">
          <button 
            onClick={goToPrevious}
            disabled={currentPage === 1}
            className={`h-10 w-10 flex items-center justify-center rounded-lg border border-[#f3ede7] transition-colors ${
              currentPage === 1 ? 'text-[#d4d4d4] cursor-not-allowed' : 'text-[#9a734c] hover:bg-primary/10'
            }`}
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`h-10 w-10 flex items-center justify-center rounded-lg font-bold transition-colors ${
                  currentPage === pageNum
                    ? 'bg-primary text-white'
                    : 'border border-[#f3ede7] hover:bg-primary/10'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          
          <button 
            onClick={goToNext}
            disabled={currentPage === totalPages}
            className={`h-10 w-10 flex items-center justify-center rounded-lg border border-[#f3ede7] transition-colors ${
              currentPage === totalPages ? 'text-[#d4d4d4] cursor-not-allowed' : 'text-[#9a734c] hover:bg-primary/10'
            }`}
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      )}
    </main>
  );
}

export default ShopPage;
