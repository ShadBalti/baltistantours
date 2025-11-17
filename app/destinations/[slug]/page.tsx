import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notFound } from 'next/navigation';
import { MapPin, Compass, Camera, Heart } from 'lucide-react';

const destinations = {
  shigar: {
    name: "Shigar",
    image: "/shigar-palace-baltistan.jpg",
    description: "Home to the historic Shigar Fort and stunning Gondogoro Valley",
    highlights: [
      "Shigar Fort Palace - 400-year-old historic fortress",
      "Gondogoro La - High mountain pass (5,128m)",
      "Shigar Valley - Scenic trekking destination",
      "Local markets and traditional crafts"
    ],
    bestTime: "May to October",
    difficulty: "Moderate to Hard",
    rating: 4.8
  },
  khaplu: {
    name: "Khaplu",
    image: "/khaplu-palace-baltistan.jpg",
    description: "Ancient trade hub with preserved palace and rich history",
    highlights: [
      "Khaplu Palace - Historic royal residence",
      "Starfall Guesthouses - Luxury accommodations",
      "Hushe Valley - Gateway to high peaks",
      "Ancient Buddhist monuments"
    ],
    bestTime: "June to September",
    difficulty: "Moderate",
    rating: 4.7
  },
  kharmang: {
    name: "Kharmang",
    image: "/kharmang-valley-baltistan.jpg",
    description: "Remote mountain valley known for traditional culture and natural beauty",
    highlights: [
      "Kharmang Fort ruins - Ancient fortification",
      "Local village experiences",
      "Mountain trekking routes",
      "Traditional agriculture and crafts"
    ],
    bestTime: "May to October",
    difficulty: "Hard",
    rating: 4.6
  },
  rondu: {
    name: "Rondu",
    image: "/rondu-village-baltistan.jpg",
    description: "Pristine valley with alpine meadows and mountain views",
    highlights: [
      "Alpine meadows and wildflowers",
      "Traditional settlements",
      "Mountain photography spots",
      "Local hospitality and culture"
    ],
    bestTime: "June to September",
    difficulty: "Moderate",
    rating: 4.5
  }
};

export async function generateStaticParams() {
  return Object.keys(destinations).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations[slug as keyof typeof destinations];
  
  if (!destination) {
    return { title: "Destination Not Found" };
  }

  return {
    title: `${destination.name} - Baltistan Tourism Guide`,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = destinations[slug as keyof typeof destinations];

  if (!destination) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="relative -mx-6 md:-mx-8 lg:-mx-12 -mt-6 md:-mt-8 lg:-mt-12 mb-8">
        <img 
          src={destination.image || "/placeholder.svg"} 
          alt={destination.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg" />
        <div className="absolute bottom-6 left-6">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">{destination.name}</h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge className="text-base py-2 px-3">{destination.difficulty}</Badge>
        <Badge variant="outline" className="text-base py-2 px-3">{destination.bestTime}</Badge>
        <Badge className="bg-yellow-100 text-yellow-900 border-0 text-base py-2 px-3">⭐ {destination.rating}</Badge>
      </div>

      <div>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          {destination.description}
        </p>
      </div>

      <Card className="border-2 hover-scale">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Camera className="h-6 w-6 text-primary" />
            Highlights & Attractions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {destination.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-background/80 rounded-lg">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{highlight}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Practical Information</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Best Time to Visit</h3>
              <p className="text-muted-foreground">{destination.bestTime}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Difficulty Level</h3>
              <p className="text-muted-foreground">{destination.difficulty}</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Getting There</h3>
              <p className="text-muted-foreground">From Skardu by jeep or trek</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="h-6 w-6 text-accent" />
            Travel Tips
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl font-bold">•</span>
              <span><strong className="text-foreground">Hire a Guide:</strong> Local guides offer valuable insights and ensure your safety</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl font-bold">•</span>
              <span><strong className="text-foreground">Acclimatize:</strong> Allow time for altitude adjustment before strenuous activities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl font-bold">•</span>
              <span><strong className="text-foreground">Pack Properly:</strong> Bring layers, sun protection, and proper footwear</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent text-xl font-bold">•</span>
              <span><strong className="text-foreground">Respect Culture:</strong> Follow local customs and ask permission before photographing</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
