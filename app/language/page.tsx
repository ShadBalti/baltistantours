import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Balti Language Guide",
  description: "Learn basic Balti phrases and useful words for communicating in Baltistan.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Language() {
  const phrases = [
    { balti: "As-salamu alaykum", english: "Peace be upon you", usage: "General greeting" },
    { balti: "Wa alaykum as-salam", english: "And upon you be peace", usage: "Response to greeting" },
    { balti: "Jumadar", english: "Thank you", usage: "Expressing gratitude" },
    { balti: "Khenang", english: "You're welcome", usage: "Response to thanks" },
    { balti: "Bilk-o", english: "No", usage: "Negative response" },
    { balti: "Ho", english: "Yes", usage: "Positive response" },
    { balti: "Zemas chun?", english: "How are you?", usage: "Friendly greeting" },
    { balti: "Namaste", english: "Respectful greeting (Buddhist)", usage: "Alternative greeting" },
    { balti: "Tsampa", english: "Roasted barley flour", usage: "Traditional food" },
    { balti: "Khalo", english: "Mountain pass", usage: "Trekking terminology" }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Balti Language & Phrases</h1>
        <p className="text-lg text-muted-foreground">
          Learn essential phrases to communicate with local people and deepen your cultural connection
        </p>
      </div>

      <div className="grid gap-6">
        {phrases.map((phrase, idx) => (
          <Card key={idx} className="border-2 hover-scale">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Balti</p>
                  <p className="font-bold text-lg text-primary">{phrase.balti}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">English</p>
                  <p className="font-semibold">{phrase.english}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-semibold mb-1">Usage</p>
                  <Badge variant="outline">{phrase.usage}</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30">
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Language Notes</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Main Languages:</strong> Balti (Tibetan-influenced), Urdu, English widely spoken in Skardu</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Effort Appreciated:</strong> Locals deeply appreciate any attempt to speak their language</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Communication:</strong> Most young people speak English; guides know trekking terminology</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl mt-1">•</span>
              <span><strong className="text-foreground">Translation Apps:</strong> Google Translate covers basic Urdu-English translation</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
