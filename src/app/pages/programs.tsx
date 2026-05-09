import { motion } from "motion/react";
import { Dumbbell, Heart, Flame, Zap } from "lucide-react";

export function Programs() {
  const programs = [
    {
      title: "Strength Training",
      description:
        "Build raw power with high-intensity weight lifting. Focus on compound movements and progressive overload for maximum muscle gain.",
      image: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Dumbbell className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      benefits: [
        "Increase muscle mass",
        "Boost metabolism",
        "Improve bone density",
        "Enhance athletic performance",
      ],
      intensity: "High",
      duration: "60-75 min",
    },
    {
      title: "Cardio Burn",
      description:
        "High-energy cardio sessions with heart-rate monitoring. Burn calories fast with treadmills, bikes, and rowing machines.",
      image: "https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjB0cmVhZG1pbGwlMjBydW5uaW5nfGVufDF8fHx8MTc3NTYyNjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Heart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      benefits: [
        "Improve cardiovascular health",
        "Burn maximum calories",
        "Increase endurance",
        "Reduce stress levels",
      ],
      intensity: "Medium-High",
      duration: "45-60 min",
    },
    {
      title: "Yoga & Mobility",
      description:
        "Find your balance with flexibility training and mindfulness. Perfect for recovery days and mental wellness.",
      image: "https://images.unsplash.com/photo-1642645550550-c2a442d17e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzc1NTQ3MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Flame className="w-8 h-8" />,
      color: "from-purple-500 to-blue-500",
      benefits: [
        "Enhance flexibility",
        "Reduce injury risk",
        "Improve mental clarity",
        "Aid muscle recovery",
      ],
      intensity: "Low-Medium",
      duration: "45-60 min",
    },
    {
      title: "MMA / Boxing",
      description:
        "Unleash your inner fighter with skill-based combat training. Burn calories while learning self-defense techniques.",
      image: "https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyME1NQXxlbnwxfHx8fDE3NzU2NjY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      benefits: [
        "Learn self-defense",
        "High-calorie burn",
        "Build confidence",
        "Improve coordination",
      ],
      intensity: "High",
      duration: "60 min",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-black" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            TRAIN YOUR <span className="text-red-500">WAY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            From heavy lifting to mindful movement—we offer diverse programs to match your
            fitness goals and lifestyle.
          </motion.p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative h-96 rounded-2xl overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent`}
                  />
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    <div className="bg-black/80 backdrop-blur px-4 py-2 rounded-lg">
                      <p className="text-xs text-gray-400">Intensity</p>
                      <p className="font-bold text-yellow-500">{program.intensity}</p>
                    </div>
                    <div className="bg-black/80 backdrop-blur px-4 py-2 rounded-lg">
                      <p className="text-xs text-gray-400">Duration</p>
                      <p className="font-bold text-yellow-500">{program.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${program.color} text-white mb-4`}
                  >
                    {program.icon}
                    <span className="font-bold">{program.title}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-yellow-500 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${program.color}`}
                          />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`px-8 py-4 bg-gradient-to-r ${program.color} text-white font-bold rounded-lg hover:shadow-2xl transition-all`}
                  >
                    Join This Program
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Classes Schedule */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              WEEKLY <span className="text-yellow-500">SCHEDULE</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our guided group classes throughout the week. All levels welcome!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { day: "Monday", time: "6:00 AM - 7:00 AM", class: "Morning Strength" },
              { day: "Monday", time: "7:00 PM - 8:00 PM", class: "Evening Cardio" },
              { day: "Tuesday", time: "6:30 AM - 7:30 AM", class: "Yoga Flow" },
              { day: "Wednesday", time: "6:00 AM - 7:00 AM", class: "Boxing Basics" },
              { day: "Wednesday", time: "7:00 PM - 8:00 PM", class: "Power Lifting" },
              { day: "Thursday", time: "6:30 AM - 7:30 AM", class: "Mobility & Stretch" },
              { day: "Friday", time: "6:00 AM - 7:00 AM", class: "Full Body Blast" },
              { day: "Friday", time: "7:00 PM - 8:00 PM", class: "MMA Conditioning" },
              { day: "Saturday", time: "8:00 AM - 9:00 AM", class: "Weekend Warrior" },
            ].map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-black border border-yellow-500/20 p-6 rounded-lg hover:border-yellow-500 transition-all group"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-yellow-500 font-bold">{schedule.day}</h4>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    {schedule.time}
                  </span>
                </div>
                <p className="text-lg font-semibold group-hover:text-yellow-500 transition-colors">
                  {schedule.class}
                </p>
              </motion.div>
            ))}
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
              READY TO GET STARTED?
            </h2>
            <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
              All programs are included with your membership. No extra fees, no limits.
            </p>
            <button className="px-10 py-5 bg-black text-yellow-500 font-bold text-lg rounded hover:bg-gray-900 transition-all">
              VIEW MEMBERSHIP PLANS
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
