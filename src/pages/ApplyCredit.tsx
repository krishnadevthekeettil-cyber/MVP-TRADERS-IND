import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Zap,
  Clock
} from 'lucide-react';
import { useForm } from 'react-hook-form';

interface CreditForm {
  fullName: string;
  mobile: string;
  email: string;
  businessName: string;
  productCategory: string;
  expectedTonnage: number;
  creditPercentage: string;
  message: string;
}

export default function ApplyCredit() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<CreditForm>();

  const onSubmit = async (data: CreditForm) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // WhatsApp Redirection
      const message = `*New Credit Application from MVP Traders Website*%0A%0A` +
        `*Name:* ${data.fullName}%0A` +
        `*Mobile:* ${data.mobile}%0A` +
        `*Email:* ${data.email}%0A` +
        `*Business:* ${data.businessName}%0A` +
        `*Category:* ${data.productCategory}%0A` +
        `*Tonnage:* ${data.expectedTonnage} Tons%0A` +
        `*Credit %:* ${data.creditPercentage}%0A` +
        `*Message:* ${data.message || 'N/A'}`;
      
      window.open(`https://wa.me/917559965029?text=${message}`, '_blank');

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error('Error submitting credit application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white selection:bg-[#F15A24]/30">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }}>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#F15A24]/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-[#F15A24] mb-8 uppercase tracking-widest"
          >
            <Zap className="w-4 h-4 fill-current" />
            Instant Credit Evaluation
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black font-display tracking-tighter mb-8 leading-none"
          >
            Empower Your <br /> <span className="text-[#F15A24]">Construction Dreams</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Unlock flexible credit options tailored for large-scale projects and industrial builders. Get the materials you need today, pay as you grow.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Benefits & Trust */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display mb-8 tracking-tight">Why Apply for MVP Credit?</h2>
              <div className="space-y-8">
                {[
                  { 
                    icon: ShieldCheck, 
                    title: 'Secure & Transparent', 
                    desc: 'No hidden fees or complex terms. We believe in honest partnerships.' 
                  },
                  { 
                    icon: Zap, 
                    title: 'Fast Approval', 
                    desc: 'Get a response within 24-48 hours after submitting your application.' 
                  },
                  { 
                    icon: Clock, 
                    title: 'Flexible Repayment', 
                    desc: 'Customized schedules that align with your project milestones.' 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#F15A24]/10 group-hover:border-[#F15A24]/20 transition-all">
                      <item.icon className="w-7 h-7 text-[#F15A24]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-[#F15A24] transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F15A24]/10 blur-3xl -z-10 group-hover:bg-[#F15A24]/20 transition-all"></div>
              <h3 className="text-xl font-black font-display mb-4">Trusted by 500+ Firms</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                "MVP Traders' credit facility was the turning point for our commercial project. Their understanding of industrial timelines is unmatched."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
                <div>
                  <p className="text-sm font-bold">Rajesh Menon</p>
                  <p className="text-xs text-gray-500">Director, RM Constructions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Application Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-[#111] border border-white/10 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl relative"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F15A24] to-transparent opacity-50"></div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black font-display mb-10 tracking-tight">Credit Application Form</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                        <input 
                          {...register('fullName', { required: true })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24]/20 transition-all"
                          placeholder="John Doe"
                        />
                        {errors.fullName && <p className="text-red-500 text-[10px] uppercase font-bold mt-1">Required</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">Mobile Number</label>
                        <input 
                          {...register('mobile', { required: true, pattern: /^\d{10}$/ })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24]/20 transition-all"
                          placeholder="10-digit number"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                        <input 
                          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24]/20 transition-all"
                          placeholder="hello@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-500">Business Name</label>
                        <input 
                          {...register('businessName', { required: true })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] focus:ring-1 focus:ring-[#F15A24]/20 transition-all"
                          placeholder="Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-white/5">
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#F15A24]">Project Requirements</h3>
                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-gray-500">Product Category</label>
                          <select 
                            {...register('productCategory', { required: true })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#111]">Select Product</option>
                            <option value="iron" className="bg-[#111]">Iron Bars</option>
                            <option value="pipes" className="bg-[#111]">Metal Pipes</option>
                            <option value="cement" className="bg-[#111]">Cements</option>
                            <option value="roofing" className="bg-[#111]">Roofing Sheets</option>
                            <option value="hardware" className="bg-[#111]">General Hardware</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-gray-500">Expected Tonnage (Tons)</label>
                          <input 
                            type="number"
                            {...register('expectedTonnage', { required: true, min: 1 })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] transition-all"
                            placeholder="e.g. 50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Expected Credit Percentage (%)</label>
                      <div className="grid grid-cols-4 gap-4">
                        {['25%', '50%', '75%', '100%'].map((val) => (
                          <label key={val} className="relative cursor-pointer group">
                            <input 
                              type="radio" 
                              {...register('creditPercentage', { required: true })} 
                              value={val}
                              className="peer sr-only"
                            />
                            <div className="bg-white/5 border border-white/10 rounded-xl py-3 text-center text-sm font-bold peer-checked:bg-[#F15A24] peer-checked:border-[#F15A24] peer-checked:text-white transition-all group-hover:border-white/20">
                              {val}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-500">Project Description / Notes</label>
                      <textarea 
                        {...register('message')}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full bg-[#F15A24] text-white py-4 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-[#D94E1F] transition-all shadow-xl shadow-[#F15A24]/20 disabled:opacity-50 flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? 'Processing Application...' : 'Submit Application'}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-3 text-[10px] text-gray-500 uppercase tracking-widest justify-center">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Your data is encrypted and secure
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] text-center space-y-8"
                >
                  <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black font-display mb-4">Application Received!</h2>
                    <p className="text-gray-400 leading-relaxed max-w-md mx-auto">
                      Thank you for your interest. Our credit evaluation team will review your application and contact you within 24-48 hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#F15A24] font-bold text-sm uppercase tracking-widest hover:underline"
                  >
                    Submit another application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>
    </div>
  );
}
