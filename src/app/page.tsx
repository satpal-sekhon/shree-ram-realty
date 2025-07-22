import HeroSection from "@/components/home/HeroSection";
import DevelopersSection from "@/components/home/DevelopersSection";
import FeaturedPropertiesSection from "@/components/home/FeaturedPropertiesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CallToActionSection from "@/components/home/CallToActionSection";

const developers = [
  {
    id: 1,
    name: "Emaar Properties",
    logo: "/images/emaar-logo.png",
    projectsCompleted: 120,
    specialty: "Luxury Communities"
  },
  {
    id: 2,
    name: "Jubilee",
    logo: "/images/jubilee-logo.jpg",
    projectsCompleted: 45,
    specialty: "Waterfront Properties"
  },
  {
    id: 3,
    name: "SBI Homes",
    logo: "/images/sbi-logo.jpg",
    projectsCompleted: 80,
    specialty: "Affordable Housing"
  },
  {
    id: 4,
    name: "Horizon Group",
    logo: "/images/horizon-logo.jpeg",
    projectsCompleted: 35,
    specialty: "Sustainable Living"
  },
];

const featuredProperties = [
  {
    id: 1,
    title: "Luxury Downtown Apartment",
    price: "$1,200,000",
    beds: 3,
    baths: 3,
    sqft: 2200,
    location: "Downtown Mohali",
    image: "/images/property1.jpg",
    featured: true,
    developer: "Emaar",
    completionDate: "Q4 2024",
    type: "apartment"
  },
  {
    id: 2,
    title: "Waterfront Villa",
    price: "$3,500,000",
    beds: 5,
    baths: 4,
    sqft: 4800,
    location: "Palm Jumeirah",
    image: "/images/property2.webp",
    featured: true,
    developer: "Jubilee",
    completionDate: "Q2 2025",
    type: "villa"
  },
  {
    id: 3,
    title: "Horizon Hills Townhouse",
    price: "$950,000",
    beds: 4,
    baths: 3,
    sqft: 2800,
    location: "Sekhon City",
    image: "/images/property3.jpg",
    featured: false,
    developer: "Horizon Group",
    completionDate: "Q1 2025",
    type: "townhouse"
  },
  {
    id: 4,
    title: "SBI Premium Plot",
    price: "$650,000",
    beds: 0,
    baths: 0,
    sqft: 5000,
    location: "Dubai South",
    image: "/images/property4.webp",
    featured: false,
    developer: "SBI Homes",
    completionDate: "Ready for Construction",
    type: "plot"
  },
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Investor',
    message: 'Great experience working with the team. Found the perfect property in no time!',
    image: '/images/testimonial1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Homebuyer',
    message: 'I love my new home! The whole process was smooth, and I felt well-supported.',
    image: '/images/testimonial2.jpg',
  },
  // More testimonials...
];

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <DevelopersSection developers={developers} />
      <FeaturedPropertiesSection properties={featuredProperties} />
      <TestimonialsSection testimonials={testimonials} />
      <CallToActionSection />
    </main>
  );
}
