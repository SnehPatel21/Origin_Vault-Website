import React from 'react';
import { motion } from 'framer-motion';

export function Loader() {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader-circle" />
    </motion.div>
  );
}