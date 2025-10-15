import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-white/10">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            className="text-foreground/60 group cursor-default inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <span className="group-hover:gradient-text transition-all duration-300">
              Developed by Mohammed Shoaib
            </span>
            {" "}© {new Date().getFullYear()}
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-6 rounded-full"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
