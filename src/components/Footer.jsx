import React from "react";
import { motion } from "framer-motion";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="animated-bg"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-links">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              >
              Home
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/properties"
              >
              Products
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/property-details"
              >
              Catalog
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              >
              Contact
            </motion.a>
              <p>© 2025 Trinox. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
