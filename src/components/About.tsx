import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 px-4">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl space-y-20" ref={ref}>
        {/* === MAIN ABOUT SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-glow-pulse" />
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <img
                      src="/public/assets/shoaib.png"
                      alt="Mohammed Shoaib"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Info card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-card glass-hover p-8 md:p-10 space-y-6"
            >
              <h3 className="text-3xl font-bold mb-6 gradient-text">Mohammed Shoaib</h3>

              <div className="space-y-4 text-foreground/80">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Date of Birth</p>
                    <p>05/07/2002</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p>Bhadravathi, Shivamogga District</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Contact</p>
                    <p>+91 74117 23428</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <p>ms2653017@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Education</h4>
                <p className="text-foreground/90 leading-relaxed">
                  Pursuing <span className="font-semibold text-foreground">BCA</span> (Bachelor of Computer Application)<br />
                  Sir MV Government Science College, Kuvempu University<br />
                  Bommanakatte, Bhadravathi – 577301
                </p>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-wrap gap-3 pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400"
                >
                  <a href="https://instagram.com/sho3b.6" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-white/50 bg-white/5 hover:bg-white/10"
                >
                  <a href="mailto:ms2653017@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* === CODERS CLUB CONTAINER === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative glass-card glass-hover p-10 md:p-12 rounded-3xl border border-blue-500/20 text-center shadow-2xl"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent blur-2xl rounded-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-3xl font-bold shadow-lg"
            >
              {"</>"}
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold gradient-text">Member of Coders Club</h3>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Active contributor and tech enthusiast — collaborating with peers to create innovative digital solutions, share knowledge, and promote creative coding culture.
            </p>
            <Button
              asChild
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-6 py-2 rounded-full shadow-lg"
            >
              <a href="https://codersclub.netlify.app/" target="_blank" rel="noopener noreferrer">
                Visit Coders Club
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
