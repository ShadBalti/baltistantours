import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Balti Culture & Heritage",
  description: "Explore the rich Balti culture, traditions, history, and way of life in Baltistan.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Culture() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Balti Culture & Heritage</h1>
        <p className="text-lg text-muted-foreground">
          Discover a unique blend of Tibetan and Islamic traditions spanning over 700 years
        </p>
      </div>

      <Card className="border-2 hover-scale">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Historical Background</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            The Balti people have inhabited the region for over 700 years, developing a unique culture that blends Tibetan Buddhism, 
            Islamic traditions, and Central Asian influences. The region was an important stop on the ancient Silk Road, contributing 
            to its rich cultural heritage.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Today, the Balti people maintain their distinctive traditions while embracing modern development, making Baltistan 
            a fascinating destination for cultural exploration.
          </p>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4">Traditional Arts & Crafts</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span><strong className="text-foreground">Carpet Weaving:</strong> Intricate traditional designs passed down through generations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span><strong className="text-foreground">Wood Carving:</strong> Masterfully carved furniture and decorative pieces</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span><strong className="text-foreground">Metalwork:</strong> Copper and brass vessels with traditional patterns</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <span><strong className="text-foreground">Embroidery:</strong> Colorful traditional patterns on textiles and clothing</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-2 hover-scale">
          <CardContent className="pt-8">
            <h3 className="text-xl font-bold mb-4">Religious Traditions</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span><strong className="text-foreground">Islamic Influence:</strong> Mosques and religious practices in daily life</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span><strong className="text-foreground">Buddhist Heritage:</strong> Ancient monasteries and spiritual sites remain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span><strong className="text-foreground">Prayer Wheels & Stupas:</strong> Historical Buddhist monuments dot the landscape</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold mt-1">•</span>
                <span><strong className="text-foreground">Pilgrimage Routes:</strong> Sacred sites attracting visitors from across the region</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Cultural Etiquette</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Dress Respectfully:</strong> Cover shoulders and knees, especially in religious areas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Photography:</strong> Always ask permission before photographing people and religious sites</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Hospitality:</strong> Accept tea and food when offered - it's a sign of respect</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Greetings:</strong> A simple "As-salamu alaykum" (peace be upon you) is appreciated</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
