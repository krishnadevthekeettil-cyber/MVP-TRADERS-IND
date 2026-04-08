import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronLeft,
  Truck,
  RotateCcw,
  Headphones,
  CreditCard,
  Play,
  Gift,
  Phone,
  Mail,
  Star,
  ArrowUpRight,
  X,
  MessageSquare,
  ShieldCheck,
  Package,
  Rocket,
  Instagram
} from 'lucide-react';
import { useForm } from 'react-hook-form';

interface LeadForm {
  name: string;
  mobile: string;
  identifyAs: string;
}

interface ClientVoucherForm {
  name: string;
  email: string;
  phone: string;
}

const dealerData = [
  {
    category: "TMT Bars",
    items: ["Tata Tiscon 550 D", "Jindal Panther 550D", "Shyam Steel Flexi Strong- 550D", "Minar Tempcore -550D"]
  },
  {
    category: "Roofing Sheets",
    items: ["Tata Durashine (Dealer)", "JSW Colouron Plus (Stocking)", "JSW Pragati Plus (Stocking)"]
  },
  {
    category: "Handling Roofing Sheets",
    items: ["Jindal Sabrang", "Appolo", "JSW Steel", "Nippon", "Etc"]
  },
  {
    category: "Cement",
    items: ["ACC", "UltraTech", "Dalmia", "Malabar"]
  },
  {
    category: "V-Board",
    items: ["Birla Aerocon (Dealer)", "Aerocon (Panel Board)"]
  },
  {
    category: "Sheets & Blocks",
    items: ["GP Sheet (AMNS)", "Japan Sheet", "Asbestos (Everest Dealer)", "AAC Block (Renocon)"]
  },
  {
    category: "Mortar & White Cement",
    items: ["Compact Mortar", "Ultra White Cement"]
  },
  {
    category: "Rainwater Gutter",
    items: ["Euroguard (Dealer)", "Aquastar (Dealer)", "Dewdrops (Dealer)"]
  },
  {
    category: "Roofing Pipes",
    items: ["Appolo", "ISI-RKS", "Nezone", "Tata GI Square"]
  },
  {
    category: "Epoxy Paint",
    items: ["Shalimar (Dealer)", "Amcos (Stocking)"]
  },
  {
    category: "Fencing & Mesh",
    items: ["Tata & Jindal Chainlink", "Roll Mesh", "Sheet Mesh", "TMT Rings"]
  },
  {
    category: "Other Essentials",
    items: ["Polycarbon (Naturelite)", "Goat Mat", "Dog Mat", "Watertank", "Drums", "Barrel"]
  }
];

