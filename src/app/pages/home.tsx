import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Users, Award, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

export function Home() {
  const [memberCount, setMemberCount] = useState(0);
  const [trainerCount, setTrainerCount] = useState(0);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  // Animated counter effect
  useEffect(() => {
    const memberInterval = setInterval(() => {
      setMemberCount((prev) => (prev < 500 ? prev + 10 : 500));
    }, 50);

    const trainerInterval = setInterval(() => {
      setTrainerCount((prev) => (prev < 20 ? prev + 1 : 20));
    }, 100);

    return () => {
      clearInterval(memberInterval);
      clearInterval(trainerInterval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert(`Thanks ${formData.name}! We'll send your free pass to ${formData.email}`);
    setShowLeadForm(false);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              STOP <span className="text-yellow-500">WISHING</span>,<br />
              START <span className="text-red-500">GRINDING</span>.
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transform your body and mind at Pune's most powerful gym.
              State-of-the-art equipment, expert trainers, 24/7 access.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <button
                onClick={() => setShowLeadForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold text-lg rounded hover:shadow-2xl hover:shadow-yellow-500/50 transition-all flex items-center gap-2 group"
              >
                GET 1 DAY FREE PASS
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/membership"
                className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded hover:bg-yellow-500 hover:text-black transition-all"
              >
                VIEW PLANS
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-yellow-500 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-yellow-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Live Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Users className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                {memberCount}+
              </div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">Active Members</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">
                {trainerCount}+
              </div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">
                Certified Trainers
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">24/7</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">Always Open</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <TrendingUp className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">100%</div>
              <div className="text-gray-400 uppercase text-sm tracking-wider">
                Success Rate
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              WHY <span className="text-yellow-500">IRONFORGE</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We're not just a gym. We're a revolution in fitness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bio-Metric Entry",
                description: "Seamless access with fingerprint scanning. No cards, no hassle.",
                icon: "🔐",
              },
              {
                title: "No-Wait Policy",
                description: "Multiple equipment stations ensure you never wait for your workout.",
                icon: "⚡",
              },
              {
                title: "AI-Powered Tracking",
                description: "Smart systems track your progress and optimize your training.",
                icon: "🤖",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-yellow-500/20 p-8 rounded-lg hover:border-yellow-500 transition-colors group"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-yellow-500 group-hover:text-red-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
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
              READY TO TRANSFORM?
            </h2>
            <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of members who've already achieved their dream physique.
            </p>
            <button
              onClick={() => setShowLeadForm(true)}
              className="px-10 py-5 bg-black text-yellow-500 font-bold text-lg rounded hover:bg-gray-900 transition-all"
            >
              CLAIM YOUR FREE DAY PASS
            </button>
          </motion.div>
        </div>
      </section>

      {/* Lead Generation Form Dialog */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="bg-gray-900 text-white border-yellow-500">
          <DialogHeader>
            <DialogTitle className="text-2xl text-yellow-500">
              Get Your Free 1-Day Pass
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Fill in your details and we'll send you a free pass immediately!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="text-white">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black border-yellow-500/30 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-white">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-black border-yellow-500/30 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-black border-yellow-500/30 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold hover:shadow-lg"
            >
              GET MY FREE PASS
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
