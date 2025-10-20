import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Linkedin, Mail, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto max-w-6xl space-y-20" ref={ref}>
        {/* === ABOUT SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-14 md:mb-16 gradient-text">
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative group w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 group-hover:opacity-75 animate-glow-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
                  <img
                    src="/assets/shoaib.png"
                    alt="Mohammed Shoaib"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glass-card glass-hover p-6 sm:p-8 md:p-10 space-y-6 rounded-2xl"
            >
              <h3 className="text-2xl sm:text-3xl font-bold gradient-text">
                Mohammed Shoaib
              </h3>

              {/* Personal Info */}
              <div className="space-y-4 text-sm sm:text-base text-foreground/80">
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

              {/* Education */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-purple-400">
                  Education
                </h4>
                <p className="text-foreground/90 leading-relaxed">
                  Pursuing{" "}
                  <span className="font-semibold text-foreground">BCA</span>{" "}
                  (Bachelor of Computer Application) <br />
                  Sir MV Government Science College, Kuvempu University <br />
                  Bommanakatte, Bhadravathi – 577301
                </p>
              </div>

              {/* Social Buttons */}
              <div className="flex flex-wrap gap-3 pt-6">
                <Button
                  asChild
                  variant="outline"
                  className="border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 w-full sm:w-auto"
                >
                  <a
                    href="https://instagram.com/sho3b.6"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 w-full sm:w-auto"
                >
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-white/50 bg-white/5 hover:bg-white/10 w-full sm:w-auto"
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

        {/* === #2CODE SECTION === */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="relative glass-card glass-hover p-8 sm:p-10 md:p-12 rounded-3xl border border-blue-500/20 text-center shadow-2xl"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-transparent blur-2xl rounded-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white text-2xl sm:text-3xl font-bold shadow-lg"
            >
              {"</>"}
            </motion.div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text">
              Member of #2Code
            </h3>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Active contributor and tech enthusiast — collaborating with peers to
              create innovative digital solutions, share knowledge, and promote
              creative coding culture.
            </p>
            <Button
              asChild
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg text-sm sm:text-base"
            >
              <a
                href="https://hash2code.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit #2Code
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
