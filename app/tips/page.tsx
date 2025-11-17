import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: "Expert Travel Tips for Baltistan",
  description: "Insider tips, advice, and recommendations for visiting Baltistan.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Tips() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Expert Travel Tips</h1>
        <p className="text-lg text-muted-foreground">
          Insider recommendations and practical advice from experienced travelers
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-primary" />
              Best Practices
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">Arrive Early:</strong> Reach Skardu a day before starting treks for acclimatization</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">Hire Local Guides:</strong> Support the community and get authentic insights</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">Respect the Culture:</strong> Learn basic etiquette before arrival</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">→</span>
                <span><strong className="text-foreground">Slow Travel:</strong> Spend time in villages, not just major attractions</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-accent" />
              Money-Saving Tips
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span><strong className="text-foreground">Travel Off-Season:</strong> Visit November-April for 30-40% lower prices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span><strong className="text-foreground">Group Treks:</strong> Join group treks to share guide and porter costs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span><strong className="text-foreground">Eat Local:</strong> Street food and small restaurants are cheap and authentic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">→</span>
                <span><strong className="text-foreground">Negotiate:</strong> Multi-day services (guides, transport) have negotiable rates</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl font-bold">✗</span>
              <span><strong className="text-foreground">Rushing:</strong> Don't try to see everything in a short time. Quality over quantity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl font-bold">✗</span>
              <span><strong className="text-foreground">Ignoring Guides:</strong> Local guides know terrain, weather, and safety better than anyone</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl font-bold">✗</span>
              <span><strong className="text-foreground">Underestimating Altitude:</strong> Take it slow and drink water constantly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl font-bold">✗</span>
              <span><strong className="text-foreground">Poor Preparation:</strong> Physical training and proper gear are non-negotiable</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-500 text-xl font-bold">✗</span>
              <span><strong className="text-foreground">Disrespecting Culture:</strong> Always ask before photographing people and sacred sites</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
