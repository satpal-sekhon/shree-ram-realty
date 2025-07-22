'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Developer = {
  id: number;
  name: string;
  logo: string;
  specialty: string;
  projectsCompleted: number;
};

type DevelopersSectionProps = {
  developers: Developer[];
};

export default function DevelopersSection({ developers }: DevelopersSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Trusted Developers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Partnered with the most reputable developers in the region to bring you premium properties
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {developers.map((developer, index) => (
            <motion.div
              key={developer.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center"
            >
              <div className="relative h-16 w-32 mb-4">
                <Image
                  src={developer.logo}
                  alt={developer.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-lg mb-1">{developer.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{developer.specialty}</p>
              <p className="text-xs text-blue-600">{developer.projectsCompleted}+ Projects</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
