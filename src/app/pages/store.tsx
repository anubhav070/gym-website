import { motion } from "motion/react";
import { ShoppingCart, Star, Package } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/ui/badge";

export function Store() {
  const [cart, setCart] = useState<any[]>([]);

  const products = [
    {
      id: 1,
      name: "IronForge Whey Protein",
      category: "Protein",
      description: "Premium whey isolate with 30g protein per serving. Available in 5 flavors.",
      price: 2999,
      originalPrice: 3499,
      image: "https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjB2aXRhbWluc3xlbnwxfHx8fDE3NzU2NjY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 245,
      badge: "BEST SELLER",
    },
    {
      id: 2,
      name: "Pre-Workout Explosion",
      category: "Pre-Workout",
      description: "Explosive energy formula with caffeine, beta-alanine, and BCAAs.",
      price: 1799,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjB2aXRhbWluc3xlbnwxfHx8fDE3NzU2NjY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 189,
      badge: "NEW",
    },
    {
      id: 3,
      name: "BCAA Recovery",
      category: "Recovery",
      description: "Essential amino acids for muscle recovery and endurance.",
      price: 1499,
      originalPrice: 1799,
      image: "https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjB2aXRhbWluc3xlbnwxfHx8fDE3NzU2NjY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.6,
      reviews: 156,
    },
    {
      id: 4,
      name: "Multivitamin Complex",
      category: "Vitamins",
      description: "Complete daily vitamin and mineral support for active lifestyles.",
      price: 899,
      originalPrice: 1099,
      image: "https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjB2aXRhbWluc3xlbnwxfHx8fDE3NzU2NjY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.5,
      reviews: 98,
    },
    {
      id: 5,
      name: "Mass Gainer 5000",
      category: "Mass Gainer",
      description: "High-calorie formula with 50g protein and complex carbs for muscle growth.",
      price: 3499,
      originalPrice: 3999,
      image: "https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjB2aXRhbWluc3xlbnwxfHx8fDE3NzU2NjY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.9,
      reviews: 312,
      badge: "TOP RATED",
    },
    {
      id: 6,
      name: "Fat Burner Pro",
      category: "Fat Loss",
      description: "Thermogenic formula to boost metabolism and energy levels.",
      price: 1999,
      originalPrice: 2499,
      image: "https://images.unsplash.com/photo-1763747958224-7726941b0b15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwc3VwcGxlbWVudHMlMjB2aXRhbWluc3xlbnwxfHx8fDE3NzU2NjY3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.4,
      reviews: 134,
    },
    {
      id: 7,
      name: "IronForge Gym Shaker",
      category: "Accessories",
      description: "Premium 700ml shaker with mixing ball and compartments.",
      price: 299,
      originalPrice: 499,
      image: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.7,
      reviews: 421,
    },
    {
      id: 8,
      name: "Weightlifting Belt",
      category: "Accessories",
      description: "Professional-grade leather belt for heavy lifting support.",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.8,
      reviews: 87,
    },
    {
      id: 9,
      name: "Workout Gloves Pro",
      category: "Accessories",
      description: "Padded gloves with wrist support for grip and protection.",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1603665409265-bdc00027c217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBoZWF2eSUyMGxpZnRpbmclMjBkYXJrfGVufDF8fHx8MTc3NTY2Njc3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      rating: 4.5,
      reviews: 203,
    },
  ];

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  const calculateDiscount = (original: number, current: number) => {
    return Math.round(((original - current) / original) * 100);
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
            FUEL YOUR <span className="text-yellow-500">GAINS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Premium supplements and gear to maximize your performance. Medical-grade quality,
            member-exclusive pricing.
          </motion.p>
        </div>
      </section>

      {/* Member Discount Banner */}
      <section className="py-6 bg-gradient-to-r from-yellow-500 to-red-500">
        <div className="container mx-auto px-4 text-center">
          <p className="text-black font-bold text-lg">
            🎉 PRIME Members: 5% OFF | GOLD Members: 15% OFF all products!
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["All", "Protein", "Pre-Workout", "Recovery", "Vitamins", "Accessories"].map(
              (category) => (
                <button
                  key={category}
                  className="px-6 py-2 bg-gray-900 border border-yellow-500/30 rounded-full hover:bg-yellow-500 hover:text-black transition-all font-semibold"
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500 transition-all group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gray-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <Badge
                        className={`${
                          product.badge === "BEST SELLER"
                            ? "bg-yellow-500 text-black"
                            : product.badge === "NEW"
                            ? "bg-red-500 text-white"
                            : "bg-green-500 text-white"
                        } font-bold`}
                      >
                        {product.badge}
                      </Badge>
                    </div>
                  )}

                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-3 py-1 rounded-full">
                    <p className="text-yellow-500 font-bold text-sm">
                      -{calculateDiscount(product.originalPrice, product.price)}%
                    </p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <p className="text-xs text-yellow-500 font-semibold mb-2">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-gray-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-yellow-500">
                      ₹{product.price}
                    </span>
                    <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-yellow-500 to-red-500 text-black font-bold rounded-lg hover:shadow-xl hover:shadow-yellow-500/50 transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    ADD TO CART
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">
              WHY BUY FROM <span className="text-yellow-500">IRONFORGE</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Package className="w-12 h-12" />,
                title: "100% Authentic",
                description: "Only genuine, lab-tested products. No fakes, no compromises.",
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Member Discounts",
                description: "Exclusive pricing for IronForge members. Save up to 15%.",
              },
              {
                icon: <ShoppingCart className="w-12 h-12" />,
                title: "Instant Delivery",
                description: "Purchase at the gym counter and take it home immediately.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-black border border-yellow-500/20 p-8 rounded-lg text-center hover:border-yellow-500 transition-all"
              >
                <div className="text-yellow-500 flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
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
              VISIT OUR STORE TODAY
            </h2>
            <p className="text-black/80 text-xl mb-8 max-w-2xl mx-auto">
              All products are available at our gym reception. Talk to our nutrition experts for
              personalized recommendations.
            </p>
            <p className="text-black font-bold text-lg">
              📍 IronForge Gym Reception | Open 24/7
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