export default function Home() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);
  const [activeStage, setActiveStage] = useState(0);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<LeadForm>();
  const { 
    register: registerVoucher, 
    handleSubmit: handleSubmitVoucher, 
    reset: resetVoucher, 
    formState: { errors: errorsVoucher } 
  } = useForm<ClientVoucherForm>();

  const onSubmit = async (data: LeadForm) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // WhatsApp Redirection
      const message = `*welcome to MVP Traders family *%0A%0A` +
        `*Name:* ${data.name}%0A` +
        `*Mobile:* ${data.mobile}%0A` +
        `*Identify As:* ${data.identifyAs}`;
      
      window.open(`https://wa.me/917559965029?text=${message}`, '_blank');

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting lead:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onVoucherSubmit = async (data: ClientVoucherForm) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const message = `*New Client/Voucher Request from MVP Traders*%0A%0A` +
        `*Name:* ${data.name}%0A` +
        `*Email:* ${data.email}%0A` +
        `*Phone:* ${data.phone}`;
      
      window.open(`https://wa.me/917559965029?text=${message}`, '_blank');

      setIsSubmitted(true);
      resetVoucher();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting voucher form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden py-20 lg:py-0">
        <div className="absolute inset-0 z-0">
          {/* Desktop Image */}
          <img 
            src="https://wallpapers.com/images/featured/elephant-laptop-q3nfxlsda8kdywfp.jpg" 
            alt="Hero Background Desktop" 
            className="hidden lg:block w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Mobile Image */}
          <img 
            src="https://img.freepik.com/premium-photo/yellow-clock-with-yellow-background-that-says-tools-tools_1103290-64372.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Hero Background Mobile" 
            className="block lg:hidden w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-center lg:text-left"
          >
            <span className="text-[#4ADE80] font-bold text-base sm:text-lg mb-4 block font-display">
              Building your dream project?
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 lg:mb-12 leading-[1.1] font-display tracking-tight">
              <span className="lg:hidden bg-clip-text text-transparent bg-cover bg-center block text-7xl sm:text-8xl font-black tracking-tighter" 
                style={{ 
                  backgroundImage: 'url("https://thumbs.dreamstime.com/b/vector-construction-pattern-construction-seamless-background-vector-illustration-vector-construction-pattern-construction-seamless-113988675.jpg")',
                  filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.3))'
                }}>
                MVP TRADERS
              </span>
              <span className="hidden lg:block">
                Get the quality hardware <br className="hidden sm:block" /> you deserve. Faster.
              </span>
            </h1>

            <div className="space-y-4 sm:space-y-6 max-w-lg mx-auto lg:mx-0">
              {[
                { text: "10,000+ premium products", sub: "in stock from top brands" },
                { text: "Same-day delivery", sub: "for all local orders today" },
                { text: "Expert technical advice", sub: "from seasoned professionals" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="relative flex items-center gap-4 sm:gap-6 bg-[#111] border border-white/5 p-4 sm:p-6 rounded-sm group hover:border-white/20 transition-all text-left"
                >
                  <div className="absolute -top-[1px] -left-[1px] w-2 h-2 border-t border-l border-white/20"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-white/20"></div>

                  <div className="w-8 h-8 bg-[#A3E635] rounded-full flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(163,230,53,0.3)]">
                    <svg className="w-4 h-4 text-[#0A0A0A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold font-display tracking-tight leading-snug">
                      <span className="text-white">{item.text}</span>
                      <span className="text-gray-500 font-medium block sm:inline"> {item.sub}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative flex justify-center w-full"
          >
            <div className="relative bg-white rounded-[2rem] sm:rounded-[2.8rem] p-6 sm:p-8 lg:p-10 w-full max-w-[420px] shadow-2xl border border-gray-100">
              <h2 className="text-xl sm:text-2xl font-black text-[#1A1A1A] mb-6 sm:mb-8 font-display leading-tight">
                Welcome to join our MVP family! This helps you to stay updated.
              </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  <div className="space-y-3">
                    <label className="text-xs sm:text-sm font-bold text-gray-400 font-display">Experience</label>
                    <div className="space-y-2 sm:space-y-3">
                      {[
                        'Professional Contractor - Large Scale',
                        'Industrial Builder - Commercial',
                        'Home Owner - Renovation',
                        'DIY Enthusiast - Small Projects',
                        'Others'
                      ].map((option) => (
                        <label key={option} className="flex items-center gap-3 cursor-pointer group">
                          <div className="relative flex items-center justify-center">
                            <input 
                              type="radio" 
                              {...register('identifyAs', { required: true })} 
                              value={option}
                              className="peer appearance-none w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 rounded-full checked:border-[#F15A24] transition-all"
                            />
                            <div className="absolute w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#F15A24] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                          </div>
                          <span className="text-gray-600 font-medium text-xs sm:text-sm group-hover:text-[#1A1A1A] transition-colors">{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-bold text-gray-400 font-display">Select category of interest</label>
                    <div className="relative">
                      <select 
                        className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-xl text-gray-500 text-xs sm:text-sm outline-none focus:border-[#F15A24] transition-all appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled>Select your options/choices</option>
                        <option value="iron">Iron Bars & Pipes</option>
                        <option value="roofing">Roofing Sheets</option>
                        <option value="power">Power Tools</option>
                        <option value="cement">Cement & Bricks</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs sm:text-sm font-bold text-gray-400 font-display">Name</label>
                    <input 
                      {...register('name', { required: true })}
                      className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-xl text-[#1A1A1A] text-xs sm:text-sm outline-none focus:border-[#F15A24] transition-all"
                      placeholder="Enter name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-bold text-gray-400 font-display">Phone Number</label>
                    <input 
                      {...register('mobile', { required: true, pattern: /^\d{10}$/ })}
                      className="w-full px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-xl text-[#1A1A1A] text-xs sm:text-sm outline-none focus:border-[#F15A24] transition-all"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-[#F15A24] text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#D94E1F] transition-all shadow-lg shadow-[#F15A24]/20 disabled:opacity-50 font-display"
                  >
                    {isSubmitting ? 'Sending...' : 'submit'}
                  </button>

                  <p className="text-[9px] text-gray-400 text-center leading-tight">
                    I authorise MVP Traders to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to <button type="button" onClick={() => setModalContent('privacy')} className="underline cursor-pointer hover:text-[#F15A24] transition-colors">Privacy Policy</button> & <button type="button" onClick={() => setModalContent('terms')} className="underline cursor-pointer hover:text-[#F15A24] transition-colors">Terms of use</button>
                  </p>
                </form>
              </div>
            </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section 
        className="py-16 sm:py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://c4.wallpaperflare.com/wallpaper/125/1003/655/metal-pattern-floor-non-slip-wallpaper-preview.jpg")`
        }}
      >
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90(#fff 1px, transparent 1px)`,
               backgroundSize: '40px 40px'
             }}>
        </div>

        <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 select-none pointer-events-none w-full text-center">
          <h2 className="text-[22vw] sm:text-[18vw] lg:text-[15vw] font-black leading-none tracking-tighter opacity-[0.05]" 
              style={{ 
                WebkitTextStroke: '1.5px rgba(255,255,255,0.3)', 
                color: 'transparent' 
              }}>
            WHY US
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <div className="relative group max-w-[360px] mx-auto lg:ml-auto lg:mr-0 w-full">
              <div className="bg-white rounded-2xl p-2.5 border border-gray-100 shadow-2xl overflow-hidden">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-5">
                  <img 
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYXZeRcdBz28C2dXgKxgMpFKTqRdVNLZgoQ3H7Und2GRNpEjsm48YROF-XGiW7SfENRNoSHYmlg6ip5rmHTHngjHqAUpG9itIKdoEMIUYoEUXj8YCgon1_nZhs2aX2HNmtyhFJOCUfNF0/w1200-h630-p-k-no-nu/hqdefault.jpg" 
                    alt="Hardware Expert" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    <div className="relative">
                      <Headphones className="w-4 h-4 text-white/80" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-5 bg-white/80 rotate-45"></div>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-4 right-4">
                    <p className="text-white text-sm font-bold text-center leading-tight tracking-tight">
                      "Quality hardware is the foundation of every strong project."
                    </p>
                  </div>
                </div>
                
                <div className="px-3 pb-3 flex justify-between items-end">
                  <div>
                    <h3 className="text-[#F15A24] text-xl font-bold tracking-tight mb-0.5 font-display">Prabu Parameswaran</h3>
                    <p className="text-gray-500 text-[11px] font-medium"> founder | MVP Traders</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[11px] font-bold text-gray-400">
                    12
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#F15A24]/5 blur-[80px] -z-10"></div>
            </div>

            <div className="space-y-6 max-w-lg mx-auto lg:mx-0 w-full">
              {[
                { 
                  icon: MessageSquare, 
                  title: 'Fastest 1:1 project support'
                },
                { 
                  icon: ShieldCheck, 
                  title: 'Expert hardware consultants'
                },
                { 
                  icon: Package, 
                  title: 'Bulk delivery assistance'
                },
              ].map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ 
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://img.freepik.com/free-photo/close-up-mineral-background_23-2151930716.jpg?semt=ais_incoming&w=740&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                  className="border border-white/10 p-6 rounded-[2rem] flex items-center gap-6 hover:border-[#F15A24]/50 transition-all group cursor-default shadow-2xl relative overflow-hidden"
                >
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                    <benefit.icon className="w-7 h-7 text-[#F15A24] group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-white font-black text-lg sm:text-xl group-hover:text-[#F15A24] transition-colors font-display tracking-tight">{benefit.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Section above Dealers */}
      <section className="w-full bg-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
            <img 
              src="https://i.ibb.co/BHV7HKwZ/Whats-App-Image-2026-03-31-at-2-37-22-PM.jpg" 
              alt="Section Banner" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* We are the dealers of Section */}
      <section className="py-16 sm:py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1A1A1A] font-display tracking-tight mb-4">
                We are the dealers of
              </h2>
              <p className="text-gray-500 text-base font-medium max-w-2xl">
                We take pride in being authorized dealers and stockists for the industry's most trusted brands, ensuring you get authentic quality for every project.
              </p>
            </div>
            <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-sm border border-gray-100 w-fit">
              <div className="px-4 py-2 bg-[#F15A24] text-white rounded-full text-xs font-bold uppercase tracking-widest">
                Authorized
              </div>
              <div className="px-4 py-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                Premium
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dealerData.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-[#F15A24] rounded-full group-hover:scale-y-110 transition-transform"></div>
                  <h3 className="text-[#1A1A1A] font-black text-xl uppercase tracking-tight font-display leading-none">{cat.category}</h3>
                </div>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-gray-600 text-sm font-medium flex items-start gap-3 group/item">
                      <ChevronRight className="w-4 h-4 text-[#F15A24] shrink-0 mt-0.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                      <span className="-translate-x-7 group-hover/item:translate-x-0 transition-transform duration-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block">
          <svg width="200" height="400" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C20 20 10 40 10 70C10 100 20 130 40 150" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            {[...Array(8)].map((_, i) => (
              <path key={i} d={`M${15 + i*2} ${30 + i*20}L${5 + i*2} ${25 + i*20}`} stroke="white" strokeWidth="2" strokeLinecap="round"/>
            ))}
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden lg:block scale-x-[-1]">
          <svg width="200" height="400" viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20C20 20 10 40 10 70C10 100 20 130 40 150" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            {[...Array(8)].map((_, i) => (
              <path key={i} d={`M${15 + i*2} ${30 + i*20}L${5 + i*2} ${25 + i*20}`} stroke="white" strokeWidth="2" strokeLinecap="round"/>
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 font-display tracking-tight">
            Trusted by professionals
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto mb-16 leading-relaxed font-sans">
            10,000+ MVP Hardware customers from 500+ construction firms & 200+ industrial projects using our premium tools and materials.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-center justify-center max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-4 group">
              <div className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center shadow-lg shadow-[#1877F2]/20 transition-transform group-hover:scale-110">
                <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white font-display">4.9</span>
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">700+ reviews</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 overflow-hidden p-3">
                <svg viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white font-display">4.7</span>
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">2300+ reviews</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 group">
              <div className="w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white font-display">4.8</span>
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Product rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Truck, title: 'Free shipping', desc: 'Enjoy the convenience of free shipment on all your orders.' },
            { icon: RotateCcw, title: 'Easy refund', desc: 'Shop with confidence that our easy refund policy has got you covered.' },
            { icon: Headphones, title: 'Online support', desc: 'Our dedicated online support team is just a click away.' },
            { icon: CreditCard, title: 'Flexible payment', desc: 'We understand that flexibility is key when it comes to payments.' },
          ].map((feature, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <feature.icon className="w-8 h-8 mb-6 text-gray-400" />
              <h4 className="text-xs font-black uppercase mb-2">{feature.title}</h4>
              <p className="text-[10px] text-gray-500 leading-relaxed max-w-[180px]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Supply Model Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center shadow-sm">
              <Rocket className="w-6 h-6 text-[#1A1A1A]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1A1A1A] font-display tracking-tight">
              A 3-stage supply model to build your dream project
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              {[
                {
                  title: 'Source',
                  desc: 'Premium hardware and construction materials sourced from top-tier global brands.',
                  image: 'https://pbs.twimg.com/media/EGGjjeGVUAE-zQD.jpg'
                },
                {
                  title: 'Consult',
                  desc: 'Get expert 1:1 guidance from our hardware consultants to choose the right tools.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsD8WuwTqoirXg2_iHOmKFieGXNmRT0CTpoA&s'
                },
                {
                  title: 'Build',
                  desc: 'Execute your projects with professional-grade materials that stand the test of time.',
                  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxit8aQPLQ86pEqx00oHMQBuAdeXOHMSDhBA&s'
                }
              ].map((stage, i) => (
                <div 
                  key={i}
                  onMouseEnter={() => setActiveStage(i)}
                  className={`relative pl-8 cursor-pointer transition-all duration-500 ${activeStage === i ? 'opacity-100' : 'opacity-40'}`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ${activeStage === i ? 'bg-[#F15A24]' : 'bg-gray-200'}`}></div>
                  <h3 className="text-2xl font-black text-[#1A1A1A] mb-3 font-display uppercase tracking-tight">{stage.title}</h3>
                  <p className="text-gray-500 font-medium leading-relaxed max-w-sm">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            <div id="gift-form" className="relative">
              <div className="relative border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden group">
                {/* Background Image */}
                <img 
                  src="https://assets.avant.org.au/cdf6134c-01d7-0292-26f5-2f5cf1db96f8/1d0ae12b-76f5-4920-846b-394340a3fe1f/How-to-avoid-trouble-when-a-patient-offers-you-a-gift-Hero.jpg" 
                  alt="Gift Giving" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
                
                <div className="relative z-10">
                  <div className="absolute -top-12 -left-8 w-full h-1 bg-gradient-to-r from-transparent via-[#F15A24] to-transparent opacity-50"></div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight mb-2">apply for monthly gift voucher </h3>
                    <p className="text-gray-300 text-sm font-sans">Become a future client , enter your  details for monthly gift vouchers.</p>
                  </div>

                  <form onSubmit={handleSubmitVoucher(onVoucherSubmit)} className="space-y-6">
                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Full Name</label>
                      <input 
                        {...registerVoucher('name', { required: true })}
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#F15A24] transition-all placeholder:text-gray-500"
                        placeholder="Your Name"
                      />
                      {errorsVoucher.name && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">Required</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                      <input 
                        {...registerVoucher('email', { required: true, pattern: /^\S+@\S+$/i })}
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#F15A24] transition-all placeholder:text-gray-500"
                        placeholder="hello@example.com"
                      />
                      {errorsVoucher.email && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">Valid email required</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input 
                        {...registerVoucher('phone', { required: true, pattern: /^\d{10}$/ })}
                        className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-[#F15A24] transition-all placeholder:text-gray-500"
                        placeholder="10-digit number"
                      />
                      {errorsVoucher.phone && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">10-digit number required</p>}
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-[#F15A24] text-white py-4 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-[#D94E1F] transition-all shadow-xl shadow-[#F15A24]/20 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Processing...' : 'Submit Request'}
                    </button>
                  </form>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#F15A24]/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Legal Modal */}
      <AnimatePresence>
        {modalContent && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalContent(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden max-h-[80vh] flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                <h3 className="text-xl font-black font-display uppercase tracking-tight">
                  {modalContent === 'privacy' ? 'Privacy Policy' : 'Terms of Use'}
                </h3>
                <button 
                  onClick={() => setModalContent(null)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto font-sans text-sm text-gray-600 leading-relaxed space-y-6">
                {modalContent === 'privacy' ? (
                  <>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">1. Data Collection</h4>
                      <p>We collect information you provide directly to us, such as when you fill out our lead form, including your name, phone number, and email address. This data is used solely to provide you with information about our products and services.</p>
                    </section>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">2. Use of Information</h4>
                      <p>Your information allows us to contact you regarding your interest in our hardware products, provide quotes, and offer technical advice. We do not sell or share your personal data with third parties for their marketing purposes.</p>
                    </section>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">3. Data Security</h4>
                      <p>We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is only accessible by authorized personnel.</p>
                    </section>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">4. Your Rights</h4>
                      <p>You have the right to access, correct, or delete your personal information at any time. Please contact us at hello@mvptraders.com for any data-related requests.</p>
                    </section>
                  </>
                ) : (
                  <>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">1. Acceptance of Terms</h4>
                      <p>By accessing and using MVP Traders' website and services, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our services.</p>
                    </section>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">2. Use of Service</h4>
                      <p>Our services are intended for professional contractors, builders, and DIY enthusiasts. You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others.</p>
                    </section>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">3. Product Information</h4>
                      <p>While we strive for accuracy, MVP Traders does not warrant that product descriptions or other content are accurate, complete, reliable, or error-free. Prices and availability are subject to change without notice.</p>
                    </section>
                    <section>
                      <h4 className="font-black text-[#1A1A1A] mb-2 uppercase tracking-widest text-xs">4. Limitation of Liability</h4>
                      <p>MVP Traders shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services.</p>
                    </section>
                  </>
                )}
              </div>
              <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end">
                <button 
                  onClick={() => setModalContent(null)}
                  className="bg-[#1A1A1A] text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-[#F15A24] transition-all"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
