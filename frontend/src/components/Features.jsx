import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "🎬",
      title: "One-Click Animation",
      description: "Transform static videos into animated masterpieces with a single click. No complex settings or editing skills required.",
      details: [
        "Automatic character detection",
        "Smart motion tracking",
        "Real-time preview",
        "Batch processing"
      ]
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Process videos in seconds, not hours. Our AI engine optimizes for speed without compromising quality.",
      details: [
        "60-second processing",
        "4K resolution support",
        "GPU acceleration",
        "Cloud rendering"
      ]
    },
    {
      icon: "🎨",
      title: "Smart Styles",
      description: "Choose from dozens of animation styles tailored for different platforms and content types.",
      details: [
        "Platform-optimized templates",
        "Custom style builder",
        "Brand kit integration",
        "Style transfer"
      ]
    },
    {
      icon: "🤖",
      title: "AI-Powered",
      description: "Advanced machine learning algorithms that understand your content and apply perfect animations automatically.",
      details: [
        "Content-aware animation",
        "Automatic timing",
        "Smart object tracking",
        "Continuous learning"
      ]
    }
  ];

  const useCases = [
    {
      category: "Social Media",
      items: ["Instagram Reels", "TikTok Videos", "YouTube Shorts", "LinkedIn Content"]
    },
    {
      category: "Business",
      items: ["Product Demos", "Explainer Videos", "Training Content", "Marketing Ads"]
    },
    {
      category: "Education",
      items: ["Online Courses", "Tutorial Videos", "Educational Content", "Presentation Aids"]
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Powerful Features,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Simple Interface
            </span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Everything you need to create stunning animated videos without the complexity of traditional editing software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Watch Demo
            </Link>
          </div>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 ${
                  activeFeature === index
                    ? "bg-white shadow-2xl border border-blue-100 transform scale-105"
                    : "bg-white/70 backdrop-blur-sm shadow-lg border border-white/50 hover:shadow-xl"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-slate-700">
                          <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Animated Preview */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="aspect-video bg-slate-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{features[activeFeature].icon}</div>
                    <h4 className="text-2xl font-bold text-slate-800 mb-2">
                      {features[activeFeature].title}
                    </h4>
                    <p className="text-slate-600 max-w-md mx-auto">
                      {features[activeFeature].description}
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar Animation */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-slate-200">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-slate-200 p-4"
              >
                <div className="text-sm font-semibold text-slate-700">Processing...</div>
                <div className="text-xs text-slate-500">60% complete</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-slate-200 p-4"
              >
                <div className="text-sm font-semibold text-green-600">Ready to export</div>
                <div className="text-xs text-slate-500">4K available</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold text-slate-900 mb-4">
            Perfect For Every Use Case
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Whether you're a content creator, marketer, or educator, our platform adapts to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
            >
              <h4 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                {useCase.category}
              </h4>
              <ul className="space-y-4">
                {useCase.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-slate-700 text-lg">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 shadow-2xl"
        >
          <h3 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Videos?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already saving time and creating better content with AI.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              to="/pricing"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-semibold hover:bg-white/10 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}