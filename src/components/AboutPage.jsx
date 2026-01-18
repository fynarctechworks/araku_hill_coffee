import { useState } from 'react';

function AboutPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, subject, message } = formData;
    
    // Validate form
    if (!name || !email || !message) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Using Web3Forms API - Get your free access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '4effaf39-ea82-4dd1-a3cc-d6039eb162b1',
          name: name,
          email: email,
          subject: `Araku Hill Coffee - ${subject}`,
          message: message,
          to: 'arakuhillcoffee@gmail.com',
          from_name: 'Araku Hill Coffee Website',
          replyto: email,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Show success overlay
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: ''
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Failed to send message. Please try again or contact us directly at arakuhillcoffee@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex-1">
      {/* Gallery Hero Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-12 bg-background-light">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#1b140d]">Captured Moments</h1>
          <p className="text-lg text-[#6b5d52] max-w-2xl mx-auto">
            From the misty peaks of Araku Valley to your morning cup, explore
            the journey of our ethically sourced beans.
          </p>
        </div>
        {/* Masonry Image Grid */}
        <div className="masonry-grid gap-4 space-y-4">
          <div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="A barista preparing a specialty coffee pour"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsK8GzV-NZNzLSuIH73nvA8gice4vrkey3adCwVvnaXyoszL1NwHiqCsqt0rWF86nzEtbgak2y7EpTrbV519Pf6gKJcV_5z30C5dWeuf6Vh2gdXdK_IIt3XsD7x0vjv_PA9LN8kPr3Sr6Z5oti7HNZKP56bUjCrD7F25T-gAzPLboUbTi1s_Ekul6cdstpMuH_xIDC2uk77PzB-LOKuhoxYuG4DK5kinDw-L9MMoNqA88MEfqfDBAuitvwhLdkWBB3ESYcE8rsLpQ"
              alt="A barista preparing a specialty coffee pour"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">Artisanal Brewing</p>
            </div>
          </div>
          <div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Close up of raw green coffee beans"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdBlxJeZ05q1pi0hgmEIO3QZ93l9s397qcvEvaHgMuTznSM_h1fv7HmodS74Hao4HpheUI90xTPSv4gKUaCURaYfDnPuLUokpOdQMKdeYOuMLS_HgZ9j6_O8fewoFT7axcO_e-xAD8UeR66xcVGOrqeBT2e4iBhrBxfKWKP1jZn0NtU01J_4x5lZ1iGn3NSBfnJwKbOWgwXUW21GyeCjlvOxUtCW0swMf70PGSKl91nAIHfRE2Uc8E7L62sNEJ9a9Camq2taSkYg"
              alt="Close up of raw green coffee beans"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">Raw Harvest</p>
            </div>
          </div>
          <div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Misty landscape of coffee plantations in a valley"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaPfCAY_fJA9DVT9-hXZVRnek2M45sK1Tcdjf3sjKQvvxlkdBZ3ByV5uqP4dwzzbMwyqxZFD0fCT7bYwuTUCaHHBDQlg98GCoDD-Z7DK85HfqMQChx6qPZ7NM8w_vJDVNErzOJJvpOOg1zEOD3MA4DLDkKh3BWv05dVdTAIrlgVnsAGPAxQ4cE2WMJ8LNGp5MMJ5stinegoKYgA6lagMcEJwyuxty1fYKPHw64OR6Mtvsl_YAe_YEFN_9GFgeryLWLnqyIWznHD_U"
              alt="Misty landscape of coffee plantations in a valley"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">Araku Highlands</p>
            </div>
          </div>
          <div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Steaming cup of black coffee on a wooden table"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_QzXV7XHzhEFNrydhBOs_iN-zNN7sMmERX58-8_tf02o57err8mLVcYeNaYruYzHt0uAEXw0FMdNFYLQ_Xeuvm6JXlrCnOIV0qUVDqQevIOyydc0he_-ODYOfI8dz6gZES-6KRrjZEboK5qF5_b41IMylfpdFkGx71-a_yZRel8q2Y6jiJVtLCi-Qj9lSWz9XRx9QD859aga5nJJbaAj9pTKR0LysotVXpwBRS1KEXGAg7SQxCAj-iT0_090RcOa_hqhCg6jEHLY"
              alt="Steaming cup of black coffee on a wooden table"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">The Perfect Cup</p>
            </div>
          </div>
          <div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Hands holding fresh coffee cherries"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcx9UHUZ--YmB1hzoIo9XKQk2tD2H6bqJhHrhZawcNh3e0Oe92sh9vfDbN2pOxtf5XjxJ1nplPnms5xpoC4ZLKZnT1qGi1SLwDiamNAuTBcuKL9NbbnQysEdCvwFzB8eXFc2S2a4D40dISdtSmLFSXs1yAwm3k-RvQ4difJa1ryNVG7xqe_HjJd6KYZFdCMezyKF93_46HmlSAoZQbOoKHcY6UiNhHQsHU3T4GfMwP3vAVmay_XC3rnlC8ZftRCOydB_L60l_70No"
              alt="Hands holding fresh coffee cherries"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">Sustainable Farming</p>
            </div>
          </div>
          <div className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-sm">
            <img
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-alt="Industrial coffee roaster in operation"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhrwmbWm1FH5XepnxI35Z34r_-cpq3f9Oezxg1uvLk7sfNXux42-5DpBpVSf0xHZ8AGOoPHZHiQGt_4QQ3Ba23p6YhbcZdzUqHCRTM9894Eg8wSHhmQhi-t1uwpi2QFALdaIY8O6Z-acMgtVCeTslZ9Ddk4w8LkqPy83zizKjBjkIVhswiVn9hD10vn5QFbjfxjNrlMLGcbJ3VixNR5foo9iHXdvBu7kyiJpBK_xh9YJdRUgExxcGYu2ek0KpHq8FOvTRIqkx43VY"
              alt="Industrial coffee roaster in operation"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <p className="text-white font-medium">Roasting Process</p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-[#6b5d52] uppercase tracking-widest mb-4">
            Follow our story
          </p>
          <a
            className="text-primary font-bold hover:underline flex items-center justify-center gap-2"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">camera</span>
            @araku_hill_coffee
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[#1b140d]">Get in Touch</h2>
            <p className="text-[#6b5d52]">
              Have questions about our beans or wholesale opportunities? We'd
              love to hear from you.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1b140d]">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e5e0db] bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1b140d]">
                      Email Address
                    </label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#e5e0db] bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder="john@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1b140d]">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#e5e0db] bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                  >
                    <option>General Inquiry</option>
                    <option>Wholesale Partnership</option>
                    <option>Feedback</option>
                    <option>Support</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1b140d]">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#e5e0db] bg-transparent focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Tell us how we can help..."
                    rows={5}
                    required
                  />
                </div>
                <button
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-[#e5e0db]">
                <div className="flex flex-col items-center text-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    phone
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tighter text-[#1b140d]">
                    Call Us
                  </span>
                  <span className="text-sm text-[#6b5d52]">+91 9963940369</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    mail
                  </span>
                  <span className="text-xs font-bold uppercase tracking-tighter text-[#1b140d]">
                    Email Us
                  </span>
                  <span className="text-sm text-[#6b5d52]">
                    arakuhillcoffee@gmail.com
                  </span>
                </div>
              </div>
            </div>
            {/* Map Integration */}
            <div className="flex flex-col gap-6">
              <div className="h-[450px] w-full rounded-2xl overflow-hidden shadow-xl bg-gray-100 relative">
                {/* Placeholder for Google Map with data-location */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
                  data-alt="Satellite map view of the lush Araku Valley coffee region"
                  data-location="Araku Valley"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAui5Ro6UM5z8xE7zUTEBA74Dzq0cAl2zxespPMIdYupGgvOTkbo1g-p6tXbIR-8iRpoliFjF2pm8cb0WpEHhArt-X9m3lWDT5fmizQCc8uectZEnNcR6TAHFRivsEZhCgSWTkhZqX8VJcwYWMop-WP6BEYNQbrI_yAYCSwAPr1bY1Es2VuzPNq7AqM5Wh_TkEALPEtfas2yQwZ_noWM4kdELWoaY2sXz1Yt8wFtGd-B9qzPjNcR3u9VbKh5Zx9R80HTNSQBp_QJY")'
                  }}
                >
                  <div className="bg-white/90 p-6 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs backdrop-blur-sm">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold text-sm text-[#1b140d]">Araku Valley Roastery</p>
                      <p className="text-xs text-[#6b5d52]">
                        Main Road, Araku Valley, Andhra Pradesh 531149
                      </p>
                    </div>
                  </div>
                </div>
                {/* Aesthetic Overlay for Map Branding */}
                <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none" />
              </div>
              <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
                <h3 className="font-bold mb-2 flex items-center gap-2 text-[#1b140d]">
                  <span className="material-symbols-outlined text-primary">
                    directions
                  </span>
                  Visit Our Roastery
                </h3>
                <p className="text-sm leading-relaxed text-[#6b5d52]">
                  Experience the magic of coffee production first-hand. Join us
                  for weekly tasting sessions and tours through our plantation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white dark:bg-[#2c2116] rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-slide-in-up">
            <div className="mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="material-symbols-outlined text-green-600 text-5xl">check_circle</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1b140d] dark:text-white mb-2">Message Sent!</h3>
              <p className="text-[#9a734c] text-sm">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
            <button
              onClick={() => {
                setShowSuccess(false);
                onNavigate && onNavigate('home');
              }}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-all shadow-lg shadow-primary/20"
            >
              Back to Home
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default AboutPage;
