import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thanks ${formData.name}! We'll get back to you within 24 hours.`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919876543210?text=Hi! I'm interested in IronForge Gym", "_blank");
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
            GET IN <span className="text-yellow-500">TOUCH</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Have questions? Ready to start your journey? We're here to help you every step of
            the way.
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">
                VISIT <span className="text-yellow-500">US</span>
              </h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4 bg-gray-900 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500 transition-all">
                  <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Location</h3>
                    <p className="text-gray-400">
                      456, Baner Road,
                      <br />
                      Near Phoenix Mall,
                      <br />
                      Pune, Maharashtra 411045
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-900 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500 transition-all">
                  <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Phone</h3>
                    <p className="text-gray-400">+91 98765 43210</p>
                    <p className="text-gray-400">+91 98765 43211</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-900 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500 transition-all">
                  <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-400">info@ironforge.in</p>
                    <p className="text-gray-400">support@ironforge.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-gray-900 p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500 transition-all">
                  <Clock className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hours</h3>
                    <p className="text-yellow-500 font-bold text-xl">OPEN 24/7</p>
                    <p className="text-gray-400 text-sm mt-1">
                      365 days a year, whenever you need us
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center gap-3 transition-all"
              >
                <MessageCircle className="w-6 h-6" />
                CHAT ON WHATSAPP
              </button>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 p-8 rounded-2xl border border-yellow-500/20">
                <h2 className="text-3xl font-bold mb-6">
                  SEND US A <span className="text-yellow-500">MESSAGE</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black border-yellow-500/30 text-white focus:border-yellow-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black border-yellow-500/30 text-white focus:border-yellow-500"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-black border-yellow-500/30 text-white focus:border-yellow-500"
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-white mb-2 block">
                      Your Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-black border-yellow-500/30 text-white focus:border-yellow-500 min-h-32"
                      placeholder="Tell us what you're looking for..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold text-lg py-6 hover:shadow-2xl hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    SEND MESSAGE
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    We'll respond within 24 hours on business days
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              FIND US ON THE <span className="text-yellow-500">MAP</span>
            </h2>
            <p className="text-gray-400">Located in the heart of Pune's fitness district</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden border-2 border-yellow-500/30"
          >
            {/* Mock Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.121168654584!2d73.77930631489308!3d18.55973258738556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0f32c3e24d%3A0x7d1e9a5e4c5e5e5e!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125"
            />

            {/* Overlay with gym marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500 rounded-full animate-ping opacity-75" />
                <div className="relative w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Directions */}
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/dir//Baner+Pune+Maharashtra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              QUICK <span className="text-yellow-500">ANSWERS</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "How do I book a gym tour?",
                a: "Simply call us or send a WhatsApp message. We offer free tours 24/7!",
              },
              {
                q: "Can I try the gym before joining?",
                a: "Yes! Fill out the free day pass form on our homepage or contact us directly.",
              },
              {
                q: "Do you offer corporate memberships?",
                a: "Absolutely! We have special corporate packages. Email us at info@ironforge.in for details.",
              },
              {
                q: "Is parking available?",
                a: "Yes, we have free dedicated parking for all members with 24/7 CCTV security.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 border border-yellow-500/20 p-6 rounded-lg hover:border-yellow-500 transition-all"
              >
                <h3 className="text-lg font-bold text-yellow-500 mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
