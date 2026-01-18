import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeatureStory from './components/FeatureStory'
import Bestsellers from './components/Bestsellers'
import Heritage from './components/Heritage'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import OriginStory from './components/OriginStory'
import AboutPage from './components/AboutPage'
import ShopPage from './components/ShopPage'
import ProductDetailPage from './components/ProductDetailPage'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import WishlistPage from './components/WishlistPage'
import ProfilePage from './components/ProfilePage'
import CartNotification from './components/CartNotification'
import WishlistNotification from './components/WishlistNotification'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationProduct, setNotificationProduct] = useState('');
  const [showWishlistNotification, setShowWishlistNotification] = useState(false);
  const [wishlistNotificationProduct, setWishlistNotificationProduct] = useState('');

  const handleNavigate = (page, product = null) => {
    setCurrentPage(page);
    if (product) {
      setSelectedProduct(product);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.title === product.title);
      if (existingItem) {
        return prevCart.map(item =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Show notification
    setNotificationProduct(product.title);
    setShowNotification(true);
  };

  const updateQuantity = (title, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(title);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (title) => {
    setCart(prevCart => prevCart.filter(item => item.title !== title));
  };

  const toggleWishlist = (product) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.find(item => item.title === product.title);
      if (exists) {
        return prevWishlist.filter(item => item.title !== product.title);
      }
      // Show notification when adding to wishlist
      setWishlistNotificationProduct(product.title);
      setShowWishlistNotification(true);
      return [...prevWishlist, product];
    });
  };

  const removeFromWishlist = (title) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.title !== title));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#1b140d] dark:text-[#f8f7f6] antialiased">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        cartCount={cartCount} 
        wishlistCount={wishlist.length}
        onProductSelect={setSelectedProduct}
      />
      <CartNotification 
        show={showNotification} 
        onClose={() => setShowNotification(false)} 
        productName={notificationProduct}
      />
      <WishlistNotification 
        show={showWishlistNotification} 
        onClose={() => setShowWishlistNotification(false)} 
        productName={wishlistNotificationProduct}
      />
      {currentPage === 'home' && (
        <main>
          <Hero onNavigate={handleNavigate} />
          <FeatureStory />
          <Bestsellers onNavigate={handleNavigate} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />
          <Heritage onNavigate={handleNavigate} />
          <Newsletter />
        </main>
      )}
      {currentPage === 'origin' && <OriginStory />}
      {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
      {currentPage === 'shop' && <ShopPage onNavigate={handleNavigate} addToCart={addToCart} wishlist={wishlist} toggleWishlist={toggleWishlist} />}
      {currentPage === 'product-detail' && <ProductDetailPage addToCart={addToCart} product={selectedProduct} />}
      {currentPage === 'cart' && <CartPage onNavigate={handleNavigate} cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />}
      {currentPage === 'wishlist' && <WishlistPage onNavigate={handleNavigate} wishlist={wishlist} removeFromWishlist={removeFromWishlist} addToCart={addToCart} />}
      {currentPage === 'profile' && <ProfilePage onNavigate={handleNavigate} />}
      {currentPage === 'checkout' && <CheckoutPage cart={cart} />}
      {currentPage === 'sustainability' && (
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Sustainability Coming Soon</h1>
            <p className="text-lg text-[#9a734c]">Learn about our sustainable practices.</p>
          </div>
        </main>
      )}
      <Footer />
    </div>
  )
}

export default App

