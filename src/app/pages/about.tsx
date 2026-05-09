import { motion } from "motion/react";
import { Target, Shield, Zap, Clock, Lock, TrendingUp } from "lucide-react";

export function About() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBlcXVpcG1lbnQlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzU2NjY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            THE <span className="text-yellow-500">IRONFORGE</span> LEGACY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300"
          >
            Where transformation becomes reality
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                OUR <span className="text-yellow-500">MISSION</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                At IronForge, we don't just build bodies—we forge champions. Our mission is
                to transform lives through science-backed training, cutting-edge technology,
                and unwavering support.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe fitness is not a destination, it's a lifestyle. Every rep, every
                drop of sweat, every moment of pushing past your limits—that's where
                transformation happens. And we're here to guide you through every step.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-black border border-yellow-500/20 p-6 rounded">
                  <Target className="w-10 h-10 text-yellow-500 mb-3" />
                  <h3 className="font-bold mb-2">Goal-Driven</h3>
                  <p className="text-sm text-gray-400">Personalized plans for your goals</p>
                </div>
                <div className="bg-black border border-red-500/20 p-6 rounded">
                  <Shield className="w-10 h-10 text-red-500 mb-3" />
                  <h3 className="font-bold mb-2">Expert Guidance</h3>
                  <p className="text-sm text-gray-400">Certified professional trainers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1NjY2NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Personal training"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              WORLD-CLASS <span className="text-yellow-500">FACILITY</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              State-of-the-art equipment, premium amenities, and an environment designed for
              peak performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Heavy Lifting Zone",
                description: "Premium barbells, plates, and squat racks",
              },
              {
                image: "https://images.unsplash.com/photo-1761971974992-6df33df97c3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJkaW8lMjB0cmVhZG1pbGwlMjBydW5uaW5nfGVufDF8fHx8MTc3NTYyNjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Cardio Theater",
                description: "Latest treadmills, bikes, and rowing machines",
              },
              {
                image: "https://images.unsplash.com/photo-1642645550550-c2a442d17e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwc3R1ZGlvJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzc1NTQ3MjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Yoga & Mobility Studio",
                description: "Peaceful space for flexibility training",
              },
              {
                image: "https://images.unsplash.com/photo-1615117950029-db3cf44bdefa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3hpbmclMjB0cmFpbmluZyUyME1NQXxlbnwxfHx8fDE3NzU2NjY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Combat Zone",
                description: "Boxing ring and MMA training area",
              },
              {
                image: "https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBlcXVpcG1lbnQlMjBmYWNpbGl0eXxlbnwxfHx8fDE3NzU2NjY3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Recovery Suite",
                description: "Steam room, sauna, and massage area",
              },
              {
                image: "https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjB2aXRhbWluc3xlbnwxfHx8fDE3NzU2NjY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                title: "Nutrition Bar",
                description: "Fresh smoothies and supplements on-site",
              },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-lg overflow-hidden"
              >
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent group-hover:from-yellow-500/20 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2 text-yellow-500">{facility.title}</h3>
                  <p className="text-gray-300 text-sm">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              WHY WE'RE <span className="text-red-500">DIFFERENT</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-12 h-12" />,
                title: "24/7 Access",
                description:
                  "Train on your schedule. Our facility is open around the clock, 365 days a year.",
                color: "text-yellow-500",
              },
              {
                icon: <Lock className="w-12 h-12" />,
                title: "Bio-Metric Entry",
                description:
                  "State-of-the-art fingerprint scanning for secure, seamless access. No cards to lose.",
                color: "text-red-500",
              },
              {
                icon: <Zap className="w-12 h-12" />,
                title: "No-Wait Policy",
                description:
                  "Multiple equipment stations ensure you never wait. Get in, train hard, get out.",
                color: "text-yellow-500",
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "AI Progress Tracking",
                description:
                  "Smart systems monitor your workouts and provide data-driven insights for optimization.",
                color: "text-red-500",
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Goal-Based Programs",
                description:
                  "Whether it's fat loss, muscle gain, or athletic performance—we have a program for you.",
                color: "text-yellow-500",
              },
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Safety First",
                description:
                  "Certified trainers on-site 24/7, emergency equipment, and proper sanitization protocols.",
                color: "text-red-500",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-yellow-500/20 p-8 rounded-lg hover:border-yellow-500 transition-all group"
              >
                <div className={`${feature.color} mb-4`}>{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-yellow-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
