'use client';
import { motion } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  position: string;
  message: string;
  image: string;
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from people who’ve found their dream properties with us!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-xs"
            >
              <div className="flex items-center mb-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <img src={testimonial.image} alt={testimonial.name} className="object-cover h-full w-full" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.message}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
