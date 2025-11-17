import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Baltistan Tourism Guide",
  description: "Learn about our mission to provide comprehensive Baltistan travel information.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function About() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">About This Guide</h1>
        <p className="text-lg text-muted-foreground">
          Your comprehensive resource for discovering Baltistan
        </p>
      </div>

      <Card className="border-2 hover-scale">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            This comprehensive Baltistan Tourism Guide exists to provide travelers with accurate, detailed, and practical information 
            about one of the world's most spectacular mountain destinations. We aim to help visitors make the most of their journey 
            while respecting local culture and supporting sustainable tourism.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're planning a trekking expedition, cultural immersion, or adventure getaway, this guide provides everything 
            you need to know about destinations, activities, culture, food, and practical travel essentials.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4">What's Included</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Detailed destination guides and hidden gems</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Adventure activities and trekking routes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Cultural insights and local traditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Food guides and culinary recommendations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg">✓</span>
                <span>Practical travel information and tips</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4">Why Trust Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">•</span>
                <span>Comprehensive research and local expert input</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">•</span>
                <span>Up-to-date information for current travelers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">•</span>
                <span>Authentic local perspectives and experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">•</span>
                <span>Practical, tested advice from experienced travelers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold text-lg">•</span>
                <span>Commitment to sustainable and responsible tourism</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Sustainable Tourism</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We advocate for responsible tourism that benefits local communities while preserving Baltistan's natural and cultural heritage. 
            When you visit, please consider hiring local guides, eating at local restaurants, staying in family-run guesthouses, 
            and respecting local traditions and the environment.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            By traveling responsibly, you help ensure that Baltistan remains a thriving destination for generations to come.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
