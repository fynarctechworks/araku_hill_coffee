import { useState } from 'react';

function ProfilePage({ onNavigate }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      onNavigate('home');
    }
  };

  const getSectionLabel = (section) => {
    const labels = {
      'overview': 'Profile',
      'orders': 'Order History',
      'addresses': 'Addresses',
      'subscriptions': 'Subscriptions',
      'rewards': 'Rewards'
    };
    return labels[section] || 'Profile';
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-20 py-10">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Mobile Dropdown Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-full flex items-center justify-between gap-4 px-4 py-3 bg-[#f2ebd1] rounded-lg border border-[#e5e0db]"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9fJtqDI-5aEurQbaVVfFjGUXMVcVPSXVunP1GKSd9t2xhxWssdfq7bH1G18AliBgn-a_6xZVR66OYo0ZFQTjnRbfSt-uRFi8cFuVSS3cQUPTZSWcJXf0DmKK8C7pKiSUBMkwxaV0vCEMUkUXcKSRPf2NsHj383WqxNbnzQhXiOvn7Fsc6uYCGg0JWAIjaCpOdo6PdAsjy-LmReM8w6MebFVmOsiFDz-uP2VHE7ngKrdhkn7Qf_bGB5FMDAkeL3WK4rufCmBWHRPI")'}}></div>
              <div className="text-left">
                <p className="font-bold text-sm">Sam</p>
                <p className="text-xs text-[#9a734c]">{getSectionLabel(activeSection)}</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#9a734c]">
              {mobileMenuOpen ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          
          {mobileMenuOpen && (
            <div className="mt-2 bg-white rounded-lg border border-[#e5e0db] shadow-lg overflow-hidden">
              <nav className="flex flex-col">
                <button 
                  onClick={() => handleSectionChange('overview')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all text-left border-b border-[#e5e0db] ${activeSection === 'overview' ? 'bg-primary/20 text-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
                >
                  <span className="material-symbols-outlined">person</span>
                  Profile
                </button>
                <button 
                  onClick={() => handleSectionChange('orders')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all text-left border-b border-[#e5e0db] ${activeSection === 'orders' ? 'bg-primary/20 text-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
                >
                  <span className="material-symbols-outlined">package</span>
                  Order History
                </button>
                <button 
                  onClick={() => handleSectionChange('addresses')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all text-left border-b border-[#e5e0db] ${activeSection === 'addresses' ? 'bg-primary/20 text-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
                >
                  <span className="material-symbols-outlined">location_on</span>
                  Addresses
                </button>
                <button 
                  onClick={() => handleSectionChange('subscriptions')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all text-left border-b border-[#e5e0db] ${activeSection === 'subscriptions' ? 'bg-primary/20 text-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
                >
                  <span className="material-symbols-outlined">coffee</span>
                  Subscriptions
                </button>
                <button 
                  onClick={() => handleSectionChange('rewards')}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all text-left border-b border-[#e5e0db] ${activeSection === 'rewards' ? 'bg-primary/20 text-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
                >
                  <span className="material-symbols-outlined">card_giftcard</span>
                  Rewards
                </button>
                <button 
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-all text-left"
                >
                  <span className="material-symbols-outlined">logout</span>
                  Sign Out
                </button>
              </nav>
            </div>
          )}
        </div>

        {/* Sidebar Navigation - Desktop Only */}
        <aside className="hidden lg:block w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-28 space-y-8">
            <div className="flex items-center gap-4 px-2">
              <div className="size-12 rounded-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA9fJtqDI-5aEurQbaVVfFjGUXMVcVPSXVunP1GKSd9t2xhxWssdfq7bH1G18AliBgn-a_6xZVR66OYo0ZFQTjnRbfSt-uRFi8cFuVSS3cQUPTZSWcJXf0DmKK8C7pKiSUBMkwxaV0vCEMUkUXcKSRPf2NsHj383WqxNbnzQhXiOvn7Fsc6uYCGg0JWAIjaCpOdo6PdAsjy-LmReM8w6MebFVmOsiFDz-uP2VHE7ngKrdhkn7Qf_bGB5FMDAkeL3WK4rufCmBWHRPI")'}}></div>
              <div>
                <h3 className="font-bold text-base">Sam</h3>
                <p className="text-xs text-[#9a734c]">Premium Member</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1">
              <button 
                onClick={() => setActiveSection('overview')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group text-left ${activeSection === 'overview' ? 'bg-primary/20 border-l-4 border-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
              >
                <span className={`material-symbols-outlined ${activeSection === 'overview' ? 'text-primary' : 'text-[#9a734c]'} group-hover:scale-110 transition-transform`}>person</span>
                Profile
              </button>
              <button 
                onClick={() => setActiveSection('orders')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group text-left ${activeSection === 'orders' ? 'bg-primary/20 border-l-4 border-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
              >
                <span className={`material-symbols-outlined ${activeSection === 'orders' ? 'text-primary' : 'text-[#9a734c]'} group-hover:text-primary transition-colors`}>package</span>
                Order History
              </button>
              <button 
                onClick={() => setActiveSection('addresses')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group text-left ${activeSection === 'addresses' ? 'bg-primary/20 border-l-4 border-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
              >
                <span className={`material-symbols-outlined ${activeSection === 'addresses' ? 'text-primary' : 'text-[#9a734c]'} group-hover:text-primary transition-colors`}>location_on</span>
                Addresses
              </button>
              <button 
                onClick={() => setActiveSection('subscriptions')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group text-left ${activeSection === 'subscriptions' ? 'bg-primary/20 border-l-4 border-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
              >
                <span className={`material-symbols-outlined ${activeSection === 'subscriptions' ? 'text-primary' : 'text-[#9a734c]'} group-hover:text-primary transition-colors`}>coffee</span>
                Subscriptions
              </button>
              <button 
                onClick={() => setActiveSection('rewards')}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group text-left ${activeSection === 'rewards' ? 'bg-primary/20 border-l-4 border-primary font-bold' : 'hover:bg-[#f2ebd1]'}`}
              >
                <span className={`material-symbols-outlined ${activeSection === 'rewards' ? 'text-primary' : 'text-[#9a734c]'} group-hover:text-primary transition-colors`}>card_giftcard</span>
                Rewards
              </button>
            </nav>
            <div className="pt-8 border-t border-[#e5e0db]">
              <button 
                onClick={handleSignOut}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg w-full transition-all"
              >
                <span className="material-symbols-outlined">logout</span>
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <section className="flex-1 space-y-8">
          {/* Overview Section */}
          {activeSection === 'overview' && (
            <>
          {/* Page Heading & Profile Header */}
          <div className="bg-[#f2ebd1] rounded-2xl p-8 border border-[#f3ede7]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex gap-6 items-center">
                <div className="size-24 rounded-full bg-cover bg-center border-4 border-white shadow-sm" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDnupY6_uTMuSw22hq-STOJ3014z2HMqyFqVd25tTVZlpXtEUiP_fzCXF1F7eVVncdMjla1oZbW9V2AVOlTXE-V0qum7HHFPuAfIha_EwPlfVjxmVnSwOBvyh5BD6SmtsHlvZ7zkoRvoZWt2-KOhcscq1uXJ0YfWKcQv4Y0sZOAiXrM8hOO8ZLaM7rY4XP_I9qgCAmHx4p_xyIh-FJ9sOcxjYnRmDKTLNGQ3TxBAOBnIWdg49rrhkcLJVZXHeyCSC8myvW5o9NGP7Q")'}}></div>
                <div>
                  <h2 className="text-3xl font-black tracking-tight mb-1">Welcome back, Sam</h2>
                  <p className="text-[#9a734c] mb-1">arakuhillcoffee@gmail.com</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded">Member since Jan 2023</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[#1b140d] text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Profile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Rewards Progress */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e0db] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">stars</span>
                    Your Rewards Progress
                  </h3>
                  <span className="text-2xl font-black text-primary">850 <span className="text-xs text-[#9a734c] uppercase font-bold tracking-tighter">pts</span></span>
                </div>
                <p className="text-sm text-[#9a734c] mb-6">You're only 150 points away from a free bag of Araku Signature blend.</p>
                <div className="relative w-full h-3 bg-[#f2ebd1] rounded-full overflow-hidden mb-2">
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#9a734c]">
                  <span>Level: Gold</span>
                  <span>1000 Pts Target</span>
                </div>
              </div>
              <button 
                onClick={() => setActiveSection('rewards')}
                className="mt-8 text-sm font-bold text-primary hover:underline flex items-center gap-1"
              >
                View all rewards <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Subscription Snapshot */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5e0db] shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">event_repeat</span>
                Coffee Subscription
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="size-16 rounded-xl bg-[#f2ebd1] flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl text-primary">coffee_maker</span>
                </div>
                <div>
                  <p className="font-bold">The Explorer's Bundle</p>
                  <p className="text-xs text-[#9a734c]">Bi-weekly shipment • 2 bags</p>
                </div>
              </div>
              <div className="p-4 bg-[#f2ebd1] rounded-xl border border-dashed border-[#e5e0db]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#9a734c]">Next Delivery:</span>
                  <span className="font-bold">October 24, 2023</span>
                </div>
              </div>
              <button 
                onClick={() => setActiveSection('subscriptions')}
                className="mt-6 text-sm font-bold text-[#1b140d] hover:text-primary transition-colors underline decoration-primary underline-offset-4"
              >
                Manage Subscription
              </button>
            </div>
          </div>

          {/* Recent Orders Snapshot */}
          <div className="bg-white rounded-2xl border border-[#e5e0db] shadow-sm overflow-hidden">
            <div className="p-8 border-b border-[#e5e0db] flex justify-between items-center">
              <h3 className="text-xl font-bold">Recent Orders</h3>
              <button 
                onClick={() => setActiveSection('orders')}
                className="text-sm font-bold text-primary hover:underline"
              >
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-[#f2ebd1] text-[10px] font-black uppercase tracking-widest text-[#9a734c]">
                  <tr>
                    <th className="px-8 py-4">Order ID</th>
                    <th className="px-8 py-4">Date</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5e0db]">
                  <tr className="hover:bg-[#f2ebd1] transition-colors">
                    <td className="px-8 py-5 font-bold text-sm">#ARK-92841</td>
                    <td className="px-8 py-5 text-sm text-[#9a734c]">Oct 12, 2023</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        Delivered
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm">₹1,700</td>
                  </tr>
                  <tr className="hover:bg-[#f2ebd1] transition-colors">
                    <td className="px-8 py-5 font-bold text-sm">#ARK-92755</td>
                    <td className="px-8 py-5 text-sm text-[#9a734c]">Sep 28, 2023</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                        <span className="size-1.5 rounded-full bg-green-500"></span>
                        Delivered
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm">₹1,520</td>
                  </tr>
                  <tr className="hover:bg-[#f2ebd1] transition-colors">
                    <td className="px-8 py-5 font-bold text-sm">#ARK-92612</td>
                    <td className="px-8 py-5 text-sm text-[#9a734c]">Sep 14, 2023</td>
                    <td className="px-8 py-5">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-gray-100 text-gray-700">
                        <span className="size-1.5 rounded-full bg-gray-400"></span>
                        Returned
                      </span>
                    </td>
                    <td className="px-8 py-5 text-right font-bold text-sm">₹4,996</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
            </>
          )}

          {/* Order History Section */}
          {activeSection === 'orders' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-black">Order History</h2>
              <div className="bg-white rounded-2xl border border-[#e5e0db] shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-[#f2ebd1] text-[10px] font-black uppercase tracking-widest text-[#9a734c]">
                      <tr>
                        <th className="px-8 py-4">Order ID</th>
                        <th className="px-8 py-4">Date</th>
                        <th className="px-8 py-4">Items</th>
                        <th className="px-8 py-4">Status</th>
                        <th className="px-8 py-4 text-right">Total</th>
                        <th className="px-8 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e5e0db]">
                      <tr className="hover:bg-[#f2ebd1] transition-colors">
                        <td className="px-8 py-5 font-bold text-sm">#ARK-92841</td>
                        <td className="px-8 py-5 text-sm text-[#9a734c]">Oct 12, 2023</td>
                        <td className="px-8 py-5 text-sm">2 items</td>
                        <td className="px-8 py-5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                            <span className="size-1.5 rounded-full bg-green-500"></span>
                            Delivered
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right font-bold text-sm">₹1,700</td>
                        <td className="px-8 py-5">
                          <button className="text-sm font-bold text-primary hover:underline">View Details</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2ebd1] transition-colors">
                        <td className="px-8 py-5 font-bold text-sm">#ARK-92755</td>
                        <td className="px-8 py-5 text-sm text-[#9a734c]">Sep 28, 2023</td>
                        <td className="px-8 py-5 text-sm">1 item</td>
                        <td className="px-8 py-5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                            <span className="size-1.5 rounded-full bg-green-500"></span>
                            Delivered
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right font-bold text-sm">₹1,520</td>
                        <td className="px-8 py-5">
                          <button className="text-sm font-bold text-primary hover:underline">View Details</button>
                        </td>
                      </tr>
                      <tr className="hover:bg-[#f2ebd1] transition-colors">
                        <td className="px-8 py-5 font-bold text-sm">#ARK-92612</td>
                        <td className="px-8 py-5 text-sm text-[#9a734c]">Sep 14, 2023</td>
                        <td className="px-8 py-5 text-sm">3 items</td>
                        <td className="px-8 py-5">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-gray-100 text-gray-700">
                            <span className="size-1.5 rounded-full bg-gray-400"></span>
                            Returned
                          </span>
                        </td>
                        <td className="px-8 py-5 text-right font-bold text-sm">₹4,996</td>
                        <td className="px-8 py-5">
                          <button className="text-sm font-bold text-primary hover:underline">View Details</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Addresses Section */}
          {activeSection === 'addresses' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <h2 className="text-3xl font-black">Saved Addresses</h2>
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity lg:w-auto">
                  <span className="material-symbols-outlined text-lg">add</span>
                  Add New Address
                </button>
              </div>
              <div className="grid gap-6">
                <div className="bg-white rounded-2xl p-6 border border-[#e5e0db] shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-lg">Home</h3>
                      <span className="text-xs font-bold uppercase tracking-widest bg-primary/20 text-primary px-2 py-0.5 rounded">Default</span>
                    </div>
                    <button className="text-primary hover:text-primary/80">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </div>
                  <p className="text-[#9a734c] text-sm leading-relaxed">
                    123 Coffee Street, Araku Valley<br/>
                    Visakhapatnam District<br/>
                    Andhra Pradesh - 531149<br/>
                    Phone: +91 98765 43210
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-[#e5e0db] shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-bold text-lg">Office</h3>
                    <button className="text-primary hover:text-primary/80">
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </div>
                  <p className="text-[#9a734c] text-sm leading-relaxed">
                    456 Business Park, Hitech City<br/>
                    Hyderabad<br/>
                    Telangana - 500081<br/>
                    Phone: +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Subscriptions Section */}
          {activeSection === 'subscriptions' && (
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                <h2 className="text-3xl font-black">Coffee Subscriptions</h2>
                <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:opacity-90 transition-opacity lg:w-auto">
                  <span className="material-symbols-outlined text-lg">add</span>
                  New Subscription
                </button>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#e5e0db] shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-bold text-xl">The Explorer's Bundle</h3>
                    <p className="text-sm text-[#9a734c]">Bi-weekly shipment • 2 bags</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700 mt-2">
                      <span className="size-1.5 rounded-full bg-green-500"></span>
                      Active
                    </span>
                  </div>
                  <span className="text-2xl font-black text-primary">₹1,400/mo</span>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="p-4 bg-[#f2ebd1] rounded-xl">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#9a734c]">Next Delivery:</span>
                      <span className="font-bold">October 24, 2023</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#9a734c]">Delivery Frequency:</span>
                      <span className="font-bold">Every 2 weeks</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="w-full px-6 py-3 bg-[#1b140d] text-white font-bold rounded-lg hover:opacity-90 transition-opacity">
                    Modify Subscription
                  </button>
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-3 border-2 border-[#e5e0db] font-bold rounded-lg hover:bg-[#f2ebd1] transition-colors">
                      Pause
                    </button>
                    <button className="flex-1 px-6 py-3 border-2 border-red-200 text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rewards Section */}
          {activeSection === 'rewards' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-black">Rewards Program</h2>
              <div className="bg-white rounded-2xl p-8 border border-[#e5e0db] shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">Your Rewards Balance</h3>
                    <span className="text-4xl font-black text-primary">850 Points</span>
                    <p className="text-sm text-[#9a734c] mt-2">Gold Tier Member</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#9a734c] mb-1">Next Reward</p>
                    <p className="font-bold">150 points away</p>
                  </div>
                </div>
                <div className="relative w-full h-4 bg-[#f2ebd1] rounded-full overflow-hidden mb-6">
                  <div className="absolute top-0 left-0 h-full bg-primary rounded-full" style={{width: '85%'}}></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-6 bg-[#f2ebd1] rounded-xl text-center">
                    <span className="material-symbols-outlined text-4xl text-primary mb-2">local_cafe</span>
                    <p className="font-bold mb-1">Free Coffee</p>
                    <p className="text-xs text-[#9a734c]">1000 points</p>
                  </div>
                  <div className="p-6 bg-[#f2ebd1] rounded-xl text-center">
                    <span className="material-symbols-outlined text-4xl text-primary mb-2">card_giftcard</span>
                    <p className="font-bold mb-1">₹500 Voucher</p>
                    <p className="text-xs text-[#9a734c]">2000 points</p>
                  </div>
                  <div className="p-6 bg-[#f2ebd1] rounded-xl text-center">
                    <span className="material-symbols-outlined text-4xl text-primary mb-2">workspace_premium</span>
                    <p className="font-bold mb-1">Premium Bundle</p>
                    <p className="text-xs text-[#9a734c]">3500 points</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-[#e5e0db] shadow-sm">
                <h3 className="text-xl font-bold mb-4">Reward History</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e0db]">
                    <div>
                      <p className="font-bold">Order #ARK-92841</p>
                      <p className="text-xs text-[#9a734c]">Oct 12, 2023</p>
                    </div>
                    <span className="text-primary font-bold">+85 pts</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#e5e0db]">
                    <div>
                      <p className="font-bold">Redeemed: Free Coffee</p>
                      <p className="text-xs text-[#9a734c]">Sep 30, 2023</p>
                    </div>
                    <span className="text-red-600 font-bold">-1000 pts</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <p className="font-bold">Order #ARK-92755</p>
                      <p className="text-xs text-[#9a734c]">Sep 28, 2023</p>
                    </div>
                    <span className="text-primary font-bold">+76 pts</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

export default ProfilePage;
