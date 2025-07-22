'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CallToActionSection() {
  return (
    <section className="py-16 bg-blue-700 text-white text-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Get in touch with our expert team today to start your property journey. Whether you're buying, renting, or investing, we've got you covered.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-gray-100 hover:text-blue-700">
          Contact Us Now
        </Button>
      </motion.div>
    </section>
  );
}
