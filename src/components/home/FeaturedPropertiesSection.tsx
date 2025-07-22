'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PropertyCard from "./PropertyCard";

type Property = {
  id: number;
  title: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  image: string;
  featured: boolean;
  developer: string;
  completionDate: string;
  type: string;
};

type FeaturedPropertiesSectionProps = {
  properties: Property[];
};

export default function FeaturedPropertiesSection({ properties }: FeaturedPropertiesSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <motion.h2 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold"
          >
            Featured Properties
          </motion.h2>
          <Button variant="outline">View All Properties</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
