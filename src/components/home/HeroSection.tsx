'use client';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 text-white"
    >
      <div className="absolute inset-0 bg-black/30 z-10" />
      <Image src="/images/banner-1.png" alt="Dubai skyline" fill className="object-cover" priority />
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Premium Properties from Top Developers</h1>
          <p className="text-xl mb-8">Exclusive access to Emaar, Jubilee, SBI Homes, Horizon Group, and more</p>
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-xl p-6 max-w-4xl w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <Input placeholder="Search by location, property, or developer" className="h-12" />
            </div>
            <Select>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Property Types</SelectItem>
                <SelectItem value="apartment">Apartments</SelectItem>
                <SelectItem value="villa">Villas</SelectItem>
                <SelectItem value="townhouse">Townhouses</SelectItem>
                <SelectItem value="plot">Plots</SelectItem>
              </SelectContent>
            </Select>
            <Button className="h-12 bg-blue-600 hover:bg-blue-700">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
