import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How to Get There",
  description: "Complete guide to reaching Baltistan - flights, roads, and travel options to Skardu and beyond.",
};

export default function GettingThere() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Getting There</h1>
        <p className="text-lg text-muted-foreground">
          Your complete guide to reaching Baltistan and exploring the Roof of the World
        </p>
      </div>

      {/* ... rest of the content will follow the same pattern ... */}
      <Card>
        <CardContent className="pt-8">
          <h2 className="text-2xl font-bold mb-4">Travel Routes to Baltistan</h2>
          <p className="text-muted-foreground">
            Coming soon - detailed travel routes and transportation options.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
