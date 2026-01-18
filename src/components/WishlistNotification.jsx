import { useEffect } from 'react';

function WishlistNotification({ show, onClose, productName }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="fixed top-20 right-4 z-[60] animate-slide-in-right">
      <div className="bg-white dark:bg-[#2c2116] border-2 border-red-500 shadow-2xl rounded-xl p-4 flex items-center gap-3 min-w-[300px] max-w-[400px]">
        <div className="bg-red-500/10 rounded-full p-2">
          <span className="material-symbols-outlined text-red-500 text-2xl fill-icon">favorite</span>
        </div>
        <div className="flex-1">
          <p className="font-bold text-[#1b140d] dark:text-white text-sm">Added to Wishlist!</p>
          <p className="text-[#9a734c] text-xs mt-0.5">{productName}</p>
        </div>
        <button 
          onClick={onClose}
          className="text-[#9a734c] hover:text-red-500 transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>
    </div>
  );
}

export default WishlistNotification;
