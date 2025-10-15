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
    <section id="contact" className="relative py-32 px-4">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">
            Get In Touch
          </h2>

          <p className="text-xl text-foreground/70 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          {/* Main contact card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="glass-card glass-hover p-12 mb-12 relative overflow-hidden group"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-purple-400" />
                <p className="text-lg text-foreground/80">
                  Bhadravathi, Shivamogga District, Karnataka
                </p>
              </div>

              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white border-0 px-10 py-6 text-lg shadow-[0_0_30px_rgba(167,139,250,0.5)] hover:shadow-[0_0_50px_rgba(167,139,250,0.8)] transition-all duration-300"
              >
                <a href="mailto:ms2653017@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Message
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Social links + Call container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid md:grid-cols-4 sm:grid-cols-2 gap-6"
          >
            {socialLinks.map(({ icon: Icon, label, href, color, hoverShadow }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  glass-card p-8 flex flex-col items-center gap-4 group
                  hover:bg-white/10 hover:border-white/30 ${hoverShadow}
                  transition-all duration-300
                `}
              >
                <div
                  className={`p-4 rounded-full bg-gradient-to-br ${color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-lg font-semibold text-foreground group-hover:gradient-text transition-all duration-300">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
