function ProductCard({ image, alt, title, subtitle, price, onClick, onAddToCart, wishlist = [], onToggleWishlist }) {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({ image, alt, title, subtitle, price });
    }
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    if (onToggleWishlist) {
      onToggleWishlist({ image, alt, title, subtitle, price });
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick({ image, alt, title, subtitle, price });
    }
  };

  const isInWishlist = wishlist.find(item => item.title === title);

  return (
    <div className="bg-white rounded-lg p-4 sm:p-3 hover:shadow-lg transition-all cursor-pointer border border-[#f3ede7] flex flex-col h-full" onClick={handleClick}>
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 sm:mb-3 group/card">
        <div 
          className="w-full h-full bg-cover bg-center" 
          data-alt={alt}
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        {onToggleWishlist && (
          <button
            onClick={handleToggleWishlist}
            className={`absolute top-2 right-2 h-10 w-10 sm:h-7 sm:w-7 rounded-full bg-white/90 opacity-100 sm:opacity-0 sm:group-hover/card:opacity-100 transition-opacity flex items-center justify-center ${
              isInWishlist ? 'text-red-500' : 'text-[#1b140d]'
            }`}
          >
            <span className={`material-symbols-outlined text-base sm:text-sm ${
              isInWishlist ? 'fill-icon' : ''
            }`}>favorite</span>
          </button>
        )}
      </div>
      <div className="space-y-2.5 sm:space-y-2 flex flex-col flex-1">
        <div className="flex-1">
          <h4 className="text-base sm:text-sm md:text-base font-bold text-[#1b140d] leading-tight">{title}</h4>
          <p className="text-primary text-xs sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider mt-1">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-lg sm:text-base md:text-lg font-black text-[#1b140d]">₹{price}</span>
          <button 
            className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 sm:py-2 rounded-lg transition-all active:scale-95 font-bold text-sm"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
