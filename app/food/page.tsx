import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UtensilsCrossed, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title: "Balti Food & Cuisine",
  description: "Discover authentic Balti cuisine - traditional dishes, local restaurants, and must-try foods.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Food() {
  const dishes = [
    {
      name: "Momos",
      description: "Steamed dumplings filled with meat or vegetables, served with sauce",
      type: "Appetizer",
      spice: "Mild"
    },
    {
      name: "Thukpa",
      description: "Warming noodle soup with meat, vegetables, and aromatic spices",
      type: "Soup",
      spice: "Medium"
    },
    {
      name: "Shakapo",
      description: "Traditional Balti vegetable stew made with local produce",
      type: "Main Course",
      spice: "Mild"
    },
    {
      name: "Yak Butter Tea",
      description: "Energizing Tibetan-influenced tea with yak butter and salt",
      type: "Beverage",
      spice: "Mild"
    },
    {
      name: "Balti Bread (Skyu)",
      description: "Traditional hand-rolled flatbread, perfect with curries",
      type: "Bread",
      spice: "Mild"
    },
    {
      name: "Buuz",
      description: "Meat dumplings with spiced filling, a local favorite",
      type: "Appetizer",
      spice: "Medium"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Balti Cuisine</h1>
        <p className="text-lg text-muted-foreground">
          Experience authentic flavors - from traditional mountain dishes to contemporary fusion cuisine
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <Card key={dish.name} className="hover-scale transition-all hover:shadow-lg border-2">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-lg">{dish.name}</h3>
                <UtensilsCrossed className="h-5 w-5 text-primary" />
              </div>
              <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline">{dish.type}</Badge>
                <Badge className={dish.spice === "Mild" ? "bg-green-100 text-green-900 border-0" : "bg-orange-100 text-orange-900 border-0"}>
                  {dish.spice}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Flame className="h-6 w-6 text-primary" />
            Dining Tips
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Street Food:</strong> Try local bazaars for authentic momos and fresh bread</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Hygiene:</strong> Always eat at busy, popular spots for food safety</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Vegetarian Options:</strong> Inform restaurants in advance for special dietary needs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Local Guides:</strong> Ask your guide for hidden gem restaurants locals love</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
