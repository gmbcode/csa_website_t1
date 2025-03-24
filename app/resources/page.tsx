import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const resources = [
  { title: "Card #1", description: "Description for card #1." },
  { title: "Card #2", description: "Description for card #2." },
  { title: "Card #3", description: "Description for card #3." },
  { title: "Card #4", description: "Description for card #4." },
];

export default function ResourcesPage() {
  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 mt-4">Resources</h1>
      
      {/* Resource Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <Card key={index} className="p-4 flex flex-col items-center text-center shadow-lg rounded-2xl hover:shadow-xl transition-shadow">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
              <p className="text-sm text-gray-400">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
