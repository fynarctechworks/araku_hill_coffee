function CheckoutPage({ cart = [] }) {
  // Calculate totals
  const subtotal = cart.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% GST
  const total = subtotal + tax;

  return (
    <main className="flex-1 flex justify-center py-10 px-4 md:px-10 lg:px-40">
      <div className="layout-content-container flex flex-col lg:flex-row gap-10 max-w-[1200px] w-full">
        {/* Left Column: Checkout Form */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Breadcrumbs Progress */}
          <div className="flex flex-wrap gap-2 py-2">
            <a className="text-primary text-sm font-medium leading-normal" href="#">Cart</a>
            <span className="text-[#9a734c] text-sm font-medium leading-normal">/</span>
            <a className="text-primary text-sm font-medium leading-normal" href="#">Information</a>
            <span className="text-[#9a734c] text-sm font-medium leading-normal">/</span>
            <span className="text-[#9a734c] text-sm font-medium leading-normal">Shipping</span>
            <span className="text-[#9a734c] text-sm font-medium leading-normal">/</span>
            <span className="text-[#1b140d] dark:text-[#fcfaf8] text-sm font-bold leading-normal">Payment</span>
          </div>

          {/* Customer Details Section */}
          <section className="bg-white dark:bg-[#2c2116] rounded-xl p-6 shadow-sm border border-[#f3ede7] dark:border-[#3d2f23]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#1b140d] dark:text-[#fcfaf8] text-[22px] font-bold leading-tight">Customer Details</h2>
              <a className="text-primary text-sm font-medium" href="#">Already have an account? Login</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col flex-1">
                <p className="text-[#1b140d] dark:text-[#fcfaf8] text-sm font-medium leading-normal pb-2">First Name</p>
                <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#1b140d] dark:bg-[#1b140d] dark:text-white border border-[#e7dbcf] dark:border-[#4d3a2a] h-12 p-[15px] text-base" placeholder="Enter first name"/>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-[#1b140d] dark:text-[#fcfaf8] text-sm font-medium leading-normal pb-2">Last Name</p>
                <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#1b140d] dark:bg-[#1b140d] dark:text-white border border-[#e7dbcf] dark:border-[#4d3a2a] h-12 p-[15px] text-base" placeholder="Enter last name"/>
              </label>
              <label className="flex flex-col flex-1 md:col-span-2">
                <p className="text-[#1b140d] dark:text-[#fcfaf8] text-sm font-medium leading-normal pb-2">Email Address</p>
                <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#1b140d] dark:bg-[#1b140d] dark:text-white border border-[#e7dbcf] dark:border-[#4d3a2a] h-12 p-[15px] text-base" placeholder="coffee.lover@example.com" type="email"/>
              </label>
            </div>
          </section>

          {/* Shipping Address Section */}
          <section className="bg-white dark:bg-[#2c2116] rounded-xl p-6 shadow-sm border border-[#f3ede7] dark:border-[#3d2f23]">
            <h2 className="text-[#1b140d] dark:text-[#fcfaf8] text-[22px] font-bold leading-tight mb-4">Shipping Address</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex flex-col flex-1 md:col-span-2">
                <p className="text-[#1b140d] dark:text-[#fcfaf8] text-sm font-medium leading-normal pb-2">Address line 1</p>
                <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#1b140d] dark:bg-[#1b140d] dark:text-white border border-[#e7dbcf] dark:border-[#4d3a2a] h-12 p-[15px] text-base" placeholder="House no, Building, Street"/>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-[#1b140d] dark:text-[#fcfaf8] text-sm font-medium leading-normal pb-2">City</p>
                <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#1b140d] dark:bg-[#1b140d] dark:text-white border border-[#e7dbcf] dark:border-[#4d3a2a] h-12 p-[15px] text-base" placeholder="Select City"/>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-[#1b140d] dark:text-[#fcfaf8] text-sm font-medium leading-normal pb-2">Pincode</p>
                <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-[#1b140d] dark:bg-[#1b140d] dark:text-white border border-[#e7dbcf] dark:border-[#4d3a2a] h-12 p-[15px] text-base" placeholder="6 digits"/>
              </label>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <input defaultChecked className="rounded border-[#e7dbcf] text-primary focus:ring-primary h-4 w-4" type="checkbox"/>
              <span className="text-sm text-[#1b140d] dark:text-[#fcfaf8]">Save this information for next time</span>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="bg-white dark:bg-[#2c2116] rounded-xl p-6 shadow-sm border border-[#f3ede7] dark:border-[#3d2f23]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[#1b140d] dark:text-[#fcfaf8] text-[22px] font-bold leading-tight">Payment Method</h2>
              <div className="flex items-center gap-1 text-[#9a734c]">
                <span className="material-symbols-outlined text-sm">lock</span>
                <span className="text-xs">Secure SSL Encrypted</span>
              </div>
            </div>
            <div className="space-y-3">
              {/* Razorpay Option */}
              <label className="flex items-center p-4 border rounded-lg cursor-pointer transition-all border-primary bg-primary/5 dark:bg-primary/10">
                <input defaultChecked className="text-primary focus:ring-primary h-4 w-4" name="payment" type="radio"/>
                <div className="ml-4 flex flex-1 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1b140d] dark:text-[#fcfaf8]">Razorpay</span>
                    <span className="text-xs text-[#9a734c]">Cards, Netbanking, Wallet</span>
                  </div>
                  <div className="flex gap-2">
                    <img className="h-6" alt="Visa and Mastercard logos" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPUPNIGIEdmwXp1HadDLcgeqIqRGXKcdR57J3FG6GDFk-gm8m8FZX1oXq0fh5Cic8emhHMudWl-fAuhN88uNN_RvE7RtMZUQ_zx-YrXmfLldBT9rAz33UYzOg83a2xM6vX6n8gA1siESCQTP__Fbvi2ZJE69dJm-x9LApIkhMpwiYF6gpGjPgOSSQCJW7KxO0qVwrSVfK_5L4tqGgHffbAFxK3Ly_oOJaHuQaKcSlkMXpYdj3M-05t2qWaxJpWxSdTbPV5zpxpk4"/>
                  </div>
                </div>
              </label>
              {/* UPI Option */}
              <label className="flex items-center p-4 border border-[#e7dbcf] dark:border-[#4d3a2a] rounded-lg cursor-pointer hover:border-primary transition-all">
                <input className="text-primary focus:ring-primary h-4 w-4" name="payment" type="radio"/>
                <div className="ml-4 flex flex-1 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1b140d] dark:text-[#fcfaf8]">UPI</span>
                    <span className="text-xs text-[#9a734c]">Google Pay, PhonePe, Any UPI ID</span>
                  </div>
                  <span className="material-symbols-outlined text-primary">qr_code_2</span>
                </div>
              </label>
              {/* Stripe Option */}
              <label className="flex items-center p-4 border border-[#e7dbcf] dark:border-[#4d3a2a] rounded-lg cursor-pointer hover:border-primary transition-all">
                <input className="text-primary focus:ring-primary h-4 w-4" name="payment" type="radio"/>
                <div className="ml-4 flex flex-1 justify-between items-center">
                  <div className="flex flex-col">
                    <span className="font-bold text-[#1b140d] dark:text-[#fcfaf8]">Stripe</span>
                    <span className="text-xs text-[#9a734c]">International Cards & Apple Pay</span>
                  </div>
                  <span className="material-symbols-outlined text-primary">public</span>
                </div>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <aside className="w-full lg:w-[400px]">
          <div className="bg-white dark:bg-[#2c2116] rounded-xl p-6 shadow-sm border border-[#f3ede7] dark:border-[#3d2f23] sticky top-24">
            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
            
            {/* Product List */}
            <div className="space-y-4 mb-6">
              {cart.length === 0 ? (
                <p className="text-center text-[#9a734c] py-8">No items in cart</p>
              ) : (
                cart.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="h-20 w-20 bg-background-light dark:bg-[#1b140d] rounded-lg overflow-hidden shrink-0 border border-[#f3ede7] dark:border-[#3d2f23]">
                      <img className="w-full h-full object-cover" alt={item.title} src={item.image}/>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">{item.title}</p>
                      <p className="text-xs text-[#9a734c] mb-1">{item.subtitle}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Qty: {item.quantity}</span>
                        <span className="font-bold text-sm">₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Discount Code */}
            <div className="flex gap-2 mb-6">
              <input className="form-input flex-1 rounded-lg dark:bg-[#1b140d] border border-[#e7dbcf] dark:border-[#4d3a2a] h-10 px-3 text-sm" placeholder="Discount code"/>
              <button className="bg-[#f3ede7] dark:bg-[#3d2f23] px-4 rounded-lg font-bold text-sm hover:bg-primary hover:text-white transition-all">Apply</button>
            </div>

            {/* Totals */}
            <div className="space-y-3 border-t border-b border-[#f3ede7] dark:border-[#3d2f23] py-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#9a734c]">Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#9a734c]">Shipping</span>
                <span className="text-primary font-medium">Calculated next step</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#9a734c]">Taxes (GST 5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="text-lg font-bold">Total</span>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">₹{total.toFixed(2)}</p>
                <p className="text-[10px] text-[#9a734c]">Prices inclusive of all taxes</p>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">verified_user</span>
              Complete Purchase
            </button>

            <p className="text-center text-[11px] text-[#9a734c] mt-4">
              By placing an order, you agree to Araku Hill Coffee's <br/>
              <a className="underline" href="#">Terms of Service</a> and <a className="underline" href="#">Privacy Policy</a>.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CheckoutPage;
