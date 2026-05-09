import { motion } from "motion/react";
import { Award, Calendar, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function Trainers() {
  const [showBooking, setShowBooking] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<any>(null);
  const [bookingData, setBookingData] = useState({ date: "", time: "", goal: "" });

  const trainers = [
    {
      name: "Rohit Kumar",
      title: "Head Strength Coach",
      specialization: ["Strength Training", "Powerlifting", "Muscle Gain"],
      experience: "10 years",
      certifications: ["ACE Certified", "NSCA-CPT", "Nutrition Specialist"],
      image: "https://images.unsplash.com/photo-1667890786608-8b2f8c60afa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRlciUyMHRyYWluZXIlMjBtdXNjdWxhcnxlbnwxfHx8fDE3NzU2NjcwNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Former national powerlifting champion with a passion for building strength. Specializes in compound movements and progressive overload.",
      instagram: "@rohit_strength",
      linkedin: "rohitkumar-fitness",
    },
    {
      name: "Priya Malhotra",
      title: "Fat Loss Expert",
      specialization: ["Weight Loss", "HIIT", "Metabolic Training"],
      experience: "8 years",
      certifications: ["NASM-CPT", "Precision Nutrition", "TRX Certified"],
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBmaXRuZXNzJTIwdHJhaW5lciUyMGNvYWNoaW5nfGVufDF8fHx8MTc3NTY2NzA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Transformation specialist who's helped 500+ clients lose weight sustainably. Expert in creating customized cardio and nutrition plans.",
      instagram: "@priya_fatloss",
      linkedin: "priyamalhotra-fitness",
    },
    {
      name: "Arjun Singh",
      title: "MMA & Boxing Coach",
      specialization: ["MMA", "Boxing", "Combat Training"],
      experience: "12 years",
      certifications: ["MMA Black Belt", "USA Boxing Coach", "CrossFit Level 2"],
      image: "https://images.unsplash.com/photo-1544972917-3529b113a469?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5lciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3NTY2NzA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Professional fighter turned coach. Specializes in teaching combat skills while building exceptional conditioning and mental toughness.",
      instagram: "@arjun_combat",
      linkedin: "arjunsingh-mma",
    },
    {
      name: "Anjali Deshmukh",
      title: "Yoga & Mobility Expert",
      specialization: ["Yoga", "Flexibility", "Injury Prevention"],
      experience: "7 years",
      certifications: ["RYT-500", "Yin Yoga Certified", "Sports Mobility Coach"],
      image: "https://images.unsplash.com/photo-1758274535024-be3faa30f507?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHRlYWNoaW5nfGVufDF8fHx8MTc3NTYzMTkyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Holistic fitness advocate combining ancient yoga wisdom with modern mobility techniques. Perfect for recovery and flexibility training.",
      instagram: "@anjali_yoga",
      linkedin: "anjalideshmukh-yoga",
    },
    {
      name: "Karan Mehta",
      title: "Athletic Performance Coach",
      specialization: ["Sports Performance", "Functional Training", "Plyometrics"],
      experience: "9 years",
      certifications: ["CSCS", "Olympic Weightlifting Coach", "Speed & Agility Specialist"],
      image: "https://images.unsplash.com/photo-1536922246289-88c42f957773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMHRyYWluZXIlMjBjb2FjaGluZyUyMHdvcmtvdXR8ZW58MXx8fHwxNzc1NjY2NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Works with athletes to enhance performance through science-based training. Focuses on speed, power, and explosive movements.",
      instagram: "@karan_performance",
      linkedin: "karanmehta-coach",
    },
    {
      name: "Sneha Iyer",
      title: "Women's Fitness Specialist",
      specialization: ["Pre/Post Natal", "Women's Health", "Body Recomposition"],
      experience: "6 years",
      certifications: ["Pre/Post Natal Specialist", "Women's Health Coach", "NASM-CPT"],
      image: "https://images.unsplash.com/photo-1608054604374-999be726cf9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhbnNmb3JtYXRpb24lMjBiZWZvcmUlMjBhZnRlcnxlbnwxfHx8fDE3NzU2NTQ5ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Dedicated to empowering women through fitness. Specializes in safe, effective training for all life stages including pregnancy.",
      instagram: "@sneha_womenfitness",
      linkedin: "snehaiyer-fitness",
    },
  ];

  const handleBookTrainer = (trainer: any) => {
    setSelectedTrainer(trainer);
    setShowBooking(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Session booked with ${selectedTrainer.name} on ${bookingData.date} at ${bookingData.time}!`
    );
    setShowBooking(false);
    setBookingData({ date: "", time: "", goal: "" });
  };

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
            MEET YOUR <span className="text-yellow-500">EXPERT TEAM</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Our certified trainers are here to guide, motivate, and push you to achieve your
            goals. Each one is an expert in their field.
          </motion.p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition-all group"
              >
                {/* Trainer Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={`https://instagram.com/${trainer.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://linkedin.com/in/${trainer.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Trainer Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                  <p className="text-yellow-500 font-semibold mb-4">{trainer.title}</p>

                  <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">SPECIALIZATIONS:</p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs bg-black border border-yellow-500/30 px-2 py-1 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Certifications */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span>{trainer.experience}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">CERTIFICATIONS:</p>
                    {trainer.certifications.map((cert, i) => (
                      <p key={i} className="text-xs text-gray-400">
                        • {cert}
                      </p>
                    ))}
                  </div>

                  {/* Book Button (Only for Gold Members) */}
                  <button
                    onClick={() => handleBookTrainer(trainer)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg hover:shadow-xl hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    BOOK SESSION
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    *Available for Gold members
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              WHY OUR <span className="text-yellow-500">TRAINERS</span> ARE DIFFERENT
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Certified Experts",
                description:
                  "Every trainer holds multiple certifications from internationally recognized organizations.",
              },
              {
                title: "Personalized Approach",
                description:
                  "We don't believe in cookie-cutter programs. Each plan is tailored to your unique needs.",
              },
              {
                title: "Continuous Learning",
                description:
                  "Our team stays updated with the latest fitness science and training methodologies.",
              },
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-yellow-500/20 p-6 rounded-lg text-center"
              >
                <h3 className="text-xl font-bold text-yellow-500 mb-3">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <Dialog open={showBooking} onOpenChange={setShowBooking}>
        <DialogContent className="bg-gray-900 text-white border-yellow-500">
          <DialogHeader>
            <DialogTitle className="text-2xl text-yellow-500">
              Book Session with {selectedTrainer?.name}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              Schedule your personalized training session. Available for Gold members only.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBookingSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="date" className="text-white">
                Preferred Date
              </Label>
              <Input
                id="date"
                type="date"
                value={bookingData.date}
                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                className="bg-black border-yellow-500/30 text-white"
                required
              />
            </div>
            <div>
              <Label htmlFor="time" className="text-white">
                Preferred Time
              </Label>
              <Select
                value={bookingData.time}
                onValueChange={(value) => setBookingData({ ...bookingData, time: value })}
              >
                <SelectTrigger className="bg-black border-yellow-500/30 text-white">
                  <SelectValue placeholder="Select time slot" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 text-white border-yellow-500/30">
                  <SelectItem value="6am">6:00 AM</SelectItem>
                  <SelectItem value="8am">8:00 AM</SelectItem>
                  <SelectItem value="10am">10:00 AM</SelectItem>
                  <SelectItem value="12pm">12:00 PM</SelectItem>
                  <SelectItem value="2pm">2:00 PM</SelectItem>
                  <SelectItem value="4pm">4:00 PM</SelectItem>
                  <SelectItem value="6pm">6:00 PM</SelectItem>
                  <SelectItem value="8pm">8:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="goal" className="text-white">
                Your Fitness Goal
              </Label>
              <Input
                id="goal"
                value={bookingData.goal}
                onChange={(e) => setBookingData({ ...bookingData, goal: e.target.value })}
                placeholder="e.g., Fat loss, muscle gain, strength"
                className="bg-black border-yellow-500/30 text-white"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold hover:shadow-lg"
            >
              CONFIRM BOOKING
            </Button>
            <p className="text-xs text-gray-500 text-center">
              This is a mock booking. In production, this would integrate with a scheduling
              system.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
