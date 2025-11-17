import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: "Festivals & Celebrations",
  description: "Cultural festivals, celebrations, and events throughout the year in Baltistan.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Festivals() {
  const festivals = [
    {
      name: "Eid ul-Fitr",
      month: "April (varies)",
      description: "Islamic celebration marking the end of Ramadan with family gatherings and festivities",
      significance: "Religious"
    },
    {
      name: "Eid ul-Adha",
      month: "June (varies)",
      description: "Festival of sacrifice celebrated with prayers, feasts, and community events",
      significance: "Religious"
    },
    {
      name: "Skardu Spring Festival",
      month: "April-May",
      description: "Celebration of spring with cultural performances, flower displays, and local events",
      significance: "Seasonal"
    },
    {
      name: "Deosai Summer Festival",
      month: "June",
      description: "Festival celebrating the opening of Deosai Plains with nature walks and camping",
      significance: "Tourism"
    },
    {
      name: "Harvest Festival",
      month: "September-October",
      description: "Celebration of harvest season with traditional food and communal gatherings",
      significance: "Agricultural"
    },
    {
      name: "Polo Festival",
      month: "Throughout Summer",
      description: "Traditional high-altitude polo matches in Skardu - the world's highest polo ground",
      significance: "Sports"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Festivals & Celebrations</h1>
        <p className="text-lg text-muted-foreground">
          Experience vibrant cultural celebrations and seasonal festivals throughout the year
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {festivals.map((festival) => (
          <Card key={festival.name} className="hover-scale transition-all hover:shadow-lg border-2">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg">{festival.name}</h3>
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                <strong className="text-foreground">When:</strong> {festival.month}
              </p>
              <p className="text-muted-foreground text-sm mb-4">{festival.description}</p>
              <Badge>{festival.significance}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Festival Tips</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Plan Ahead:</strong> Book accommodation well in advance during festivals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Dress Respectfully:</strong> Wear modest clothing during religious festivals</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Ask Permission:</strong> Always ask before photographing celebrations and people</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Embrace Invitations:</strong> If invited to celebrations, it's a great honor to accept</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
