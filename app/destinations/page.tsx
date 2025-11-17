import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Destinations",
  description: "Explore the beautiful destinations of Baltistan including Skardu, Shigar, Khaplu, and more.",
};

const destinations = [
  { title: "Skardu Valley", href: "/destinations/skardu", description: "Gateway to K2 and the Karakoram" },
  { title: "Shigar", href: "/destinations/shigar", description: "Historic valley with ancient forts" },
  { title: "Khaplu", href: "/destinations/khaplu", description: "Home to the majestic Khaplu Palace" },
  { title: "Kharmang", href: "/destinations/kharmang", description: "Pristine wilderness and trekking" },
  { title: "Rondu", href: "/destinations/rondu", description: "Remote valley with stunning views" },
];

export default function Destinations() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Destinations</h1>
        <p className="text-lg text-muted-foreground">
          Explore the stunning destinations that make Baltistan unforgettable
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.href} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-2">{destination.title}</h3>
              <p className="text-muted-foreground mb-4">{destination.description}</p>
              <Button asChild variant="outline">
                <Link href={destination.href}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
