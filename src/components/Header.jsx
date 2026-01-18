import { useState, useRef, useEffect } from 'react';

function Header({ currentPage = 'home', onNavigate, onProductSelect, cartCount = 0, wishlistCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  // Sample product data for search (in a real app, this would come from props or API)
  const allProducts = [
    { title: 'Araku Morning Glow', subtitle: 'Single Origin, 250g', price: '720', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN7z15F3VCrilwEn8FmsxEc3JndB8v02c-hG-9V2H9tCxktsXzWad58urypyU5U5x8f-lgq9JaotuWv2oZXq1IEYojcs5NtUfLUUXNOquDij9My0V8UnDMntNKa7JBztHq8q-2rbr-BxKgyVbHkmIYh29lhR1cM5tRD7Vd9cywcX974cIBhwptHr2-VAJAIpyLYKDG_Wm6ZW2yYecwdH2_qk7FPmoB5XKcrXgIIE7GnxY6spnUdUnFqMJz7ai5TN7oS5auMqonJXw', roast: 'Light', region: 'Ananthagiri Hills', description: 'A bright and refreshing light roast with notes of citrus and honey. Perfect for morning brewing with its gentle acidity and smooth finish.' },
    { title: 'Valley Dark Reserve', subtitle: 'Extra Bold, 250g', price: '899', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuLnQ7ZFXgeKVG7qPVwT4-rhWJeojjFkUbfHQ6pbkXn37-cXPQBU-m3zRTx5cH8SYBej5NDxfTkNsnwh3_hXuM9Tj1uqy02yOIukvD3hXDHdMrmX84uLnOr3SiyyFOssAc-sel_H4Sww3W7Aye1Z6E6lOeEkQSQl6vfnEaqTmbiqYPPe9zJ2XS91ndTl3T8xTLcSBNqjiA_SGWaaBJJShnB1JqKsQC4zjivzWP2l6SEPuoN2DIaC5EPiEjGT-rf2mwhZ4rRW9M87E', roast: 'Dark', region: 'Paderu Valley', description: 'An intense dark roast with bold flavors of dark chocolate and roasted nuts. Full-bodied with low acidity, perfect for those who prefer a strong, robust cup.' },
    { title: 'Araku Signature Blend', subtitle: 'Medium-Light, 250g', price: '759', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4meHpf_z2PO8oO4SxGI65RHmU2x4bzSUuV_uamirBTyMQf1wKw-rXqv-COXfT6V0vLtO4d725-zfE3MT6L0QZiZB4rNRCPd-sDr0IamAZ7F43UFNGCSrruxtkSFtrUQzzDUfKAFsogFksEZ2DoCTPa0wgW6pAJJMxsJkjsIIhcDbjx8IQeuggl9-H9XPdf6PvRjfeoT6XREsiaB8FbVXEFYg1pq2Y4LqJVf9H8oVVRion5bGiIkQzurUXxXBUN_Al1LFp5C4Cwa0', roast: 'Medium', region: 'Araku Valley', description: 'Our most beloved blend combines the finest Arabica beans from multiple estates. Perfectly balanced with notes of caramel and milk chocolate.' },
    { title: 'Micro-Batch Espresso', subtitle: 'Limited Edition, 250g', price: '1040', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIZovm1xuwSlykk9o1QzykvVI7OraI55qOwSouxBDsCNcfldojVrniTDUVd68kVRDRmD1s5u-jp2LNMcJHF4s6Vgl_3n1hERgLSd8_mKuVkPhwWykU3SpPNBx565bXPYel3RvSWb-mqKuefhA6ENwI8Kns_3Q0CuKUVSICOrU4krq-F02QjbknA5Fj8yAgCC6oj6SHriyXv9oKHzoNwKchWe6BL7ETh_2x7vOYKAXeU33UUr4XJLr28ri6o3yQSC_M-lHd-RzaSqg', roast: 'Dark', region: 'Paderu Valley', description: 'A limited-edition espresso roast crafted for the most discerning palates. Rich crema, intense flavor, and a velvety smooth finish.' },
    { title: 'Tribal Harvest Gold', subtitle: 'Light Roast, 250g', price: '799', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZWFy6DFPqeH6jZpu6eePmVBw3HSJuyeYDzkGhjjvnvexum80QbbvHGACPFuOVfl9HXqzGklENoe3kcksVv0G6VQj92am3QYDVZw7hBkOSNd3bjxhxGZJdgixGJYt7F1Op3itHyUN1-xxSCqCavvn4N4ItBA0mu4dC1V-BAUO3ukH0WzisfqsEjdSUoeWzZYvacX7eajYUcl95LXWvNJ5yzOJyKQsVwZffUyyFf3OWn18Si_g9Ka4W-yvSUxtN8HJyxRE3PhRjqI', roast: 'Light', region: 'Ananthagiri Hills', description: 'Sourced directly from indigenous tribal farmers, this light roast celebrates traditional farming methods with bright, fruity notes and floral undertones.' },
    { title: 'Cloud Mountain Peaberry', subtitle: 'Rare Peaberry, 250g', price: '1120', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlU7S9SfAKOTnVFrcVc9gh8M3Ljzgn_WInGMZf5ZR-GQ76C3jANgTDFRrpfoqpPxCbZ_28HWzy1ocaxnHxF0tGXbTd5pASHS3GCB1eai5-nK6oEso9YuU4UydUM-lA8CdbUQXahxW1zLqtWsFdp6mVWq7Sy8AEROUPVX60IURmSJzRNIg4t3cuZzmndQljmaOxddT-HrSJxSS0_lbDVXLta_cWq51mHbDc4iNHNPC8uUyNVPUyXBmi3b_V5UuPNq1M7drLkJb7XxA', roast: 'Medium', region: 'Paderu Valley', description: 'An exceptionally rare peaberry coffee with concentrated flavors. Medium roasted to highlight its unique complexity with notes of berry and wine.' },
    { title: 'Forest Sunrise Blend', subtitle: 'Organic, 250g', price: '840', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrktIm9w5tEIh89gUG2uLA8sRJGq7wk7LLzJrkCq5HGcCgYOtjFn-jD5kLbYTpinab-XgfcLGMTu3Yo_f8kIKy17cXhqMeQqRkZkiOOKODlgKxqXQuFJFQVuL1OUopJdTYqqKUCS41rrdVkc2YQvwlA4Fj-WQ0SD6GoZnKc92f4OVgECGl4kq-Pme6iuYrLkY4okgWDtxuwSWBSvd11TxlYv_X6Gr8c41WeobN65Qt7yRjwGngomTE0r4gbP20HnfYRi1e5iiKB0Q', roast: 'Medium', region: 'Ananthagiri Hills', description: 'Certified organic coffee grown under the forest canopy. A medium roast with balanced sweetness, nutty undertones, and a clean, refreshing finish.' },
    { title: 'Monsoon Malabar', subtitle: 'Special Process, 250g', price: '960', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfzPt3X8YDb5Hui-oIwdMC1NaI-E5eBcYd8I67cP1JalHVnRvBshlVSXQ3E9ZQpj8mSr3ljL6MWb--uM1e0skeobVirzkyY96TSGxNvE7dYDzHziP2bIBJNElwqst-HiWJeiWDaw8Uw-rMaJj2ReGIF830GNGHpubQ7VBx78E-FUyluIlZJ24j4byppHqUkPGFJEC5PxABBL_-orKjBCbhNvRI92_WZH-fr83Xb2u5rjDXJuKk5MWxWTXtnMB6lrfTD-xXAoUNCm4', roast: 'Medium', region: 'Paderu Valley', description: 'A uniquely processed coffee exposed to monsoon winds. Low acidity with earthy, spicy notes and a heavy body - a truly distinctive experience.' },
    { title: 'High Altitude Reserve', subtitle: 'Premium, 250g', price: '999', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbe-V9m9Pbr6QO5hB46I4zvv92gP5rwI7dzVW35XpvMMD6VVGBMmLUHoT2l33YfeRBoHRQ8yp-95c2q22BP04hNXNSkJbZbBwXzaVYBuuAboMB0ieJcZo7AV76HnoLPnUdiTGkCpH4JYdTCWutN-tMVrQF-x_yc9t5T4waF8MNplCRKJzir9jbjVV4FWMsmKInjRzKFMTvrDbXs245-sS3YEJinssUROx6sBwfyOsETlDz1MSr3yFY2Tv82ZDUOXpXUx6PzVTGpVc', roast: 'Dark', region: 'Ananthagiri Hills', description: 'Grown at the highest elevations of Araku Valley. A premium dark roast with complex layers of chocolate, caramel, and subtle spice notes.' },
    { title: 'Valley Harmony', subtitle: 'Balanced Blend, 250g', price: '699', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8FHRl5v7amUE99vZYwlCBwZmGInumgzRtP0bU5IX6S1BTcIKKpNoFFl7jITl5PXxy9aBOXUVGFJP989NMj23ERpaQ7cwpWWhDehHSaLOBC4vsK42TlV5lc5SeEtEE0iJe1h93VMaqzOJHe-qxV2UnczhTQ8A_IGCZP4apv2ivWnc8ci2ZU1o08aGLtPLambKHZNpv6aUDgpcNP8DS4AX8bfchOYDY4xtiNs_gBTmtyliCc1DMp7hq1KLESY0isS9fvk_ab5fyoxY', roast: 'Light', region: 'Paderu Valley', description: 'A perfectly balanced blend suitable for any brewing method. Light roasted to preserve origin characteristics with gentle sweetness and bright notes.' }
  ];

  const filteredProducts = searchQuery.trim() 
    ? allProducts.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5) // Limit to 5 results
    : [];

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (page) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setMobileMenuOpen(false);
    setShowSearchResults(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSearchResults(query.trim().length > 0);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      handleNavClick('shop');
    }
  };

  const handleProductClick = () => {
    setSearchQuery('');
    setShowSearchResults(false);
    handleNavClick('product-detail');
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/95 backdrop-blur shadow-sm">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 py-4 md:py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-6 md:gap-10">
          <button 
            className="flex items-center min-w-0 p-0" 
            onClick={() => handleNavClick('home')}
          >
            <img 
              src="/src/assets/AHC_Logo.svg" 
              alt="Araku Hill Coffee" 
              className="h-10 md:h-12 w-auto"
            />
          </button>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === 'home' ? 'text-primary font-semibold' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('shop')} 
              className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === 'shop' ? 'text-primary font-semibold' : ''}`}
            >
              Shop
            </button>
            <button 
              onClick={() => handleNavClick('origin')} 
              className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === 'origin' ? 'text-primary font-semibold' : ''}`}
            >
              Origin Story
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`text-sm font-medium hover:text-primary transition-colors ${currentPage === 'about' ? 'text-primary font-semibold' : ''}`}
            >
              About
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
          <div className="hidden lg:block relative" ref={searchRef}>
            <div className="flex items-center bg-white rounded-lg px-3 py-1.5 gap-2 border border-[#e5e0db]">
              <span className="material-symbols-outlined text-[#9a734c] text-[18px]">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-[#9a734c] w-56 outline-none" 
                placeholder="Search our blends..." 
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyPress={handleSearchSubmit}
                onFocus={() => searchQuery.trim() && setShowSearchResults(true)}
              />
            </div>
            
            {/* Search Results Overlay */}
            {showSearchResults && filteredProducts.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-[#e5e0db] max-h-[400px] overflow-y-auto z-50">
                <div className="p-2">
                  {filteredProducts.map((product, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (onProductSelect) {
                          onProductSelect(product);
                        }
                        handleNavClick('product-detail');
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center gap-3 p-2 hover:bg-[#f2ebd1] rounded-lg transition-colors text-left"
                    >
                      <div 
                        className="w-12 h-12 rounded-md bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url("${product.image}")` }}
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-[#1b140d] truncate">{product.title}</h4>
                        <p className="text-xs text-[#9a734c]">{product.subtitle}</p>
                      </div>
                      <span className="text-sm font-bold text-primary">₹{product.price}</span>
                    </button>
                  ))}
                </div>
                <div className="border-t border-[#e5e0db] p-2">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setShowSearchResults(false);
                      handleNavClick('shop');
                    }}
                    className="w-full text-center text-sm text-primary font-semibold py-2 hover:bg-[#f2ebd1] rounded-lg transition-colors"
                  >
                    View all results in Shop →
                  </button>
                </div>
              </div>
            )}
            
            {/* No Results Message */}
            {showSearchResults && searchQuery.trim() && filteredProducts.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-[#e5e0db] p-4 z-50">
                <p className="text-sm text-[#9a734c] text-center">No products found</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <button 
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors relative"
              onClick={() => handleNavClick('wishlist')}
            >
              <span className="material-symbols-outlined text-xl">favorite</span>
              {wishlistCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-primary text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">{wishlistCount}</span>
              )}
            </button>
            <button 
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors relative"
              onClick={() => handleNavClick('cart')}
            >
              <span className="material-symbols-outlined text-xl">shopping_cart</span>
              {cartCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-primary text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-bold">{cartCount}</span>
              )}
            </button>
            <button 
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors hidden sm:block"
              onClick={() => handleNavClick('profile')}
            >
              <span className="material-symbols-outlined text-xl">person</span>
            </button>
            <button 
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu - Mobile-first with better touch targets */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#e5e0db] bg-background-light">
          <nav className="px-4 py-3 space-y-1">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`block w-full text-left text-base font-medium hover:text-primary hover:bg-primary/5 transition-colors py-3 px-3 rounded-lg ${currentPage === 'home' ? 'text-primary font-semibold bg-primary/10' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('shop')} 
              className={`block w-full text-left text-base font-medium hover:text-primary hover:bg-primary/5 transition-colors py-3 px-3 rounded-lg ${currentPage === 'shop' ? 'text-primary font-semibold bg-primary/10' : ''}`}
            >
              Shop
            </button>
            <button 
              onClick={() => handleNavClick('origin')} 
              className={`block w-full text-left text-base font-medium hover:text-primary hover:bg-primary/5 transition-colors py-3 px-3 rounded-lg ${currentPage === 'origin' ? 'text-primary font-semibold bg-primary/10' : ''}`}
            >
              Origin Story
            </button>
            <button 
              onClick={() => handleNavClick('about')} 
              className={`block w-full text-left text-base font-medium hover:text-primary hover:bg-primary/5 transition-colors py-3 px-3 rounded-lg ${currentPage === 'about' ? 'text-primary font-semibold bg-primary/10' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('profile')} 
              className={`block w-full text-left text-base font-medium hover:text-primary hover:bg-primary/5 transition-colors py-3 px-3 rounded-lg sm:hidden ${currentPage === 'profile' ? 'text-primary font-semibold bg-primary/10' : ''}`}
            >
              My Profile
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
