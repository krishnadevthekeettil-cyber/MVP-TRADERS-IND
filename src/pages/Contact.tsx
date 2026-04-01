import { motion } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Send,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    // WhatsApp Redirection
    const message = `*New Contact Message from MVP Traders Website*%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Email:* ${data.email}%0A` +
      `*Subject:* ${data.subject}%0A` +
      `*Message:* ${data.message}`;
    
    window.open(`https://wa.me/917559965029?text=${message}`, '_blank');
    
    reset();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#0A0A0A] py-20 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" 
          style={{ 
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white font-display tracking-tighter mb-6"
          >
            GET IN TOUCH
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto font-sans"
          >
            Have a question or need a quote? Our team is here to help you with all your hardware and construction needs.
          </motion.p>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100"
          >
            <img 
              src="https://i.ibb.co/spvDpJtw/Whats-App-Image-2026-03-31-at-2-37-22-PM.jpg" 
              alt="MVP Traders Contact Feature" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black font-display mb-8 tracking-tight">Contact Information</h2>
              <div className="space-y-8">
                {[
                  { 
                    icon: Phone, 
                    title: 'Phone', 
                    value: '7559965029', 
                    sub: 'Mon-Sat, 9am-6pm' 
                  },
                  { 
                    icon: Mail, 
                    title: 'Email', 
                    value: 'hello@mvptraders.com', 
                    sub: 'Online support 24/7' 
                  },
                  { 
                    icon: MapPin, 
                    title: 'Location', 
                    value: 'Mangalamkunnu, Kattukulam', 
                    sub: 'Palakkad, Kerala - 679514' 
                  },
                  { 
                    icon: Clock, 
                    title: 'Business Hours', 
                    value: '09:00 AM - 07:00 PM', 
                    sub: 'Closed on Sundays' 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#F15A24] group-hover:text-white transition-all">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.title}</h3>
                      <p className="text-lg font-bold text-[#1A1A1A]">{item.value}</p>
                      <p className="text-sm text-gray-500">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#F15A24] hover:text-white hover:border-[#F15A24] transition-all cursor-pointer">
                    <Icon className="w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 p-8 sm:p-12 rounded-[2.5rem]">
              <h2 className="text-2xl sm:text-3xl font-black font-display mb-10 tracking-tight">Send a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Your Name</label>
                    <input 
                      {...register('name', { required: true })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-400">Email Address</label>
                    <input 
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] transition-all"
                      placeholder="hello@company.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Subject</label>
                  <input 
                    {...register('subject', { required: true })}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] transition-all"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Message</label>
                  <textarea 
                    {...register('message', { required: true })}
                    rows={6}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#F15A24] transition-all resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button 
                  className="w-full bg-[#1A1A1A] text-white py-4 rounded-xl font-black text-lg uppercase tracking-widest hover:bg-[#F15A24] transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-gray-100 relative overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9142851458925!2d76.4168!3d10.8942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7d9f7f7f7f7f7%3A0x7f7f7f7f7f7f7f7f!2sMangalamkunnu%2C%20Kerala%20679514!5e0!3m2!1sen!2sin!4v1711924054000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="MVP Traders Location"
        ></iframe>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 pointer-events-none">
          <MapPin className="w-6 h-6 text-[#F15A24]" />
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400">Our Location</p>
            <p className="text-sm font-bold text-[#1A1A1A]">Mangalamkunnu, Kattukulam</p>
          </div>
        </div>
      </section>
    </div>
  );
}
