import { motion } from "motion/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Slider from "react-slick";

export function Transformations() {
  const [selectedTransform, setSelectedTransform] = useState(0);

  const transformations = [
    {
      name: "Rahul Sharma",
      age: 28,
      duration: "6 Months",
      program: "Strength Training + Custom Diet",
      testimonial:
        "I lost 18kg and gained incredible strength. The trainers at IronForge pushed me beyond my limits. Best decision of my life!",
      before: "https://images.unsplash.com/photo-1608054604374-999be726cf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NzU2NTQ5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      weightLoss: "18 kg",
      bodyFat: "-12%",
    },
    {
      name: "Priya Desai",
      age: 32,
      duration: "4 Months",
      program: "Cardio Burn + Yoga",
      testimonial:
        "As a working mom, I thought I'd never find time. But with 24/7 access and amazing trainers, I'm in the best shape of my life!",
      before: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      weightLoss: "12 kg",
      bodyFat: "-8%",
    },
    {
      name: "Arjun Patel",
      age: 25,
      duration: "8 Months",
      program: "MMA + Strength Training",
      testimonial:
        "I went from skinny to shredded! The combat training not only built my physique but also my confidence. Absolutely life-changing!",
      before: "https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyME1NQXxlbnwxfHx8fDE3NzU2NjY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      weightLoss: "N/A",
      bodyFat: "-6%",
    },
    {
      name: "Sneha Reddy",
      age: 29,
      duration: "5 Months",
      program: "Gold Membership - Full Package",
      testimonial:
        "The AI diet plan and personal training sessions were game-changers. I feel stronger, healthier, and more energetic than ever!",
      before: "https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1NjY2NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      weightLoss: "15 kg",
      bodyFat: "-10%",
    },
  ];

  const videoTestimonials = [
    {
      name: "Vikram Singh",
      title: "Lost 20kg in 7 months",
      thumbnail: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "IronForge changed my life completely!",
    },
    {
      name: "Ananya Mehta",
      title: "Gained muscle & confidence",
      thumbnail: "https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1NjY2NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "Best gym in Pune, hands down!",
    },
    {
      name: "Karan Joshi",
      title: "From zero to hero",
      thumbnail: "https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyME1NQXxlbnwxfHx8fDE3NzU2NjY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      quote: "The trainers are world-class!",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-black" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            REAL <span className="text-yellow-500">RESULTS</span>, REAL PEOPLE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            See the incredible transformations of our members. Your success story starts here.
          </motion.p>
        </div>
      </section>

      {/* Featured Transformation with Before/After Slider */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Before/After Slider */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-black rounded-2xl overflow-hidden border-2 border-yellow-500 p-4">
                  <div className="relative h-96">
                    <img
                      src={transformations[selectedTransform].before}
                      alt="Transformation"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 px-4 py-2 rounded-lg font-bold">
                      BEFORE
                    </div>
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
                      AFTER
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-yellow-500">
                        {transformations[selectedTransform].weightLoss}
                      </p>
                      <p className="text-sm text-gray-400">Weight Change</p>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-red-500">
                        {transformations[selectedTransform].bodyFat}
                      </p>
                      <p className="text-sm text-gray-400">Body Fat</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-center gap-4 mt-6">
                  <button
                    onClick={() =>
                      setSelectedTransform((prev) =>
                        prev === 0 ? transformations.length - 1 : prev - 1
                      )
                    }
                    className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() =>
                      setSelectedTransform((prev) =>
                        prev === transformations.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="w-12 h-12 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>

                <h2 className="text-4xl font-bold mb-2">
                  {transformations[selectedTransform].name}
                </h2>
                <p className="text-yellow-500 font-semibold mb-4">
                  Age: {transformations[selectedTransform].age} | Duration:{" "}
                  {transformations[selectedTransform].duration}
                </p>

                <div className="bg-black border border-yellow-500/20 p-4 rounded-lg mb-6">
                  <p className="text-sm text-gray-400 mb-1">Program:</p>
                  <p className="font-semibold">{transformations[selectedTransform].program}</p>
                </div>

                <blockquote className="text-lg italic text-gray-300 border-l-4 border-yellow-500 pl-6 mb-6">
                  "{transformations[selectedTransform].testimonial}"
                </blockquote>

                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-yellow-500/50 transition-all">
                  START YOUR TRANSFORMATION
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              MORE <span className="text-yellow-500">SUCCESS STORIES</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformations.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedTransform(index)}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-yellow-500 transition-all group"
              >
                <div className="relative h-64">
                  <img
                    src={person.before}
                    alt={person.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{person.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{person.duration}</p>
                  <div className="flex gap-2 text-xs">
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
                      {person.weightLoss}
                    </span>
                    <span className="bg-red-500 text-white px-2 py-1 rounded font-bold">
                      {person.bodyFat}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Carousel */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              HEAR IT FROM <span className="text-yellow-500">OUR MEMBERS</span>
            </h2>
            <p className="text-gray-400">Real testimonials from real people</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Slider {...sliderSettings}>
              {videoTestimonials.map((video, index) => (
                <div key={index} className="px-4">
                  <div className="bg-black rounded-2xl overflow-hidden">
                    <div className="relative h-96">
                      <img
                        src={video.thumbnail}
                        alt={video.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-black border-b-8 border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-2xl font-bold mb-2">{video.name}</h3>
                      <p className="text-yellow-500 font-semibold mb-3">{video.title}</p>
                      <p className="text-gray-300 italic">"{video.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              YOUR TRANSFORMATION AWAITS
            </h2>
            <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of members who've already achieved their goals. It's your turn now.
            </p>
            <button className="px-10 py-5 bg-black text-yellow-500 font-bold text-lg rounded hover:bg-gray-900 transition-all">
              GET STARTED TODAY
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}