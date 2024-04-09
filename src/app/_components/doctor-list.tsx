import Image from "next/image";
import React from "react";
import { Button } from "~/components/ui/button";
import { Card } from "~/components/ui/card";

interface Doctor {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  location: string;
  rating: number;
  earliestStartDate: string;
  imageUrl: string;
}

const mockDoctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Jane Smith",
    title: "MD",
    specialties: ["Emergency Medicine"],
    location: "New York",
    rating: 4.5,
    earliestStartDate: "2023-05-01",
    imageUrl:
      "https://d1k13df5m14swc.cloudfront.net/photos/Dr-Mike-Yang-DO-460165-circle_medium__v1__.png",
  }, // Replace with actual image URLs
  {
    id: 2,
    name: "Dr. John Doe",
    title: "MD",
    specialties: ["Trauma Surgery"],
    location: "Los Angeles",
    rating: 4.7,
    earliestStartDate: "2023-06-15",
    imageUrl:
      "https://d2uur722ua7fvv.cloudfront.net/photos/Dr-Anthony-Miranda-MD-435464-circle_medium__v1__.png",
  },
  {
    id: 3,
    name: "Dr. Alice Johnson",
    title: "MD",
    specialties: ["Cardiology"],
    location: "Chicago",
    rating: 4.6,
    earliestStartDate: "2023-07-01",
    imageUrl:
      "https://d1k13df5m14swc.cloudfront.net/photos/Dr-Dana-Mirza-MD-325704-circle_medium__v1__.png",
  },
  {
    id: 4,
    name: "Dr. Bob Brown",
    title: "MD",
    specialties: ["Pediatrics"],
    location: "Houston",
    rating: 4.4,
    earliestStartDate: "2023-08-01",
    imageUrl:
      "https://d1k13df5m14swc.cloudfront.net/photos/Dr-Melinda-Au-DO-465897-circle_medium__v1__.png",
  },
  {
    id: 5,
    name: "Dr. Rachel Green",
    title: "MD",
    specialties: ["Neurology"],
    location: "Phoenix",
    rating: 4.8,
    earliestStartDate: "2023-09-01",
    imageUrl:
      "https://d3wnzga3fpd9a.cloudfront.net/photos/Dr-Sarah-Perrin-Dudenhoeffer-DO-432518-circle_medium__v1__.png",
  },
  {
    id: 6,
    name: "Dr. Ross Geller",
    title: "MD",
    specialties: ["Orthopedics"],
    location: "Philadelphia",
    rating: 4.3,
    earliestStartDate: "2023-10-01",
    imageUrl:
      "https://d1k13df5m14swc.cloudfront.net/photos/Dr-Aleksandr-Kovalskiy-MD-464470-circle_medium__v1__.png",
  },
];

export const DoctorList: React.FC = () => {
  return (
    <div className="mx-auto w-1/2 overflow-auto">
      {mockDoctors.map((doctor) => (
        <Card key={doctor.id} className="mb-4 flex flex-row items-center p-4">
          <Image
            width={30}
            height={30}
            src={doctor.imageUrl}
            alt={`Profile of ${doctor.name}`}
            className="mr-4 h-20 w-20 rounded-full"
          />

          {/* Replace with your actual placeholder image URL */}
          <div className="flex-grow">
            <h3 className="text-lg font-bold">{`${doctor.name}, ${doctor.title}`}</h3>
            <p className="text-sm text-gray-600">
              {doctor.specialties.join(", ")}
            </p>
            <p className="text-sm">{`Location: ${doctor.location}`}</p>
            <p className="text-sm">{`Rating: ${doctor.rating}`}</p>
            <p className="text-sm">{`Earliest Start Date: ${doctor.earliestStartDate}`}</p>
          </div>
          <Button variant="default">Contact</Button>
        </Card>
      ))}
    </div>
  );
};
