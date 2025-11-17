import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Skardu Valley",
  description: "Complete guide to Skardu Valley - gateway to K2, Kachura Lakes, and mountain adventures.",
};

export default function SkardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Skardu Valley - Gateway to K2</h1>
        <p className="text-lg text-muted-foreground">
          The stunning valley that serves as your entry point to Baltistan's greatest treasures
        </p>
      </div>

      <Card>
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Welcome to Skardu</h2>
          <p className="text-muted-foreground">
            Detailed content about Skardu Valley coming soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
