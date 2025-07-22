'use client';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Ruler, MapPin, Heart } from "lucide-react";
import Image from "next/image";

type PropertyCardProps = {
  property: {
    title: string;
    price: string;
    location: string;
    image: string;
    featured: boolean;
    developer: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
    completionDate: string;
  };
};

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <div className="relative h-64 w-full">
          <Image src={property.image} alt={property.title} fill className="object-cover" />
          {property.featured && (
            <Badge className="absolute top-4 left-4 bg-blue-600 hover:bg-blue-700">
              Featured
            </Badge>
          )}
          <Badge className="absolute top-4 right-4 bg-gray-600 hover:bg-gray-700">
            {property.developer}
          </Badge>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-16 right-4 rounded-full bg-white/90 hover:bg-white"
          >
            <Heart className="h-5 w-5 text-red-500" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="text-xl font-semibold text-blue-700">{property.price}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <Bed className="mr-2" />
            {property.beds} Beds
          </div>
          <div className="flex items-center mr-4">
            <Bath className="mr-2" />
            {property.baths} Baths
          </div>
          <div className="flex items-center">
            <Ruler className="mr-2" />
            {property.sqft} sqft
          </div>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full">View Details</Button>
      </CardFooter>
    </Card>
  );
}
