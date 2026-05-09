import { motion } from "motion/react";
import { Check, X, Star, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";

export function Membership() {
  const [selectedDuration, setSelectedDuration] = useState<3 | 6 | 12>(12);

  const pricing = {
    prime: {
      3: 4999,
      6: 8999,
      12: 14999,
    },
    gold: {
      3: 9999,
      6: 17999,
      12: 29999,
    },
  };

  const features = [
    {
      feature: "Gym Access",
      prime: "Unlimited",
      gold: "Unlimited + Priority",
    },
    {
      feature: "Duration Options",
      prime: "3, 6, 12 Months",
      gold: "3, 6, 12 Months",
    },
    {
      feature: "Personal Trainer",
      prime: false,
      gold: "3 Days/Week",
    },
    {
      feature: "Diet Plan",
      prime: "Standard PDF",
      gold: "Custom AI-Driven Diet",
    },
    {
      feature: "Recovery Access",
      prime: false,
      gold: "Steam & Sauna Included",
    },
    {
      feature: "Mobile App Access",
      prime: true,
      gold: true,
    },
    {
      feature: "Goal Tracking Dashboard",
      prime: false,
      gold: true,
    },
    {
      feature: "Priority Equipment Access",
      prime: false,
      gold: true,
    },
    {
      feature: "Free Guest Passes",
      prime: "1 per month",
      gold: "3 per month",
    },
    {
      feature: "Supplement Discounts",
      prime: "5%",
      gold: "15%",
    },
  ];

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
            CHOOSE YOUR <span className="text-yellow-500">POWER LEVEL</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Select the plan that matches your ambition. Every journey to greatness starts with
            a single decision.
          </motion.p>
        </div>
      </section>

      {/* Duration Selector */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <span className="text-gray-400">Select Duration:</span>
            {[3, 6, 12].map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration as 3 | 6 | 12)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  selectedDuration === duration
                    ? "bg-gradient-to-r from-yellow-500 to-red-500 text-black"
                    : "bg-black border border-yellow-500/30 text-gray-300 hover:border-yellow-500"
                }`}
              >
                {duration} Months
                {duration === 12 && (
                  <span className="ml-2 text-xs bg-red-500 text-white px-2 py-1 rounded">
                    BEST VALUE
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Prime Plan */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900 to-black border-2 border-yellow-500/30 rounded-2xl p-8 hover:border-yellow-500 transition-all"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-8 h-8 text-yellow-500" />
                <h3 className="text-3xl font-bold text-yellow-500">PRIME</h3>
              </div>
              <p className="text-gray-400 mb-6">Perfect for self-motivated individuals</p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">₹{pricing.prime[selectedDuration]}</span>
                  <span className="text-gray-400">/ {selectedDuration} months</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  ~₹{Math.round(pricing.prime[selectedDuration] / selectedDuration)}/month
                </p>
              </div>

              <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-600 font-bold text-lg py-6 mb-8">
                START WITH PRIME
              </Button>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Unlimited Gym Access</p>
                    <p className="text-sm text-gray-400">24/7 access to all equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Standard Diet Plan</p>
                    <p className="text-sm text-gray-400">General nutrition PDF guide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Mobile App Access</p>
                    <p className="text-sm text-gray-400">Track workouts on the go</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">1 Guest Pass/Month</p>
                    <p className="text-sm text-gray-400">Bring a friend for free</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-500">No Personal Training</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-500">No Recovery Suite Access</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gold Plan */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-yellow-500/20 to-red-500/20 border-2 border-yellow-500 rounded-2xl p-8 relative overflow-hidden"
            >
              {/* Best Value Badge */}
              <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1">
                <Star className="w-4 h-4" />
                MOST POPULAR
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Star className="w-8 h-8 text-yellow-500" />
                <h3 className="text-3xl font-bold text-yellow-500">GOLD</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Complete transformation package with personal guidance
              </p>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">₹{pricing.gold[selectedDuration]}</span>
                  <span className="text-gray-300">/ {selectedDuration} months</span>
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  ~₹{Math.round(pricing.gold[selectedDuration] / selectedDuration)}/month
                </p>
              </div>

              <Button className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black hover:shadow-2xl hover:shadow-yellow-500/50 font-bold text-lg py-6 mb-8">
                UPGRADE TO GOLD
              </Button>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Priority Gym Access</p>
                    <p className="text-sm text-gray-300">Skip queues, reserve equipment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Personal Trainer (3x/week)</p>
                    <p className="text-sm text-gray-300">Dedicated expert guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">AI-Driven Custom Diet Plan</p>
                    <p className="text-sm text-gray-300">Personalized nutrition for your goals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Recovery Suite Access</p>
                    <p className="text-sm text-gray-300">Steam, sauna, and massage</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Goal Tracking Dashboard</p>
                    <p className="text-sm text-gray-300">Advanced progress analytics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">3 Guest Passes/Month</p>
                    <p className="text-sm text-gray-300">Share the experience</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">15% Store Discount</p>
                    <p className="text-sm text-gray-300">Save on supplements & gear</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            DETAILED <span className="text-yellow-500">COMPARISON</span>
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-yellow-500 to-red-500">
                <tr>
                  <th className="px-6 py-4 text-left text-black font-bold">Feature</th>
                  <th className="px-6 py-4 text-center text-black font-bold">PRIME</th>
                  <th className="px-6 py-4 text-center text-black font-bold">GOLD</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-yellow-500/10 hover:bg-yellow-500/5 transition-colors"
                  >
                    <td className="px-6 py-4 font-semibold">{item.feature}</td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.prime === "boolean" ? (
                        item.prime ? (
                          <Check className="w-6 h-6 text-yellow-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-300">{item.prime}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof item.gold === "boolean" ? (
                        item.gold ? (
                          <Check className="w-6 h-6 text-yellow-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-gray-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-yellow-500 font-semibold">{item.gold}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            MEMBERSHIP <span className="text-yellow-500">BENEFITS</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Flexible Payment",
                description: "Pay in installments or full. Easy EMI options available.",
              },
              {
                title: "Freeze Option",
                description: "Need a break? Freeze your membership for up to 30 days.",
              },
              {
                title: "Transfer Rights",
                description: "Move your membership to another person if needed.",
              },
              {
                title: "Money-Back Guarantee",
                description: "Not satisfied? Get a full refund within 7 days.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-yellow-500/20 p-6 rounded-lg"
              >
                <h3 className="text-xl font-bold text-yellow-500 mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
