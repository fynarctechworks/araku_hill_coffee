function Newsletter() {
  return (
    <section className="bg-[#2b1f17] text-white py-16 sm:py-12 md:py-16 lg:py-20 px-5 sm:px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-4 md:space-y-6">
        <span className="material-symbols-outlined text-primary text-5xl sm:text-4xl md:text-5xl">mail</span>
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight">Stay in the Loop</h2>
        <p className="text-white/80 text-base sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto px-2">
          Join our circle for exclusive early access to micro-lot harvests, stories from the valley, and expert brewing guides.
        </p>
        <form className="flex flex-col gap-3 sm:flex-row sm:gap-4 max-w-lg mx-auto pt-2">
          <input 
            className="flex-1 rounded-lg bg-white/10 border-2 border-white/20 text-white focus:ring-2 focus:ring-primary focus:border-primary placeholder:text-white/50 px-5 py-4 sm:px-4 sm:py-3 text-base sm:text-sm" 
            placeholder="Your email address" 
            type="email"
          />
          <button className="bg-primary hover:bg-primary/90 active:scale-95 text-white px-8 py-4 sm:px-6 sm:py-3 rounded-lg font-bold transition-all whitespace-nowrap text-base sm:text-sm">
            Sign Me Up
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
