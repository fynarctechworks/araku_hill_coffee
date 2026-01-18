function Footer() {
  return (
    <footer className="bg-[#f2ebd1] pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img 
              src="/src/assets/AHC_Logo.svg" 
              alt="Araku Hill Coffee" 
              className="h-10 sm:h-12 w-auto"
            />
            <p className="text-[#6b5d52] text-xs sm:text-sm leading-relaxed">
              Ethically sourced, sustainably grown, and expertly roasted specialty coffee from the heart of the Araku Valley.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-4 sm:mb-6 text-[#1b140d]">Shop</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#6b5d52]">
              <li><a className="hover:text-primary transition-colors" href="#">Specialty Coffee</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Gift Hampers</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Brewing Gear</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Subscriptions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm sm:text-base mb-4 sm:mb-6 text-[#1b140d]">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#6b5d52]">
              <li><a className="hover:text-primary transition-colors" href="#">Our Story</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Sustainability</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Farmers Impact</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
            </ul>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold text-sm sm:text-base mb-4 sm:mb-6 text-[#1b140d]">Experience</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#6b5d52]">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-sm mt-0.5">location_on</span>
                <span>Vishakapatnam, Hyderabad</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">mail</span>
                <span>arakuhillcoffee@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">call</span>
                <span>+91 9963940369</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-6 sm:pt-8 border-t border-[#e5e0db] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] sm:text-xs text-[#6b5d52] text-center sm:text-left">© 2024 Araku Hill Coffee. All rights reserved.</p>
          <div className="flex gap-3">
            <a className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-all text-[#6b5d52] flex items-center justify-center" href="#">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-all text-[#6b5d52] flex items-center justify-center" href="#">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-[#6b5d52] mt-4 sm:mt-6">
          <a className="hover:text-primary" href="#">Privacy Policy</a>
          <span>•</span>
          <a className="hover:text-primary" href="#">Terms of Service</a>
          <span>•</span>
          <a className="hover:text-primary" href="#">Shipping & Returns</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
