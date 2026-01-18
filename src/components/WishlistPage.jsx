function WishlistPage({ onNavigate, wishlist = [], removeFromWishlist, addToCart }) {
  return (
    <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
        <h2 className="text-background-dark dark:text-white text-4xl font-black tracking-tight">Your Wishlist</h2>
        <p className="text-[#9a734c] text-lg font-medium">
          {wishlist.length > 0 ? `You have ${wishlist.length} item${wishlist.length > 1 ? 's' : ''} in your wishlist.` : 'Your wishlist is empty.'}
        </p>
      </div>

      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <span className="material-symbols-outlined text-[#9a734c] text-8xl">favorite_border</span>
          <p className="text-xl font-bold text-[#1b140d] dark:text-white">Your wishlist is empty</p>
          <p className="text-[#9a734c]">Add some delicious coffee to your wishlist!</p>
          <button 
            onClick={() => onNavigate && onNavigate('shop')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all"
          >
            Browse Shop
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item, index) => (
            <div key={index} className="bg-white dark:bg-white/5 rounded-2xl border border-[#f3ede7] dark:border-white/10 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div 
                className="aspect-[4/3] bg-center bg-cover cursor-pointer" 
                style={{backgroundImage: `url("${item.image}")`}}
                onClick={() => onNavigate && onNavigate('product-detail', item)}
              />
              <div className="p-5 space-y-4">
                <div>
                  <h3 
                    className="text-[#1b140d] dark:text-white text-lg font-bold cursor-pointer hover:text-primary transition-colors"
                    onClick={() => onNavigate && onNavigate('product-detail', item)}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#9a734c] text-sm font-medium">{item.subtitle}</p>
                  <p className="text-primary font-bold text-xl mt-2">₹{item.price}</p>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={() => {
                      addToCart && addToCart(item);
                      removeFromWishlist && removeFromWishlist(item.title);
                    }}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-lg">shopping_cart</span>
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => removeFromWishlist && removeFromWishlist(item.title)}
                    className="bg-[#f3ede7] hover:bg-red-50 dark:bg-white/10 dark:hover:bg-red-900/20 text-red-600 p-3 rounded-lg transition-all"
                    title="Remove from wishlist"
                  >
                    <span className="material-symbols-outlined text-lg">close</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button 
          onClick={() => onNavigate && onNavigate('shop')}
          className="flex items-center gap-2 text-[#9a734c] hover:text-primary font-bold text-sm transition-colors"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Continue Shopping
        </button>
      </div>
    </main>
  );
}

export default WishlistPage;
