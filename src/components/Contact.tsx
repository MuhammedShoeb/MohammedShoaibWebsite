import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/sho3b.6",
      color: "from-pink-500 to-purple-500",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "from-blue-600 to-blue-400",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:ms2653017@gmail.com",
      color: "from-green-500 to-emerald-500",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]",
    },
    {
      icon: Phone,
      label: "Call",
      href: "tel:+917411723428",
      color: "from-green-500 to-emerald-500",
      hoverShadow: "hover:shadow-[0_0_40px_rgba(34,197,94,0.6)]",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Get In Touch
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-foreground/70 mb-14 sm:mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your visions.
          </p>

          {/* Main Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card glass-hover relative overflow-hidden group p-6 sm:p-10 md:p-12 mb-12 sm:mb-16 rounded-2xl"
          >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-center sm:text-left">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0" />
                <p className="text-sm sm:text-base md:text-lg text-foreground/80 max-w-md">
                  Bhadravathi, Shivamogga District, Karnataka
                </p>
              </div>

              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-medium shadow-[0_0_30px_rgba(167,139,250,0.5)] hover:shadow-[0_0_50px_rgba(167,139,250,0.8)] transition-all duration-300 rounded-full"
              >
                <a href="mailto:ms2653017@gmail.com">
                  <Mail className="w-5 h-5 mr-2 inline-block" />
                  Send Message
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Social + Call Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-4 
              gap-6 sm:gap-8
            "
          >
            {socialLinks.map(
              ({ icon: Icon, label, href, color, hoverShadow }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center gap-4 
                    hover:bg-white/10 hover:border-white/30 ${hoverShadow}
                    transition-all duration-300 text-center
                  `}
                >
                  <div
                    className={`p-4 sm:p-5 rounded-full bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                    {label}
                  </span>
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
