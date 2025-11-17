import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: "Adventure Activities in Baltistan",
  description: "Trekking, mountaineering, skiing, and adventure sports in Baltistan.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Adventure() {
  const activities = [
    {
      name: "K2 Base Camp Trek",
      difficulty: "Expert",
      duration: "12-16 days",
      season: "Jun-Sep",
      description: "The world's most challenging trek to the base camp of K2, second-highest peak"
    },
    {
      name: "Deosai Plains Trek",
      difficulty: "Moderate",
      duration: "3-5 days",
      season: "Jun-Oct",
      description: "Alpine meadows, wildlife, and stunning views from 'Land of the Gods'"
    },
    {
      name: "Gondogoro La Trek",
      difficulty: "Hard",
      duration: "7-10 days",
      season: "Jul-Sep",
      description: "Spectacular high mountain pass connecting Shigar and Skardu valleys"
    },
    {
      name: "Mountaineering Expeditions",
      difficulty: "Expert",
      duration: "30-60 days",
      season: "Jun-Sep",
      description: "Summit expeditions for Broad Peak, Gasherbrum, and other 8000m peaks"
    },
    {
      name: "Skiing & Snowboarding",
      difficulty: "Varies",
      duration: "Day trips",
      season: "Jan-Mar",
      description: "Excellent powder snow and uncrowded slopes in winter months"
    },
    {
      name: "Rock Climbing",
      difficulty: "Varies",
      duration: "Day trips",
      season: "May-Oct",
      description: "World-class granite and limestone routes for all skill levels"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Adventure Activities</h1>
        <p className="text-lg text-muted-foreground">
          From world-class trekking to mountaineering expeditions - find your perfect adventure
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {activities.map((activity) => (
          <Card key={activity.name} className="hover-scale transition-all hover:shadow-lg border-2">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-2">{activity.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{activity.description}</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-background/80 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">Difficulty</p>
                  <p className="font-semibold text-sm">{activity.difficulty}</p>
                </div>
                <div className="bg-background/80 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="font-semibold text-sm">{activity.duration}</p>
                </div>
                <div className="bg-background/80 p-3 rounded-lg">
                  <p className="text-xs text-muted-foreground">Season</p>
                  <p className="font-semibold text-sm">{activity.season}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <AlertCircle className="h-6 w-6 text-primary" />
            Safety Guidelines
          </h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Guides Required:</strong> Always hire experienced local guides for all treks and activities</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Acclimatization:</strong> Allow proper time for altitude acclimatization (minimum 2-3 days)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Insurance:</strong> Get comprehensive travel and mountaineering insurance before arrival</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Physical Fitness:</strong> Train for 2-3 months before attempting challenging treks</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
