import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import { Home, DollarSign, GraduationCap, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-help-navy text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 animate-fadeIn">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#0077CC]">
                FIRST-TIME HOMEBUYERS
              </h1>
              <div className="space-y-4">
                <p className="text-4xl text-[#0077CC]">Get up to</p>
                <p className="text-6xl font-bold text-[#8AB833]">$20,000</p>
                <p className="text-4xl text-[#0077CC]">for Down Payment<br />& Closing Costs*</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-italic text-[#8AB833]">ACT NOW</p>
                <p className="text-3xl text-[#0077CC]">FUNDS WON'T <span className="font-script text-[#8AB833]">Last!</span></p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/3f2c80c8-f63c-4287-8d8b-c9ed4a200950.png"
                alt="Family moving into their new home"
                className="rounded-lg shadow-xl animate-fadeIn"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-help-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-help-navy">
            Program Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Up to $20,000 in Assistance",
                description: "Use towards down payment and closing costs.",
              },
              {
                icon: Home,
                title: "First-Time Homebuyers",
                description: "Program designed specifically for first-time buyers.",
              },
              {
                icon: Gift,
                title: "Forgivable Grant",
                description: "No repayment required with 5-year retention.",
              },
              {
                icon: GraduationCap,
                title: "Income Limits Apply",
                description: "Based on household size and location.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-help-blue" />
                <h3 className="text-xl font-semibold mb-2 text-help-navy">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-help-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-help-navy text-center">
              Start Your Homeownership Journey Today
            </h2>
            <div className="flex justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-help-navy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <img
              src="/lovable-uploads/3f2c80c8-f63c-4287-8d8b-c9ed4a200950.png"
              alt="Cornerstone Home Lending"
              className="h-12"
            />
            <p className="text-sm text-center md:text-left max-w-3xl">
              *The Homebuyer Equity Leverage Partnership (HELP) program offers first-come, first-served forgivable grants of up to $20,000 in AR, LA, MS, and other states in which Cornerstone is registered. Household income limits, 5-year home retention agreement, and other requirements apply; see loan officer for details. Not a commitment to lend.
            </p>
            <div className="flex gap-4">
              <img src="/member-fdic.png" alt="Member FDIC" className="h-8" />
              <img src="/equal-housing-lender.png" alt="Equal Housing Lender" className="h-8" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;