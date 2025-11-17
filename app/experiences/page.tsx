import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Unique Experiences in Baltistan",
  description: "Immersive experiences - homestays, workshops, and cultural interactions in Baltistan.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Experiences() {
  const experiences = [
    {
      title: "Village Homestays",
      description: "Stay with local families and experience authentic daily life and hospitality",
      duration: "1-7 days"
    },
    {
      title: "Cooking Classes",
      description: "Learn to prepare traditional Balti dishes from local cooks",
      duration: "Half-day"
    },
    {
      title: "Carpet Weaving Workshops",
      description: "Try your hand at traditional carpet weaving with master craftspeople",
      duration: "Half to Full Day"
    },
    {
      title: "Horse Trekking",
      description: "Explore valleys and meadows on horseback with local guides",
      duration: "1-3 days"
    },
    {
      title: "Photography Tours",
      description: "Guided photography expeditions to capture landscapes and culture",
      duration: "1-5 days"
    },
    {
      title: "Language Classes",
      description: "Learn basic Balti language and cultural communication",
      duration: "Daily 2-3 hours"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Unique Experiences</h1>
        <p className="text-lg text-muted-foreground">
          Immerse yourself in Balti culture through authentic, meaningful interactions and activities
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp) => (
          <Card key={exp.title} className="hover-scale transition-all hover:shadow-lg border-2">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>
              <Badge variant="outline" className="text-xs">{exp.duration}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Local Experiences?</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Authentic Connection:</strong> Direct engagement with local communities and traditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Economic Support:</strong> Your money directly benefits local families and artisans</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Cultural Preservation:</strong> Support for traditional skills and knowledge</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Unforgettable Memories:</strong> Personal connections and stories that last a lifetime</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
