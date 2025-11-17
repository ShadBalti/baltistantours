import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Travel Essentials for Baltistan",
  description: "What to pack, documentation, health, and safety information for traveling to Baltistan.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function TravelEssentials() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Travel Essentials</h1>
        <p className="text-lg text-muted-foreground">
          Everything you need to know about documentation, packing, health, and safety
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              Documentation
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span><strong className="text-foreground">Passport:</strong> Valid for at least 6 months</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span><strong className="text-foreground">Visa:</strong> Pakistani visa (tourist visa valid 30 days)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span><strong className="text-foreground">Travel Insurance:</strong> Comprehensive coverage recommended</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span><strong className="text-foreground">Permits:</strong> No special permits needed for Skardu (except trekking areas)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">✓</span>
                <span><strong className="text-foreground">Vaccinations:</strong> Routine vaccinations recommended</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h2 className="text-xl font-bold mb-4">Packing Checklist</h2>
            <div className="space-y-2 text-sm">
              <Badge className="w-full justify-start py-2 px-3 bg-primary/20 text-primary border-0 hover:bg-primary/30">
                Clothing: Layers, warm jacket, trekking boots, sun hat
              </Badge>
              <Badge className="w-full justify-start py-2 px-3 bg-accent/20 text-accent border-0 hover:bg-accent/30">
                Accessories: Sunscreen, sunglasses, headlamp, water bottle
              </Badge>
              <Badge className="w-full justify-start py-2 px-3 bg-secondary/20 text-secondary border-0 hover:bg-secondary/30">
                Electronics: Phone charger, camera, power bank, adapters
              </Badge>
              <Badge className="w-full justify-start py-2 px-3 bg-primary/20 text-primary border-0 hover:bg-primary/30">
                Health: Altitude sickness medication, first aid kit, medications
              </Badge>
              <Badge className="w-full justify-start py-2 px-3 bg-accent/20 text-accent border-0 hover:bg-accent/30">
                Documents: Copies of passport, travel insurance, booking confirmations
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-2 hover-scale">
        <CardContent className="pt-8">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-orange-500" />
            Health & Safety
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl font-bold">•</span>
              <span><strong className="text-foreground">Altitude Sickness:</strong> Most of Baltistan is above 2,000m. Drink water, avoid alcohol, rest first day</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl font-bold">•</span>
              <span><strong className="text-foreground">Water Safety:</strong> Drink bottled water. Avoid ice and undercooked food</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl font-bold">•</span>
              <span><strong className="text-foreground">Sun Protection:</strong> UV rays are strong at altitude. Use high SPF sunscreen</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl font-bold">•</span>
              <span><strong className="text-foreground">Road Safety:</strong> Mountain roads are winding. Use reputable transport services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 text-xl font-bold">•</span>
              <span><strong className="text-foreground">Weather Awareness:</strong> Weather changes rapidly. Check forecasts and follow guide advice</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Money & Costs</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Pakistani Rupee (PKR) is the local currency. Budget accommodation averages 1,500-3,000 PKR per night, 
            meals cost 300-1,000 PKR, and trek guides range from 1,500-3,000 PKR per day. Major credit cards are accepted 
            in Skardu, but carry cash for remote areas. Most prices are negotiable, especially for multi-day services.
          </p>
          <Badge className="bg-primary/30 text-primary border-0">Budget-Friendly: $20-35/day | Mid-Range: $50-80/day | Luxury: $100+/day</Badge>
        </CardContent>
      </Card>
    </div>
  );
}
