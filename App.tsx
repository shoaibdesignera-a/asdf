
import React, { useState } from 'react';
import { 
  Search, MapPin, Home as HomeIcon, Bath, BedDouble, Square, 
  ChevronRight, ArrowRight, Star, Quote, Mail, Phone, Instagram, 
  Facebook, Twitter, Youtube, CheckCircle2, Building2, Sofa, PaintBucket 
} from 'lucide-react';
import Navbar from './components/Navbar';
import AIChatAssistant from './components/AIChatAssistant';
import { Page } from './types';
import { PROPERTIES, FURNITURE, PAINTS } from './constants';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderHome = () => (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left-10 duration-1000">
            <span className="text-gold font-bold tracking-widest uppercase mb-4 block">Redefining Luxury Living</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-serif">
              Elevate Your <span className="text-gold italic">Lifestyle</span> With MM&GG
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-lg">
              MM&GG Real Estate and Property Ltd offers elite property solutions, luxury furnishings, and premium finishes to turn your house into a masterpiece.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setCurrentPage(Page.Properties)}
                className="bg-gold text-primary font-bold px-8 py-4 rounded-md hover:bg-gold/90 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Explore Properties <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setCurrentPage(Page.Furniture)}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold px-8 py-4 rounded-md hover:bg-white/20 transition-all"
              >
                Furnish Your Space
              </button>
            </div>
          </div>
        </div>

        {/* Floating Search Bar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 hidden md:block z-20">
          <div className="bg-white rounded-2xl shadow-2xl p-6 flex flex-wrap lg:flex-nowrap items-center gap-4 border border-gold/20">
            <div className="flex-1 flex items-center gap-3 border-r border-gray-100 pr-4">
              <Search className="text-gold" />
              <input type="text" placeholder="Location, Neighborhood..." className="w-full focus:outline-none text-gray-700" />
            </div>
            <div className="flex-1 flex items-center gap-3 border-r border-gray-100 pr-4">
              <HomeIcon className="text-gold" />
              <select className="w-full focus:outline-none text-gray-700 bg-transparent">
                <option>Property Type</option>
                <option>Villa</option>
                <option>Apartment</option>
              </select>
            </div>
            <div className="flex-1 flex items-center gap-3 pr-4">
              <div className="text-gold font-bold">$</div>
              <input type="text" placeholder="Price Range" className="w-full focus:outline-none text-gray-700" />
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Completed Projects', value: '500+' },
          { label: 'Happy Families', value: '1.2k+' },
          { label: 'Awards Won', value: '25' },
          { label: 'Property Assets', value: '$450M' }
        ].map((stat, i) => (
          <div key={i} className="text-center p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gold/30 transition-all hover:bg-white hover:shadow-xl group">
            <h3 className="text-3xl font-bold text-primary mb-2 group-hover:text-gold transition-colors">{stat.value}</h3>
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Featured Properties Preview */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Exquisite Properties</h2>
            <div className="w-20 h-1 bg-gold"></div>
          </div>
          <button 
            onClick={() => setCurrentPage(Page.Properties)}
            className="text-primary font-bold flex items-center gap-2 hover:text-gold transition-colors"
          >
            View All Listings <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {PROPERTIES.map((p) => (
            <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
              <div className="relative h-64">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-primary font-bold px-4 py-1 rounded-full text-sm">
                  {p.type}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-primary">{p.title}</h3>
                  <span className="text-gold font-bold text-xl">{p.price}</span>
                </div>
                <p className="text-gray-500 flex items-center gap-1 mb-6">
                  <MapPin size={16} /> {p.location}
                </p>
                <div className="flex justify-between border-t pt-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-2"><BedDouble size={18} className="text-gold" /> {p.beds} Beds</span>
                  <span className="flex items-center gap-2"><Bath size={18} className="text-gold" /> {p.baths} Baths</span>
                  <span className="flex items-center gap-2"><Square size={18} className="text-gold" /> {p.sqft} sqft</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Total Home Ecosystem</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">From construction to curation, MM&GG provides a holistic approach to luxury living.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-gold/50 transition-all">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building2 className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Property Management</h3>
              <p className="text-gray-400 leading-relaxed mb-6">Full lifecycle management of your real estate assets with maximum ROI and care.</p>
              <button onClick={() => setCurrentPage(Page.Properties)} className="text-gold font-bold hover:underline">View Portfolio</button>
            </div>
            
            <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-gold/50 transition-all">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Sofa className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Luxury Furniture</h3>
              <p className="text-gray-400 leading-relaxed mb-6">Hand-picked, high-end furniture to match the architectural grandeur of your home.</p>
              <button onClick={() => setCurrentPage(Page.Furniture)} className="text-gold font-bold hover:underline">Shop Collection</button>
            </div>

            <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10 hover:border-gold/50 transition-all">
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <PaintBucket className="text-gold" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Paints</h3>
              <p className="text-gray-400 leading-relaxed mb-6">Environmentally conscious, ultra-durable paints with royal finishes for every surface.</p>
              <button onClick={() => setCurrentPage(Page.Paints)} className="text-gold font-bold hover:underline">Pick a Palette</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="bg-gray-50 rounded-[40px] p-12 md:p-20 relative">
          <Quote className="absolute top-10 right-10 text-gold/10 w-40 h-40" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">What Our Elite Clients Say</h2>
              <div className="flex gap-1 mb-8">
                {[1,2,3,4,5].map(s => <Star key={s} fill="#c5a059" className="text-gold" />)}
              </div>
              <p className="text-2xl font-serif italic text-gray-700 leading-relaxed mb-10">
                "MM&GG didn't just find me a house; they curated a lifestyle. The transition from picking the property to selecting the furniture and final paint touches was seamless."
              </p>
              <div>
                <h4 className="font-bold text-primary text-xl">Jonathan Sterling</h4>
                <p className="text-gray-500">CEO, Sterling Holdings</p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl rotate-2">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000" alt="Consultant" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderProperties = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Property Portfolio</h2>
        <div className="w-20 h-1 bg-gold mb-6"></div>
        <div className="flex flex-wrap gap-4">
          {['All', 'Villa', 'Apartment', 'Penthouse', 'Office'].map(cat => (
            <button key={cat} className="px-6 py-2 rounded-full border border-gray-200 hover:bg-primary hover:text-white transition-all">
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {PROPERTIES.map(p => (
           <div key={p.id} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
           <div className="relative h-64">
             <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
             <div className="absolute top-4 left-4 bg-primary text-white font-bold px-4 py-1 rounded-full text-xs">
               NEW LISTING
             </div>
           </div>
           <div className="p-6">
             <h3 className="text-xl font-bold text-primary mb-2">{p.title}</h3>
             <p className="text-gray-500 text-sm mb-4 flex items-center gap-1"><MapPin size={14} /> {p.location}</p>
             <div className="flex justify-between items-center">
               <span className="text-gold font-bold text-2xl">{p.price}</span>
               <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold">Inquire</button>
             </div>
           </div>
         </div>
        ))}
      </div>
    </div>
  );

  const renderProductGrid = (items: typeof FURNITURE, title: string) => (
    <div className="max-w-7xl mx-auto px-4 py-20">
       <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">{title}</h2>
        <div className="w-20 h-1 bg-gold"></div>
      </div>
      <div className="grid md:grid-cols-4 gap-8">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-64 overflow-hidden relative">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <button className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-primary mb-1">{item.name}</h3>
              <p className="text-gray-500 text-xs mb-3 line-clamp-2">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-gold font-bold">{item.price}</span>
                <button className="text-xs font-bold text-primary hover:text-gold">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid md:grid-cols-2">
        <div className="bg-primary p-12 text-white">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-12">Contact us for exclusive property viewings, custom furniture inquiries, or professional painting consultations.</p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <Mail className="text-gold" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email Us</p>
                <p className="font-bold">hello@realestate.ltd</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <Phone className="text-gold" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Call Us</p>
                <p className="font-bold">+1 (800) MMGG-REAL</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30">
                <MapPin className="text-gold" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Main Office</p>
                <p className="font-bold">Luxury Row, Suite 400, NY</p>
              </div>
            </div>
          </div>

          <div className="mt-20 flex gap-4">
            <Facebook className="text-gray-400 hover:text-gold cursor-pointer" />
            <Twitter className="text-gray-400 hover:text-gold cursor-pointer" />
            <Instagram className="text-gray-400 hover:text-gold cursor-pointer" />
            <Youtube className="text-gray-400 hover:text-gold cursor-pointer" />
          </div>
        </div>
        
        <div className="p-12">
          <h3 className="text-2xl font-bold text-primary mb-8">Send an Inquiry</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Service Type</label>
              <select className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20">
                <option>Real Estate Inquiry</option>
                <option>Furniture Customization</option>
                <option>Paint Consultation</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gold/20"></textarea>
            </div>
            <button className="w-full bg-gold text-primary font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all" onClick={(e) => e.preventDefault()}>
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case Page.Home: return renderHome();
      case Page.Properties: return renderProperties();
      case Page.Furniture: return renderProductGrid(FURNITURE, 'Curated Furniture');
      case Page.Paints: return renderProductGrid(PAINTS, 'Elite Paints & Finishes');
      case Page.Contact: return renderContact();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar activePage={currentPage} onNavigate={setCurrentPage} />
      
      <main>
        {renderContent()}
      </main>

      <footer className="bg-primary text-white pt-20 pb-10 border-t border-gold/20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Logo className="scale-100 origin-left mb-8" />
            <p className="text-gray-400 max-w-sm mb-8">
              MM&GG Real Estate and Property Ltd represents the pinnacle of premium lifestyle solutions. 
              We don't just sell property; we build legacies.
            </p>
            <div className="flex gap-4">
              <CheckCircle2 className="text-gold" />
              <span className="text-sm font-medium">Licensed Premium Property Brokerage</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-gold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-gold cursor-pointer" onClick={() => setCurrentPage(Page.Properties)}>Listings</li>
              <li className="hover:text-gold cursor-pointer" onClick={() => setCurrentPage(Page.Furniture)}>Interior Shop</li>
              <li className="hover:text-gold cursor-pointer" onClick={() => setCurrentPage(Page.Paints)}>Paint Palettes</li>
              <li className="hover:text-gold cursor-pointer" onClick={() => setCurrentPage(Page.Contact)}>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Get exclusive access to off-market luxury deals.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email" className="bg-white/10 border border-white/20 rounded-md px-3 py-2 flex-1 focus:outline-none" />
              <button className="bg-gold text-primary px-4 py-2 rounded-md font-bold">Join</button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 border-t border-white/10 pt-10 text-center text-gray-500 text-xs">
          <p>© 2024 MM&GG Real Estate and Property Ltd. All Rights Reserved. Built for realestate.ltd</p>
        </div>
      </footer>

      <AIChatAssistant />
    </div>
  );
};

export default App;
