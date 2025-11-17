import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Star, Wifi, Utensils } from 'lucide-react';

export const metadata: Metadata = {
  title: "Accommodation in Baltistan",
  description: "Hotels, guesthouses, and lodging options in Skardu and Baltistan. Find the best places to stay.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Accommodation() {
  const accommodations = [
    {
      name: "Skardu Valley Hotels",
      type: "Luxury",
      price: "High",
      rating: 4.8,
      description: "Premium accommodations with stunning mountain views and world-class amenities.",
      features: ["Mountain Views", "WiFi", "Restaurant", "Parking"]
    },
    {
      name: "Traditional Guesthouses",
      type: "Budget-Friendly",
      price: "Low",
      rating: 4.5,
      description: "Authentic Balti hospitality in family-run guesthouses throughout the region.",
      features: ["Authentic Experience", "Local Food", "Warm Service", "Cultural Immersion"]
    },
    {
      name: "Mountain Lodges",
      type: "Mid-Range",
      price: "Medium",
      rating: 4.6,
      description: "Comfortable lodges near trekking routes and natural attractions.",
      features: ["Trek Access", "Guides Available", "Simple Rooms", "Local Cuisine"]
    },
    {
      name: "Tourist Resorts",
      type: "Resort",
      price: "High",
      rating: 4.7,
      description: "All-inclusive resorts with activities and comprehensive travel packages.",
      features: ["All Activities", "Meals Included", "Transport", "Guides"]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Accommodation Guide</h1>
        <p className="text-lg text-muted-foreground">
          Find the perfect place to stay in Baltistan - from luxury hotels to authentic guesthouses
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {accommodations.map((item) => (
          <Card key={item.name} className="hover-scale transition-all hover:shadow-lg border-2">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-xl mb-1">{item.name}</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{item.type}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-primary/20 text-primary border-0">{item.price}</Badge>
              </div>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Booking Tips</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Peak Season (May-October):</strong> Book 2-3 months in advance for best availability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Off-Season Deals:</strong> Negotiate better rates during winter months (November-April)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Multi-Day Discounts:</strong> Most guesthouses offer discounts for weekly or monthly stays</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Package Deals:</strong> Look for trek packages that include accommodation, guides, and meals</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
