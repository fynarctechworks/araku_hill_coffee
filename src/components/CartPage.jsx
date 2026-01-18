function CartPage({ onNavigate, cart = [], updateQuantity, removeItem }) {
  const subtotal = cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  const gst = subtotal * 0.05;
  const total = subtotal + gst;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 lg:px-8 py-12">
      <div className="flex flex-col gap-2 mb-10 text-center md:text-left">
        <h2 className="text-background-dark dark:text-white text-4xl font-black tracking-tight">Your Shopping Cart</h2>
        <p className="text-[#9a734c] text-lg font-medium">
          {totalItems > 0 ? `You have ${totalItems} item${totalItems > 1 ? 's' : ''} in your cart from the Araku portfolio.` : 'Your cart is empty.'}
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <span className="material-symbols-outlined text-[#9a734c] text-8xl">shopping_cart</span>
          <p className="text-xl font-bold text-[#1b140d] dark:text-white">Your cart is empty</p>
          <p className="text-[#9a734c]">Add some delicious coffee to get started!</p>
          <button 
            onClick={() => onNavigate && onNavigate('shop')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold transition-all"
          >
            Browse Shop
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Cart Items */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="bg-white dark:bg-white/5 rounded-2xl border border-[#f3ede7] dark:border-white/10 overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 bg-[#f3ede7]/30 dark:bg-white/5 border-b border-[#f3ede7] dark:border-white/10">
              <div className="col-span-6 text-xs font-bold uppercase tracking-wider text-[#9a734c]">Product</div>
              <div className="col-span-3 text-center text-xs font-bold uppercase tracking-wider text-[#9a734c]">Quantity</div>
              <div className="col-span-3 text-right text-xs font-bold uppercase tracking-wider text-[#9a734c]">Total</div>
            </div>

            {/* Dynamic Cart Items */}
            {cart.map((item, index) => (
              <div key={index} className="md:grid md:grid-cols-12 gap-3 md:gap-4 p-3 md:p-6 border-b border-[#f3ede7] dark:border-white/10 md:items-center group transition-colors hover:bg-[#f3ede7]/10 dark:hover:bg-white/[0.02]">
                <div className="flex justify-between items-end md:col-span-6 md:gap-4">
                  <div className="flex gap-2.5 md:gap-4 items-start md:items-center">
                    <div 
                      className="bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg md:rounded-xl w-16 md:w-20 shrink-0 border border-[#f3ede7] dark:border-white/10" 
                      style={{backgroundImage: `url("${item.image}")`}}
                    />
                    <div className="flex flex-col gap-0.5 md:gap-1 flex-1">
                      <h3 className="text-[#1b140d] dark:text-white text-xs md:text-lg font-bold leading-tight">{item.title}</h3>
                      <p className="text-[#9a734c] text-[10px] md:text-sm font-medium">{item.subtitle}</p>
                      <p className="text-primary font-bold text-xs md:hidden mt-0.5">₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                      <button 
                        onClick={() => removeItem && removeItem(item.title)}
                        className="md:mt-2 text-[9px] md:text-xs font-bold text-red-600/70 hover:text-red-600 flex items-center gap-0.5 md:gap-1 transition-colors self-start"
                      >
                        <span className="material-symbols-outlined text-[11px] md:text-sm">close</span> Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:hidden">
                    <button 
                      onClick={() => updateQuantity && updateQuantity(item.title, item.quantity - 1)}
                      className="bg-[#f3ede7] hover:bg-primary/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#9a734c] hover:text-primary font-black transition-all text-xs rounded-md w-6 h-6 flex items-center justify-center border border-[#f3ede7] dark:border-white/10"
                    >
                      -
                    </button>
                    <span className="text-[10px] font-bold min-w-[12px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity && updateQuantity(item.title, item.quantity + 1)}
                      className="bg-[#f3ede7] hover:bg-primary/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#9a734c] hover:text-primary font-black transition-all text-xs rounded-md w-6 h-6 flex items-center justify-center border border-[#f3ede7] dark:border-white/10"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-3 hidden md:flex justify-center">
                  <div className="flex items-center gap-4 justify-center">
                    <button 
                      onClick={() => updateQuantity && updateQuantity(item.title, item.quantity - 1)}
                      className="bg-[#f3ede7] hover:bg-primary/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#9a734c] hover:text-primary font-black transition-all text-base rounded-lg w-9 h-9 flex items-center justify-center border border-[#f3ede7] dark:border-white/10"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity && updateQuantity(item.title, item.quantity + 1)}
                      className="bg-[#f3ede7] hover:bg-primary/10 dark:bg-white/10 dark:hover:bg-white/20 text-[#9a734c] hover:text-primary font-black transition-all text-base rounded-lg w-9 h-9 flex items-center justify-center border border-[#f3ede7] dark:border-white/10"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-span-1 md:col-span-3 text-right hidden md:block">
                  <p className="text-[#1b140d] dark:text-white text-lg font-bold">₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
                  <p className="text-[#9a734c] text-xs font-medium">₹{parseFloat(item.price).toFixed(2)} / unit</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between px-2">
            <button 
              onClick={() => onNavigate && onNavigate('shop')}
              className="flex items-center gap-2 text-[#9a734c] hover:text-primary font-bold text-sm transition-colors"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-white/5 border border-[#f3ede7] dark:border-white/10 rounded-2xl p-8 shadow-md">
            <h3 className="text-xl font-bold mb-8 text-[#1b140d] dark:text-white flex items-center gap-2">
              Order Summary
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#9a734c] font-medium">Subtotal</span>
                <span className="font-bold text-[#1b140d] dark:text-white">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#9a734c] font-medium">Estimated Shipping</span>
                <span className="text-green-600 font-bold uppercase text-[10px] bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">Free</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#9a734c] font-medium">GST (5%)</span>
                <span className="font-bold text-[#1b140d] dark:text-white">₹{gst.toFixed(2)}</span>
              </div>
              <div className="pt-5 border-t border-[#f3ede7] dark:border-white/10 flex justify-between items-end">
                <div className="flex flex-col">
                  <span className="text-[#1b140d] dark:text-white font-bold text-lg uppercase tracking-tight">Total</span>
                  <span className="text-[#9a734c] text-[10px] font-bold">INCL. TAXES</span>
                </div>
                <span className="text-3xl font-black text-primary">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-4">
              <button 
                className="w-full bg-primary hover:bg-[#b8640e] text-white py-4 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                onClick={() => onNavigate && onNavigate('checkout')}
              >
                Proceed to Checkout
              </button>
              <div className="flex items-center justify-center gap-4 py-2 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
                <div className="w-10 h-6 bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCJe1Q7-5_-IqyMEqGUipdiApoBnwnId0YHx38M-oOrcsn5r3XsYpQkan1UA4LOl1uzlykCYFe1GFgixqrlWSOVatA2R1NLRkU2j0OJ12oGiYwAXcwOiWidsLF_wtFtI2_9uaWWjPxxuiQibJQEfSiFEwQN9kOpiowBa4VCnlzvDFG4f2Z4BifesDBQm8Vbwqbd6LOoB2_JMoAjdcos3ESvChF1SdmbJZzKAZdupm7THnCQcyemgHO9tabCf0WqVfO08Rr_6H3wi08')"}}></div>
                <div className="w-10 h-6 bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBrZCOs5-iNhbHSNnAxD0I39pSjpUC90CpqVNvIhQySrYQQmqqIdNOeHHYu_l5paZeE3DrQmrV5ZR5Y_Iw-N3u8I-ip7L3JwqTQoJf1iKvGQEWKt5sUSHTDBiiwcMI2g-GgkVFXDA0cYuiR4oXfv0IdmMYkPnMBkzq88jzZpTyFrvv58sXB0vQvJM4bjq6margoa1ZYOM_UjcDpMN_DSjwMVe7mHNGA3NxRIUgeMAKJ6DR2NslrQExS2jDQtPeoUE6WIN96eX9yanI')"}}></div>
                <div className="w-10 h-6 bg-contain bg-no-repeat bg-center" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDmRjNVRo-75t73FRczX7UVeRRtcsTIU4DPNJxT-g6FXz8K0h-4JC5rMDOgBaCnvwQ95oTw3hAnH5RB-XbOSj17lunGBGuWXapcmVLj93u_aHHxFxNQEGxWv6GjqFMNCe40B7yNH3dCq5r4nDTUax-kxZ07FWkrQN6WmJjTY0jHbbOkB5SU1gaqKd1oGPXqAfZQVJQpEfXKqvLxRZWF9B2BLgdTK4snTNMU55tvkBkW6xZjqDLUydHKaoJR08WOQC5VW6f7GwfRgPg')"}}></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-[#f3ede7]/40 dark:bg-white/5 p-5 rounded-2xl flex items-start gap-4 border border-[#f3ede7]/50 dark:border-transparent">
              <span className="material-symbols-outlined text-primary bg-white dark:bg-white/10 p-2 rounded-lg">verified</span>
              <div>
                <p className="text-xs font-bold text-[#1b140d] dark:text-white uppercase tracking-wider mb-1">Authenticity Guaranteed</p>
                <p className="text-[11px] text-[#9a734c] leading-relaxed">Directly sourced from the highest altitudes of Araku Valley, ensuring 100% Arabica excellence.</p>
              </div>
            </div>
            <div className="bg-[#f3ede7]/40 dark:bg-white/5 p-5 rounded-2xl flex items-start gap-4 border border-[#f3ede7]/50 dark:border-transparent">
              <span className="material-symbols-outlined text-primary bg-white dark:bg-white/10 p-2 rounded-lg">local_shipping</span>
              <div>
                <p className="text-xs font-bold text-[#1b140d] dark:text-white uppercase tracking-wider mb-1">Freshness First</p>
                <p className="text-[11px] text-[#9a734c] leading-relaxed">Roasted in small batches and shipped within 24 hours of roasting for peak flavor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </main>
  );
}

export default CartPage;
