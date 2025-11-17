import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Baltistan Tourism Guide.",
};

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function Privacy() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">
          Last updated: November 2025
        </p>
      </div>

      <Card className="border-2">
        <CardContent className="pt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-3">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information you provide directly (name, email, messages) and automatically through cookies and analytics. 
              This helps us improve your experience and provide better services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">2. How We Use Information</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Respond to your inquiries and provide customer support</li>
              <li>• Improve our website and services</li>
              <li>• Send promotional content (only with your consent)</li>
              <li>• Analyze usage patterns and trends</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">3. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">4. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">5. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3">6. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For privacy-related questions, contact us at info@baltistantouring.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
