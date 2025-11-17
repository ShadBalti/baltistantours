import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mountain, Map, Heart, Users } from 'lucide-react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Baltistan Travel Guide - Explore the Roof of the World",
  description: "Complete guide to Baltistan tourism: routes, destinations, culture, food, and travel essentials. Discover Skardu, K2, and the Karakoram mountains.",
};

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative -mx-6 md:-mx-8 lg:-mx-12 -mt-6 md:-mt-8 lg:-mt-12 mb-12 animate-fade-in">
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
          <img 
            src="/images/hero-baltistan.jpg" 
            alt="Majestic mountains of Baltistan with snow-capped peaks and valleys" 
            className="w-full h-full object-cover animate-[scale-in_1s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          
          {/* Floating elements for depth */}
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <div className="max-w-5xl">
              <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-primary/30 to-accent/30 backdrop-blur-md rounded-full border border-white/30 shadow-2xl animate-fade-in">
                <p className="text-base text-white font-semibold tracking-wide">🏔️ Discover the Roof of the World</p>
              </div>
              
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight animate-fade-in">
                Explore<br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-shimmer">
                    Baltistan
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 blur-xl -z-10" />
                </span>
              </h1>
              
              <p className="font-sans text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 drop-shadow-lg max-w-3xl mx-auto leading-relaxed animate-fade-in font-light" style={{animationDelay: '0.2s'}}>
                Your gateway to K2, pristine valleys, ancient culture,<br className="hidden md:block" /> and unforgettable mountain adventures
              </p>
              
              <div className="flex gap-5 justify-center flex-wrap mb-10" style={{animationDelay: '0.4s'}}>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white border-0 hover-scale shadow-2xl text-lg px-8 py-6 rounded-full font-semibold">
                  <Link href="/getting-there">Start Your Journey</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/15 hover:bg-white/25 text-white border-2 border-white/40 backdrop-blur-md hover-scale shadow-2xl text-lg px-8 py-6 rounded-full font-semibold">
                  <Link href="/destinations">Explore Destinations</Link>
                </Button>
              </div>
              
              <div className="flex gap-8 md:gap-12 justify-center text-white/90 text-sm md:text-base flex-wrap animate-fade-in" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="h-3 w-3 bg-primary rounded-full shadow-lg shadow-primary/50 animate-pulse" />
                  <span className="font-medium">4 Eight-Thousanders</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="h-3 w-3 bg-accent rounded-full shadow-lg shadow-accent/50 animate-pulse" style={{animationDelay: '0.5s'}} />
                  <span className="font-medium">700+ Years Culture</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="h-3 w-3 bg-secondary rounded-full shadow-lg shadow-secondary/50 animate-pulse" style={{animationDelay: '1s'}} />
                  <span className="font-medium">World-Class Trekking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-primary">About Baltistan</span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          The Roof of the World
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          Baltistan lies in the heart of the <strong className="text-foreground">Karakoram mountain range</strong> in northern Pakistan, 
          home to some of Earth's highest peaks including <strong className="text-foreground">K2</strong>, the world's second-highest mountain. 
          This ancient land offers an unparalleled blend of breathtaking natural beauty, rich cultural heritage, and warm hospitality 
          that will leave you speechless.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          From the turquoise waters of pristine alpine lakes to historic palaces perched on mountain valleys, 
          every corner of Baltistan tells a story of adventure, culture, and timeless beauty waiting to be discovered.
        </p>
      </section>

      {/* Feature Highlights Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
        <Card className="group hover-scale transition-all hover:shadow-2xl border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          <CardContent className="pt-8 relative">
            <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 inline-block shadow-lg group-hover:shadow-primary/20 transition-shadow">
              <Mountain className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-foreground">4 Giants</h3>
            <p className="text-muted-foreground leading-relaxed">
              K2, Nanga Parbat, Broad Peak, and Gasherbrum - home to four of the world's fourteen 8000-meter peaks
            </p>
          </CardContent>
        </Card>

        <Card className="group hover-scale transition-all hover:shadow-2xl border-2 hover:border-accent/50 bg-gradient-to-br from-background to-accent/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          <CardContent className="pt-8 relative">
            <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 inline-block shadow-lg group-hover:shadow-accent/20 transition-shadow">
              <Map className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-foreground">Pristine Lakes</h3>
            <p className="text-muted-foreground leading-relaxed">
              Turquoise alpine lakes, glacial streams, and stunning water bodies nestled among towering peaks
            </p>
          </CardContent>
        </Card>

        <Card className="group hover-scale transition-all hover:shadow-2xl border-2 hover:border-secondary/50 bg-gradient-to-br from-background to-secondary/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          <CardContent className="pt-8 relative">
            <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 inline-block shadow-lg group-hover:shadow-secondary/20 transition-shadow">
              <Heart className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-foreground">Warm Hearts</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experience legendary Balti hospitality and genuine care from one of the friendliest cultures on Earth
            </p>
          </CardContent>
        </Card>

        <Card className="group hover-scale transition-all hover:shadow-2xl border-2 hover:border-primary/50 bg-gradient-to-br from-background to-primary/5 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
          <CardContent className="pt-8 relative">
            <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 inline-block shadow-lg group-hover:shadow-primary/20 transition-shadow">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-bold text-2xl mb-2 text-foreground">Ancient Culture</h3>
            <p className="text-muted-foreground leading-relaxed">
              700+ years of unique Balti-Tibetan heritage with historic palaces, mosques, and living traditions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Info Cards */}
      <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
        <Card className="hover-scale transition-all hover:shadow-2xl border-2 hover:border-primary/50 overflow-hidden group">
          <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />
          <CardContent className="pt-8">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 shadow-lg group-hover:shadow-primary/30 transition-shadow">
                <Mountain className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl mb-4 text-primary">Why Visit Baltistan?</h3>
                <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span><strong className="text-foreground">Four 8000m+ peaks:</strong> K2 (8,611m), Nanga Parbat (8,126m), Broad Peak (8,051m), Gasherbrum I & II</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span><strong className="text-foreground">Pristine wilderness:</strong> Turquoise lakes, ancient glaciers, alpine meadows, and dramatic valleys</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span><strong className="text-foreground">Rich heritage:</strong> 700-year-old Balti culture blending Tibetan and Islamic traditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span><strong className="text-foreground">Legendary treks:</strong> K2 Base Camp, Gondogoro La, Deosai Plains, and countless hidden trails</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1 text-xl">•</span>
                    <span><strong className="text-foreground">Unmatched hospitality:</strong> Experience genuine warmth and care from the Balti people</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover-scale transition-all hover:shadow-2xl border-2 hover:border-accent/50 overflow-hidden group">
          <div className="h-2 bg-gradient-to-r from-accent via-secondary to-primary" />
          <CardContent className="pt-8">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg group-hover:shadow-accent/30 transition-shadow">
                <Map className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl mb-4 text-accent">Best Time to Visit</h3>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-5 rounded-xl border-l-4 border-accent shadow-sm">
                    <p className="font-bold text-lg text-foreground mb-2">Peak Season: May - October</p>
                    <p className="text-muted-foreground">Pleasant 15-25°C temperatures, ideal for all activities and perfect weather</p>
                  </div>
                  <div className="space-y-3 text-sm md:text-base">
                    <div className="bg-background/50 p-4 rounded-lg border border-border">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground text-base">🌸 Spring/Fall (Apr-May, Sep-Oct):</strong><br/>
                        Blooming valleys, fewer crowds, best photography, comfortable hiking temperatures
                      </p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground text-base">☀️ Summer (Jun-Aug):</strong><br/>
                        Perfect for high-altitude trekking, warmest weather, all attractions accessible
                      </p>
                    </div>
                    <div className="bg-background/50 p-4 rounded-lg border border-border">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground text-base">❄️ Winter (Nov-Mar):</strong><br/>
                        Snow-covered landscapes, winter sports, limited access, for adventure seekers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <section className="animate-fade-in">
        <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 hover-scale hover-glow overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl" />
          
          <CardContent className="pt-12 pb-12 relative text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready for the Adventure of a Lifetime?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground leading-relaxed">
                Start planning your journey to Baltistan with our comprehensive guides, destination insights, 
                and practical travel information.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/90 hover-scale shadow-xl text-base px-8 py-6">
                  <Link href="/getting-there">How to Get There</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="hover-scale border-2 shadow-xl text-base px-8 py-6">
                  <Link href="/destinations">Browse Destinations</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="hover-scale border-2 shadow-xl text-base px-8 py-6">
                  <Link href="/travel-essentials">Travel Essentials</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}