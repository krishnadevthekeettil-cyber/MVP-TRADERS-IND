import { motion } from 'motion/react';

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/p/AF1QipMmnUrx3j8bY3B3ew1dI1U2DRgA_nZ21Atjo7xG=s1360-w1360-h1020-rw" 
          alt="Mangalamkunnu Anatharavadu Heritage" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-black text-white font-display tracking-tighter text-center px-4"
          >
            OUR STORY
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <div className="prose prose-lg sm:prose-xl max-w-none text-gray-700 leading-relaxed font-sans space-y-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-black text-[#1A1A1A] font-display tracking-tight border-l-4 border-[#F15A24] pl-6">
                The Legacy of Mangalamkunnu Anatharavadu
              </h2>
              <p>
                Our journey didn't begin in a boardroom or a modern warehouse. It began in the heart of Palakkad, within the historic walls of <strong>Mangalamkunnu Anatharavadu</strong>. For generations, this ancestral home has stood as a symbol of integrity, community, and the enduring spirit of Kerala's heritage. It is here that the seeds of MVP Traders were sown, rooted in a tradition of service that spans decades.
              </p>
              <p>
                Approximately 1.5 years ago, a vision began to take shape. We realized that while the world was moving towards impersonal digital transactions, the core values of trust and reliability—the very values that defined Mangalamkunnu Anatharavadu—were becoming increasingly rare in the construction and hardware industry. We saw contractors struggling with inconsistent quality and homeowners feeling overwhelmed by technical jargon.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-display tracking-tight">
                A Vision Born from Tradition
              </h3>
              <p>
                The story of MVP Traders is inextricably linked to the stories whispered in the corridors of our ancestral home. Mangalamkunnu is famous for its connection to the majestic elephants of Kerala, symbols of strength, patience, and loyalty. These are the same qualities we bring to our business. Just as an elephant provides the foundation for a grand festival, we aim to provide the foundation for your grandest architectural dreams.
              </p>
              <p>
                When we started 18 months ago, we made a promise: to treat every customer like a member of our extended family. We didn't just want to sell iron bars and cement; we wanted to be partners in progress. We spent months traveling across the region, meeting with local craftsmen, understanding the unique challenges of building in our climate, and sourcing only the finest materials that meet the rigorous standards of our heritage.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-display tracking-tight">
                The 1.5 Year Milestone: From Dream to Reality
              </h3>
              <p>
                The past year and a half has been a whirlwind of growth and learning. We started with a small selection of essential hardware, operating out of a modest space that echoed the simplicity of our roots. Today, MVP Traders has grown into a leading supplier in Mangalamkunnu and beyond, trusted by hundreds of professionals and thousands of homeowners.
              </p>
              <p>
                But growth hasn't changed our essence. Every time a customer walks through our doors, they are greeted with the same warmth and honesty that has been the hallmark of Mangalamkunnu Anatharavadu for generations. We believe that a house is more than just bricks and mortar; it's a sanctuary, a legacy for the future. And a sanctuary deserves nothing but the best.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A] font-display tracking-tight">
                Building the Future, Respecting the Past
              </h3>
              <p>
                As we look ahead, our commitment remains unwavering. We are constantly expanding our inventory to include the latest innovations in construction technology, from eco-friendly cements to high-tensile steel. Yet, we remain grounded in our history. The values of Mangalamkunnu Anatharavadu—honesty, hard work, and community—are the compass that guides every decision we make.
              </p>
              <p>
                Whether you are building a small home for your family or a large-scale industrial complex, MVP Traders is here to ensure that your foundation is as strong as the legacy we carry. We invite you to be a part of our story, a story that began in a historic home and continues in every structure built with our materials.
              </p>
              <p>
                Thank you for trusting us with your dreams. Together, let's build something that lasts for generations to come, just like the walls of Mangalamkunnu Anatharavadu that inspired us to begin this journey.
              </p>
            </div>

            <div className="pt-12 border-t border-gray-100">
              <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl">
                <h4 className="text-xl sm:text-2xl font-black text-[#F15A24] font-display mb-4">
                  Why Our Story Matters for Your Project
                </h4>
                <p className="text-sm sm:text-base text-gray-600 italic">
                  "At MVP Traders, we don't just provide hardware; we provide peace of mind. Our 1.5-year journey has been defined by a relentless pursuit of quality, ensuring that every product we sell is worthy of the trust our community places in us."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
